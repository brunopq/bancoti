import { injectable, inject } from "inversify"

import { JudiceService } from "@/persistance/external/judice/judiceService.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"
import { CourtRepository } from "@/persistance/repositories/CourtRepository.ts"
import { DistrictRepository } from "@/persistance/repositories/DistrictRepository.ts"
import { ForumRepository } from "@/persistance/repositories/ForumRepository.ts"
import { jAreaMapper } from "@/persistance/external/judice/mappers/jAreaMapper.ts"
import type { Subject } from "@/persistance/models/subject.ts"
import type { EntityType, PartyRole } from "@/persistance/models/enums.ts"
import { PartyRepository } from "@/persistance/repositories/PartyRepository.ts"
import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"
import { LegalEntityRepository } from "@/persistance/repositories/LegalEntityRepository.ts"
import { IndividualRepository } from "@/persistance/repositories/IndividualRepository.ts"
import type { Individual } from "@/persistance/models/individual.ts"
import type { LegalEntity } from "@/persistance/models/legalEntity.ts"
import { LoggerFactory } from "@/utils/LoggerProvider.ts"

@injectable()
export class JudiceLawsuitSyncService {
  constructor(
    @inject(JudiceService)
    private readonly judiceService: JudiceService,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
    @inject(CourtRepository)
    private readonly courtRepository: CourtRepository,
    @inject(DistrictRepository)
    private readonly districtRepository: DistrictRepository,
    @inject(ForumRepository)
    private readonly forumRepository: ForumRepository,
    @inject(PartyRepository)
    private readonly partyRepository: PartyRepository,
    @inject(ClientRepository)
    private readonly clientRepository: ClientRepository,
    @inject(LegalEntityRepository)
    private readonly legalEntityRepository: LegalEntityRepository,
    @inject(IndividualRepository)
    private readonly individualRepository: IndividualRepository,

    private readonly logger = LoggerFactory("JudiceLawsuitSyncService"),
  ) {}

  private async syncParty(
    lawsuitId: string,
    party: Awaited<
      ReturnType<JudiceService["listLawsuits"]>
    >[number]["partes"][number],
  ) {
    this.logger.info(
      { lawsuitId, partyJid: party.id },
      `Syncing party: ${party.nome}`,
    )

    let type: EntityType = "individual"

    // TODO: this is a very naive way to determine the type of party, but judice does not provide this information
    if (party.nome.toLocaleLowerCase().match(/(ltda)|(s\/a)/)) {
      type = "legal_entity"
    }

    let entity: LegalEntity | Individual | null = null

    if (type === "individual") {
      entity = await this.individualRepository.findByName(party.nome)

      if (!entity) {
        this.logger.warn(
          { partyName: party.nome },
          "Individual not found for party, creating new one with placeholder CPF",
        )

        entity = await this.individualRepository.create({
          name: party.nome,
          cpf: "000.000.000-00", // TODO: judice does not provide CPF, how is this API so bad??
        })
      }
    } else {
      entity = await this.legalEntityRepository.findByName(party.nome)

      if (!entity) {
        this.logger.warn(
          { partyName: party.nome },
          "Legal entity not found for party, creating new one with placeholder CNPJ",
        )

        entity = await this.legalEntityRepository.create({
          corporateName: party.nome,
          cnpj: "00.000.000/0000-00", // TODO:
        })
      }
    }

    let role: PartyRole

    switch (party.posicao.nome.toLocaleLowerCase()) {
      case "reclamante":
      case "autor":
        role = "author"
        break
      case "reclamado":
      case "réu":
      case "reu":
        role = "defendant"
        break
      default:
        this.logger.info(
          { lawsuitId, partyRole: party.posicao.nome, partyJid: party.id },
          "Unknown party role, aborting sync",
        )
        throw new Error(`Unknown party role: ${party.posicao.nome}`)
    }

    const createdParty = this.partyRepository.create({
      entityId: entity.id,
      type,
      lawsuitId,
      role,
    })

    return {
      ...createdParty,
      entity,
    }
  }

  private async syncParties(
    lawsuitId: string,
    party: Awaited<ReturnType<JudiceService["listLawsuits"]>>[number]["partes"],
  ) {
    return Promise.all(party.map((p) => this.syncParty(lawsuitId, p)))
  }

  private async syncLawsuit(
    lawsuit: Awaited<ReturnType<JudiceService["listLawsuits"]>>[number],
  ) {
    const district = await this.districtRepository.sync({
      name: lawsuit.comarca.nome,
      state: lawsuit.comarca.uf,
      municipalities: [lawsuit.comarca.nome],
    })

    const hasForum = lawsuit.forum.nome !== null && lawsuit.forum.id !== null

    const forum = hasForum
      ? await this.forumRepository.sync({
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          name: lawsuit.forum.nome!,
          districtId: district.id,
        })
      : this.logger.info(`Lawsuit ${lawsuit.numero} has no forum`)

    const court = await this.courtRepository.sync({
      area: jAreaMapper.toDomain(lawsuit.area.nome),
      name: lawsuit.cartorio.nome,
      forumId: forum?.id ?? null,
    })

    const subjects = [] as Subject[] // TODO: judice does not provide subjects

    const dbLawsuit = await this.lawsuitRepository.sync({
      area: jAreaMapper.toDomain(lawsuit.area.nome),
      cnj: lawsuit.numero,
      courtsIds: [court.id],
      instance: "first", // TODO: judice does not provide instance
      status: lawsuit.fase_processual.nome,
      subjectsIds: subjects.map((subject) => subject.id),
      _jid: lawsuit.id,
    })

    const parties = await this.syncParties(dbLawsuit.id, lawsuit.partes)
    const clientParty = await this.syncParty(dbLawsuit.id, lawsuit.cliente)
    const client = await this.clientRepository.create({
      type: clientParty.type,
      entityId: clientParty.entityId,
    })
  }

  async sync() {
    this.logger.info("Starting sync of lawsuits from Judice")

    const lastLawsuit = await this.lawsuitRepository.findAll(undefined, {
      orderBy: { _jid: "desc" },
      limit: 1,
    })

    const lastJid = (lastLawsuit.length > 0 && lastLawsuit[0]._jid) || 0

    this.logger.info(`Last JID found: ${lastJid}`)

    const newLawsuits = await this.judiceService.listLawsuits({
      startFrom: lastJid,
    })

    this.logger.info(`Found ${newLawsuits.length} new lawsuits to sync`)

    await Promise.allSettled(
      newLawsuits.map((lawsuit) => this.syncLawsuit(lawsuit)),
    )
  }
}
