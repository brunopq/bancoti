import { injectable, inject } from "inversify"
import { differenceInDays } from "date-fns"

import { LoggerFactory } from "@/utils/LoggerProvider.ts"

import { JuditService } from "@/persistance/external/judit/juditService.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"
import { TribunalRepository } from "@/persistance/repositories/TribunalRepository.ts"
import { CourtRepository } from "@/persistance/repositories/CourtRepository.ts"
import { LegalEntityRepository } from "@/persistance/repositories/LegalEntityRepository.ts"
import { IndividualRepository } from "@/persistance/repositories/IndividualRepository.ts"
import { PartyRepository } from "@/persistance/repositories/PartyRepository.ts"
import { SubjectRepository } from "@/persistance/repositories/SubjectRepository.ts"
import { MovementRepository } from "@/persistance/repositories/MovementRepository.ts"

import type { Lawsuit } from "@/persistance/models/lawsuit.ts"
import type { InsertCourt, Court } from "@/persistance/models/court.ts"
import type { Party } from "@/persistance/models/party.ts"
import type { EntityType, PartyRole } from "@/persistance/models/enums.ts"
import type { InsertSubject, Subject } from "@/persistance/models/subject.ts"
import type { JuditParty } from "@/persistance/external/judit/dto/index.ts"
import type { LegalEntity } from "@/persistance/models/legalEntity.ts"
import type { Individual } from "@/persistance/models/individual.ts"

const juditLawsuitInstanceMapper = {
  toModel: (instance: number | undefined): Lawsuit["instance"] => {
    if (instance === 1) return "first"
    if (instance === 2) return "second"
    return "special"
  },
}

@injectable()
export class JuditSyncService {
  constructor(
    @inject(JuditService) private readonly judit: JuditService,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
    @inject(TribunalRepository)
    private readonly tribunalRepository: TribunalRepository,
    @inject(CourtRepository)
    private readonly courtRepository: CourtRepository,
    @inject(LegalEntityRepository)
    private readonly legalEntityRepository: LegalEntityRepository,
    @inject(IndividualRepository)
    private readonly individualRepository: IndividualRepository,
    @inject(PartyRepository)
    private readonly partyRepository: PartyRepository,
    @inject(SubjectRepository)
    private readonly subjectRepository: SubjectRepository,
    @inject(MovementRepository)
    private readonly movementRepository: MovementRepository,

    private readonly logger = LoggerFactory("JuditSyncService"),
  ) {}

  private async syncCourts(courts: InsertCourt[]): Promise<Court[]> {
    this.logger.info({ count: courts.length }, "Syncing courts")

    const result = await Promise.all(
      courts.map((court) => this.courtRepository.sync(court)),
    )

    this.logger.info({ synced: result.length }, "Courts synced")

    return result
  }

  private async syncSubjects(subjects: InsertSubject[]): Promise<Subject[]> {
    this.logger.info({ count: subjects.length }, "Syncing subjects")

    const result = await Promise.all(
      subjects.map((subject) => this.subjectRepository.sync(subject)),
    )

    this.logger.info({ synced: result.length }, "Subjects synced")

    return result
  }

  private async syncLegalEntity(party: JuditParty): Promise<LegalEntity> {
    const document = party.main_document?.replace(/\D/g, "")

    this.logger.info({ name: party.name, document }, "Syncing legal entity")

    if (!document || document.length !== 14) {
      this.logger.error({ party }, "Invalid company document")
      throw new Error(
        `Company party ${party.name} has invalid document: ${party.main_document}`,
      )
    }

    const company = await this.legalEntityRepository.sync({
      cnpj: document,
      corporateName: party.name,
    })

    this.logger.info({ id: company.id }, "Legal entity synced")

    return company
  }

  private async syncPerson(party: JuditParty): Promise<Individual> {
    const document = party.main_document?.replace(/\D/g, "")

    this.logger.info({ name: party.name, document }, "Syncing individual")

    if (!document || document.length !== 11) {
      this.logger.error({ party }, "Invalid person document")
      throw new Error(
        `Person party ${party.name} has invalid document: ${party.main_document}`,
      )
    }

    const person = await this.individualRepository.sync({
      cpf: document,
      name: party.name,
    })

    this.logger.info({ id: person.id }, "Individual synced")

    return person
  }

  private async syncParty(
    lawsuitId: string,
    party: JuditParty,
  ): Promise<Party | null> {
    this.logger.info({ lawsuitId, party: party.name }, "Syncing party")

    let side: PartyRole

    if (party.person_type?.toLocaleLowerCase() === "advogado") {
      this.logger.warn({ party }, "Party is a lawyer, skipping sync for party")
      return null // skip lawyers for now
    }

    if (party.side.toLocaleLowerCase() === "active") {
      side = "author"
    } else if (party.side.toLocaleLowerCase() === "passive") {
      side = "defendant"
    } else {
      this.logger.error({ party }, "Unknown party side")
      return null
    }

    let entityId: string
    let entityType: EntityType

    const docLength = party.main_document?.replace(/\D/g, "").length ?? 0

    if (docLength === 14 || party.entity_type?.toLowerCase() === "company") {
      entityType = "legal_entity"
    } else if (
      docLength === 11 ||
      party.entity_type?.toLowerCase() === "person"
    ) {
      entityType = "individual"
    } else {
      this.logger.error(
        { party },
        "Unknown entity type and document type for party",
      )
      return null
      // throw new Error(
      //   `Unknown entity type (${party.entity_type}) and document ${party.main_document} for party ${party.name}`,
      // )
    }

    switch (entityType) {
      case "legal_entity":
        {
          const legalEntity = await this.syncLegalEntity(party)
          entityId = legalEntity.id
        }
        break
      case "individual":
        {
          const individual = await this.syncPerson(party)
          entityId = individual.id
        }
        break
    }

    const dbParty = await this.partyRepository.findEntityForLawsuit({
      entityId,
      lawsuitId,
    })

    if (dbParty) {
      this.logger.info({ id: dbParty.id }, "Party already exists")
      return dbParty
    }

    const created = await this.partyRepository.create({
      entityId,
      type: entityType,
      lawsuitId: lawsuitId,
      role: side,
    })

    this.logger.info({ id: created.id }, "Party created")
    return created
  }

  private async syncParties(
    lawsuitId: string,
    parties: JuditParty[],
  ): Promise<(Party | null)[]> {
    this.logger.info({ count: parties.length }, "Syncing parties")

    const result = await Promise.all(
      parties.map((p) => this.syncParty(lawsuitId, p)),
    )

    this.logger.info({ synced: result.length }, "Parties synced")

    return result
  }

  async syncLawsuitByCNJ(cnj: string) {
    this.logger.info({ cnj }, "Starting lawsuit sync")

    const dbLawsuit = await this.lawsuitRepository.findByCnj(cnj)

    if (
      dbLawsuit?.syncedAt &&
      differenceInDays(new Date(), dbLawsuit.syncedAt) < 1
    ) {
      this.logger.info(
        { cnj, syncedAt: dbLawsuit.syncedAt },
        "Lawsuit synced recently, skipping sync",
      )
      return {
        lawsuitId: dbLawsuit.id,
        fresh: false,
        syncedAt: dbLawsuit.syncedAt,
      }
    }

    const juditResponse = await this.judit.searchLawsuitByCNJ(cnj)

    if (juditResponse.length === 0) {
      this.logger.error({ cnj }, "Judit API returned no data")
      throw new Error(`Lawsuit with CNJ ${cnj} not found in judit API`)
    }
    this.logger.info(
      { cnj, count: juditResponse.length },
      "Fetched data from Judit API",
    )

    const instances = juditResponse.reduce<Record<string, number>>(
      (acc, { response_data }) => {
        const code = response_data.code
        acc[code] = Math.max(acc[code] || 1, response_data.instance ?? 1)
        return acc
      },
      {},
    )

    return juditResponse.map(async ({ response_data }) => {
      const tribunal = await this.tribunalRepository.sync({
        abbreviation: response_data.tribunal_acronym,
        name: response_data.tribunal_acronym,
        area: "unknown",
      })

      this.logger.info({ tribunalId: tribunal.id }, "Tribunal synced")

      const courts = await this.syncCourts(
        response_data.courts?.map((c) => ({
          name: c.name,
          area: "unknown",
          tribunalId: tribunal.id,
        })) ?? [],
      )

      const subjects = await this.syncSubjects(
        response_data.subjects?.map((s) => ({
          name: s.name,
        })) ?? [],
      )

      const lawsuit = await this.lawsuitRepository.sync({
        cnj: response_data.code,
        area: "unknown",
        instance: juditLawsuitInstanceMapper.toModel(
          instances[response_data.code], // this should be defined
        ),
        status: response_data.status,
        subjectsIds: subjects.map((s) => s.id),
        courtsIds: courts.map((c) => c.id),
        syncedAt: new Date(),
      })

      this.logger.info({ lawsuitId: lawsuit.id }, "Lawsuit synced")

      const parties = await this.syncParties(
        lawsuit.id,
        response_data.parties ?? [],
      )

      const movements = await Promise.allSettled(
        response_data.steps?.map(async (m) => {
          const dbMov = await this.movementRepository.create({
            title: "Sem título", // TODO: change this because judit does not return movement title
            type: "unknown", // TODO: change this because judit does not return movement type
            description: m.content,
            dispatchDate: new Date(m.step_date),
            lawsuitId: lawsuit.id,
            showClient: true, // default for judit is true, they are good
          })
        }) ?? [],
      )

      this.logger.info({ movements: movements.length }, "Movements processed")

      this.logger.info({ lawsuitId: lawsuit.id }, "Finished lawsuit sync")

      return { lawsuitId: lawsuit.id, fresh: true, syncedAt: lawsuit.syncedAt }
    }) 

  }
}
