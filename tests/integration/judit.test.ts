import { beforeEach, describe, it } from "node:test"
import assert from "node:assert"
import * as sinon from "sinon"

import { JuditSyncService } from "@/domain/services/juditSyncService.ts"
import { JuditService } from "@/persistance/external/judit/juditService.ts"
import { container } from "@/dependencyManager.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"
import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"
import { PartyRepository } from "@/persistance/repositories/PartyRepository.ts"

describe("Judit lawsuit sync - mocked judit", { only: true }, () => {
  const mockJuditService = sinon.createStubInstance(JuditService)

  container.bind(JuditService).toConstantValue(mockJuditService)
  const service = container.get(JuditSyncService)

  const lawsuitRepository = container.get(LawsuitRepository)
  const lawsuitSpy = sinon.spy(lawsuitRepository, "sync")
  const clientRepository = container.get(ClientRepository)
  const partyRepository = container.get(PartyRepository)
  const partySpy = sinon.spy(partyRepository, "create")

  beforeEach(() => {
    sinon.resetHistory()
  })

  it("should be defined", () => {
    assert.ok(service)
  })

  it("should do stuff", async () => {
    mockJuditService.searchLawsuitByCNJ.resolves({
      request_status: "completed",
      request_id: "req-12345",
      response_id: "res-67890",
      origin: "system",
      origin_id: "origin-001",
      response_type: "lawsuit",
      response_data: {
        code: "123456",
        justice: "Federal",
        tribunal: "TRF1",
        instance: 1,
        distribution_date: "2023-01-01T00:00:00.000Z",
        tribunal_acronym: "TRF1",
        secrecy_level: 2,
        tags: { key1: "value1", key2: "value2" },
        subjects: [
          { code: "001", name: "Civil" },
          { code: "002", name: "Criminal" },
        ],
        classifications: [
          { code: "A1", name: "Urgent" },
          { code: "B2", name: "Normal" },
        ],
        courts: [
          { code: "C1", name: "First Court" },
          { code: "C2", name: "Second Court" },
        ],
        parties: [
          {
            name: "John Doe",
            side: "Active",
            person_type: "Autor",
            entity_type: "Individual",
            document: "12345678901",
            document_type: "cpf",
            lawyers: [
              {
                name: "Jane Smith",
                document: "98765432100",
                document_type: "cpf",
                licence: "OAB12345",
              },
            ],
            tags: { role: "plaintiff" },
          },
        ],
        steps: [
          {
            lawsuit_cnj: "9999999-99.9999.9.99.9999",
            lawsuit_instance: 1,
            private: false,
            step_id: "step-001",
            tags: { crawl_id: "crawl-123" },
            content: "Step content example",
            step_date: "2023-01-02T00:00:00.000Z",
            steps_count: 10,
          },
        ],
        attachments: [],
        related_lawsuits: [],
        crawler: {
          source_name: "CrawlerSystem",
          crawl_id: "crawl-123",
          weight: 1,
          updated_at: "2023-01-03T00:00:00.000Z",
        },
        amount: 1000,
        last_step: {
          lawsuit_cnj: "9999999-99.9999.9.99.9999",
          lawsuit_instance: 1,
          step_id: "step-002",
          step_date: "2023-01-04T00:00:00.000Z",
          private: false,
          steps_count: 15,
        },
        phase: "Execution",
        status: "Active",
        name: "Lawsuit Name",
      },
      user_id: "user-001",
      created_at: "2023-01-01T00:00:00.000Z",
      tags: { key3: "value3" },
    })

    const result = await service.syncLawsuitByCNJ("0000000-00.0000.0.00.0000")
    console.log(result)
    // assert.ok(result)
    console.log(lawsuitSpy.calledOnce)
  })
})
