import { injectable, inject } from "inversify"

import { JuditService } from "../../persistance/external/judit/juditService.ts"
import { LawsuitRepository } from "../../persistance/repositories/LawsuitRepository.ts"
import { TribunalRepository } from "../../persistance/repositories/TribunalRepository.ts"
import { CourtRepository } from "../../persistance/repositories/CourtRepository.ts"
import { LegalEntityRepository } from "../../persistance/repositories/LegalEntityRepository.ts"
import { IndividualRepository } from "../../persistance/repositories/IndividualRepository.ts"
import { PartyRepository } from "../../persistance/repositories/PartyRepository.ts"
import { SubjectRepository } from "../../persistance/repositories/SubjectRepository.ts"
import { MovementRepository } from "../../persistance/repositories/MovementRepository.ts"

import type {
  InsertLawsuit,
  Lawsuit,
} from "../../persistance/models/lawsuit.ts"
import type { InsertCourt, Court } from "../../persistance/models/court.ts"
import type {
  InsertTribunal,
  Tribunal,
} from "../../persistance/models/tribunal.ts"
import type { Party, InsertParty } from "../../persistance/models/party.ts"
import type { EntityType } from "../../persistance/models/enums.ts"
import type {
  InsertSubject,
  Subject,
} from "../../persistance/models/subject.ts"
import type { InsertMovement } from "../../persistance/models/movement.ts"
import type { JuditParty } from "../../persistance/external/judit/dto/index.ts"
import type {
  InsertLegalEntity,
  LegalEntity,
} from "../../persistance/models/legalEntity.ts"
import type { Individual } from "../../persistance/models/individual.ts"

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
  ) {}

  // TODO: move batch sync to repositories too
  private async syncCourts(courts: InsertCourt[]): Promise<Court[]> {
    return await Promise.all(
      courts.map((court) => this.courtRepository.sync(court)),
    )
  }

  // TODO: same
  private async syncSubjects(subjects: InsertSubject[]): Promise<Subject[]> {
    return await Promise.all(
      subjects.map((subject) => this.subjectRepository.sync(subject)),
    )
  }

  private async syncLegalEntity(party: JuditParty): Promise<LegalEntity> {
    if (!party.document || party.document_type?.toLowerCase() !== "cnpj") {
      throw new Error(
        `Company party ${party.name} has invalid document: ${party.document} ${party.document_type}`,
      )
    }

    const company = await this.legalEntityRepository.sync({
      cnpj: party.document,
      corporateName: party.name,
    })

    return company
  }

  private async syncPerson(party: JuditParty): Promise<Individual> {
    if (!party.document || party.document_type?.toLowerCase() !== "cpf") {
      throw new Error(
        `Person party ${party.name} has invalid document: ${party.document} ${party.document_type}`,
      )
    }

    const person = await this.individualRepository.sync({
      cpf: party.document,
      name: party.name,
    })

    return person
  }

  // TODO: this might be fine here, there is no real sync logic for the party model
  private async syncParty(
    lawsuitId: string,
    party: JuditParty,
  ): Promise<Party> {
    let entityId: string
    let entityType: EntityType

    switch (party.entity_type) {
      case "company":
        {
          const legalEntity = await this.syncLegalEntity(party)
          entityId = legalEntity.id
          entityType = "legal_entity"
        }
        break
      case "person":
        {
          const individual = await this.syncPerson(party)
          entityId = individual.id
          entityType = "individual"
        }
        break

      default:
        throw new Error(
          `Unknown entity type: ${party.entity_type} for party ${party.name}`,
        ) // TODO: handle this better
    }

    return await this.partyRepository.create({
      entityId,
      type: entityType,
      lawsuitId: lawsuitId,
      role: party.side === "Active" ? "author" : "defendant",
    })
  }

  private async syncParties(
    lawsuitId: string,
    parties: JuditParty[],
  ): Promise<Party[]> {
    return await Promise.all(parties.map((p) => this.syncParty(lawsuitId, p)))
  }

  async syncLawsuitByCNJ(cnj: string) {
    const juditResponse = await this.judit.searchLawsuitByCNJ(cnj)

    if (!juditResponse || !juditResponse.response_data) {
      throw new Error(`Lawsuit with CNJ ${cnj} not found in judit API`)
    }

    const tribunal = await this.tribunalRepository.sync({
      abbreviation: juditResponse.response_data.tribunal_acronym,
      name: juditResponse.response_data.tribunal_acronym, // TODO: change this because judit does not return tribunal name
      area: "unknown",
    })

    const courts = await this.syncCourts(
      juditResponse.response_data.courts?.map((c) => ({
        name: c.name,
        area: "unknown",
        tribunalId: tribunal.id,
      })) ?? [],
    )

    const subjects = await this.syncSubjects(
      juditResponse.response_data.subjects?.map((s) => ({
        name: s.name,
      })) ?? [],
    )

    const lawsuit = await this.lawsuitRepository.sync({
      cnj: juditResponse.response_data.code,
      area: "unknown",
      instance: juditLawsuitInstanceMapper.toModel(
        juditResponse.response_data.instance,
      ),
      status: juditResponse.response_data.status,
      subjectsIds: subjects.map((s) => s.id),
      courtsIds: courts.map((c) => c.id),
    })

    const parties: Party[] = await this.syncParties(
      lawsuit.id,
      juditResponse.response_data.parties ?? [],
    )

    const movements = await Promise.allSettled(
      juditResponse.response_data.steps?.map(async (m) => {
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

    // return this.lawsuitRepository.create({
    // })
  }
}
