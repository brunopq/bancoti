import { describe, it, before, beforeEach } from "node:test"
import assert from "node:assert"
import { stub, createStubInstance } from "sinon"

import { JuditService } from "@/persistance/external/judit/juditService.ts"
import { JuditSyncService } from "@/domain/services/juditSyncService.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"
import { TribunalRepository } from "@/persistance/repositories/TribunalRepository.ts"
import { CourtRepository } from "@/persistance/repositories/CourtRepository.ts"
import { LegalEntityRepository } from "@/persistance/repositories/LegalEntityRepository.ts"
import { IndividualRepository } from "@/persistance/repositories/IndividualRepository.ts"
import { PartyRepository } from "@/persistance/repositories/PartyRepository.ts"
import { SubjectRepository } from "@/persistance/repositories/SubjectRepository.ts"
import { MovementRepository } from "@/persistance/repositories/MovementRepository.ts"

describe("JuditSyncService", () => {
  const stubJuditService = createStubInstance(JuditService)
  const stubLawsuitRepository = createStubInstance(LawsuitRepository)
  const stubTribunalRepository = createStubInstance(TribunalRepository)
  const stubCourtRepository = createStubInstance(CourtRepository)
  const stubLegalEntityRepository = createStubInstance(LegalEntityRepository)
  const stubIndividualRepository = createStubInstance(IndividualRepository)
  const stubPartyRepository = createStubInstance(PartyRepository)
  const stubSubjectRepository = createStubInstance(SubjectRepository)
  const stubMovementRepository = createStubInstance(MovementRepository)

  const juditSyncService = new JuditSyncService(
    stubJuditService,
    stubLawsuitRepository,
    stubTribunalRepository,
    stubCourtRepository,
    stubLegalEntityRepository,
    stubIndividualRepository,
    stubPartyRepository,
    stubSubjectRepository,
    stubMovementRepository,
  )

  beforeEach(() => {
    stubJuditService.searchLawsuitByCNJ.resetHistory()
    stubTribunalRepository.sync.resetHistory()
    stubCourtRepository.sync.resetHistory()
    stubLegalEntityRepository.sync.resetHistory()
    stubIndividualRepository.sync.resetHistory()
    stubPartyRepository.create.resetHistory()
    stubSubjectRepository.sync.resetHistory()
    stubMovementRepository.create.resetHistory()
    stubLawsuitRepository.sync.resetHistory()
  })

  it("should be defined", () => {
    assert(juditSyncService)
  })

  it("should throw on not found", () => {
    stubJuditService.searchLawsuitByCNJ.rejects(new Error("Lawsuit not found"))

    assert.rejects(async () => {
      await juditSyncService.syncLawsuitByCNJ("9999999-99.9999.9.99.9999")
    })
  })

  it("should not call the repositories when not needed", async () => {
    stubJuditService.searchLawsuitByCNJ.resolves({
      origin: "",
      request_id: "",
      request_status: "completed",
      response_data: {
        code: "9999999-99.9999.9.99.9999",
        status: "active",
        instance: 1,
        tribunal_acronym: "TRT4",
        amount: 20000,
        subjects: [],
        attachments: [],
        tribunal: "30",
        courts: [],
        steps: [],
      },
      response_id: "",
      response_type: "lawsuit",
    })

    stubTribunalRepository.sync.resolves({
      id: "30",
      name: "Tribunal Regional do Trabalho da 4ª Região",
      abbreviation: "TRT4",
      area: "labor",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubLawsuitRepository.sync.resolves({
      id: "lawsuit-1",
      cnj: "9999999-99.9999.9.99.9999",
      status: "active",
      area: "labor",
      instance: "first",
      subjectsIds: ["subject-1"],
      courtsIds: ["1234"],
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await assert.doesNotReject(
      juditSyncService.syncLawsuitByCNJ("9999999-99.9999.9.99.9999"),
    )
    assert(stubLawsuitRepository.sync.calledOnce)
    assert(stubTribunalRepository.sync.calledOnce)
    assert(stubCourtRepository.sync.notCalled)
    assert(stubSubjectRepository.sync.notCalled)
    assert(stubLegalEntityRepository.sync.notCalled)
    assert(stubIndividualRepository.sync.notCalled)
    assert(stubPartyRepository.create.notCalled)
    assert(stubMovementRepository.create.notCalled)
  })

  it("should sync everything when needed", async () => {
    stubJuditService.searchLawsuitByCNJ.resolves({
      origin: "",
      request_id: "",
      request_status: "completed",
      response_data: {
        code: "9999999-99.9999.9.99.9999",
        status: "active",
        instance: 1,
        tribunal_acronym: "TRT4",
        amount: 20000,
        subjects: [{ name: "Subject 1" }, { name: "Subject 2" }],
        attachments: [],
        parties: [
          {
            name: "Mequi lamche felizes",
            document: "234.567.890/0001-01",
            person_type: "legal_entity",
            side: "Passivo",
            document_type: "cnpj",
          },
          {
            name: "Fulano de Tal",
            document: "12345678901",
            person_type: "individual",
            side: "Ativo",
            document_type: "cpf",
          },
        ],
        tribunal: "30",
        courts: [{ name: "Court 1" }],
        steps: [
          {
            content: "Intimação da parte reclamada para apresentar defesa",
            step_date: "2023-10-01T00:00:00Z",
            lawsuit_cnj: "9999999-99.9999.9.99.9999",
            lawsuit_instance: 1,
            step_id: "step-1",
          },
          {
            content: "Audiência de conciliação agendada",
            step_date: "2023-10-02T00:00:00Z",
            lawsuit_cnj: "9999999-99.9999.9.99.9999",
            lawsuit_instance: 1,
            step_id: "step-2",
          },
        ],
      },
      response_id: "",
      response_type: "lawsuit",
    })

    stubTribunalRepository.sync.resolves({
      id: "30",
      name: "Tribunal Regional do Trabalho da 4ª Região",
      abbreviation: "TRT4",
      area: "labor",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    stubCourtRepository.sync.resolves({
      id: "court-1",
      name: "Court 1",
      area: "labor",
      tribunalId: "30",
      forumId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubSubjectRepository.sync.withArgs({ name: "Subject 1" }).resolves({
      id: "subject-1",
      name: "Subject 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubSubjectRepository.sync.withArgs({ name: "Subject 2" }).resolves({
      id: "subject-2",
      name: "Subject 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubLegalEntityRepository.sync.resolves({
      id: "legal-entity-1",
      corporateName: "Mequi lamche felizes",
      cnpj: "234.567.890/0001-01",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubIndividualRepository.sync.resolves({
      id: "individual-1",
      name: "Fulano de Tal",
      cpf: "12345678901",
      birthDate: new Date("2000-01-01"),
      email: "fulaninho@email.com",
      gender: "male",
      phones: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubLawsuitRepository.sync.resolves({
      id: "lawsuit-1",
      cnj: "9999999-99.9999.9.99.9999",
      status: "active",
      area: "labor",
      instance: "first",
      subjectsIds: ["subject-1", "subject-2"],
      courtsIds: ["court-1"],
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    stubPartyRepository.create
      .withArgs({
        type: "legal_entity",
      })
      .resolves({
        id: "party-1",
        lawsuitId: "lawsuit-1",
        entityId: "legal-entity-1",
        type: "legal_entity",
        role: "defendant",
        createdAt: new Date(),
        updatedAt: new Date(),
      })

    stubPartyRepository.create
      .withArgs({
        type: "individual",
      })
      .resolves({
        id: "party-2",
        lawsuitId: "lawsuit-1",
        entityId: "individual-1",
        type: "individual",
        role: "author",
        createdAt: new Date(),
        updatedAt: new Date(),
      })

    stubMovementRepository.create
      .withArgs({
        description: "Intimação da parte reclamada para apresentar defesa",
      })
      .resolves({
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "movement-1",
        lawsuitId: "lawsuit-1",
        description: "Intimação da parte reclamada para apresentar defesa",
        dispatchDate: new Date("2023-10-01T00:00:00Z"),
        lawsuitCnj: "9999999-99.9999.9.99.9999",
        showClient: true,
        title: "Sem título",
        type: "unknown",
        _judiceId: null,
      })
    stubMovementRepository.create
      .withArgs({
        description: "Audiência de conciliação agendada",
      })
      .resolves({
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "movement-2",
        lawsuitId: "lawsuit-1",
        description: "Audiência de conciliação agendada",
        dispatchDate: new Date("2023-10-02T00:00:00Z"),
        lawsuitCnj: "9999999-99.9999.9.99.9999",
        showClient: true,
        title: "Sem título",
        type: "unknown",
        _judiceId: null,
      })

    await assert.doesNotReject(
      juditSyncService.syncLawsuitByCNJ("9999999-99.9999.9.99.9999"),
    )

    assert(stubLawsuitRepository.sync.calledOnce)
    assert(stubTribunalRepository.sync.calledOnce)
    assert(stubCourtRepository.sync.calledOnce)
    assert(stubSubjectRepository.sync.calledTwice)
    assert.strictEqual(stubLegalEntityRepository.sync.callCount, 1)
    assert(stubIndividualRepository.sync.calledOnce)
    assert(stubPartyRepository.create.calledTwice)
    assert(stubMovementRepository.create.calledTwice)
  })
})
