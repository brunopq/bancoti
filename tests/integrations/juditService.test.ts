import { describe, it, before } from "node:test"
import assert from "node:assert"
import { stub, createStubInstance, useFakeTimers } from "sinon"

import { JuditService } from "../../src/persistance/external/judit/juditService.ts"
import { JuditApiClient } from "../../src/persistance/external/judit/apiClient.ts"
import * as dto from "../../src/persistance/external/judit/dto/index.ts"

describe("JuditService", { only: true }, (t) => {
  const clientMock = createStubInstance(JuditApiClient)
  const juditService = new JuditService(clientMock)

  it("should be defined", (i) => {
    assert(juditService)
  })

  it("should try to obtain the response more than once", async () => {
    clientMock.createRequest.resolves({
      status: 200,
      headers: new Headers(),
      body: {
        created_at: "2025-06-01 10:00",
        origin: "",
        request_id: "",
        search: {
          search_key: "0021142-63.2024.5.04.0008",
          search_type: "lawsuit_cnj",
        },
        status: "pending",
        updated_at: "2025-06-01 10:00",
        with_attachments: false,
      },
    })

    clientMock.checkRequest.onFirstCall().resolves({
      status: 200,
      headers: new Headers(),
      body: {
        created_at: "2025-06-01 10:00",
        request_id: "12345",
        status: "started",
        updated_at: "2025-06-01 10:00",
        search: {
          search_key: "0021142-63.2024.5.04.0008",
          search_type: "lawsuit_cnj",
        },
        origin: "",
        with_attachments: false,
      },
    })

    clientMock.checkRequest.onSecondCall().resolves({
      status: 200,
      headers: new Headers(),
      body: {
        created_at: "2025-06-01 10:00",
        request_id: "12345",
        status: "completed",
        updated_at: "2025-06-01 10:00",
        search: {
          search_key: "0021142-63.2024.5.04.0008",
          search_type: "lawsuit_cnj",
        },
        origin: "",
        with_attachments: false,
      },
    })

    clientMock.listResponses.resolves({
      status: 200,
      headers: new Headers(),
      body: {
        page: 1,
        page_count: 1,
        all_count: 1,
        all_pages_count: 1,
        page_data: [
          {
            request_id: "12345",
            origin: "",
            origin_id: "",
            request_status: "completed",
            response_id: "67890",
            response_type: "lawsuit",
            response_data: {
              amount: 1000,
              attachments: [],
              classifications: [],
              code: "0021142-63.2024.5.04.0008",
              courts: [],
              crawler: {
                crawl_id: "crawl123",
                source_name: "sourceName",
                updated_at: "2025-06-01T10:00:00Z",
                weight: 1.0,
              },
              distribution_date: "2025-06-01T10:00:00Z",
              instance: 1,
              justice: "Justice Name",
              last_step: {
                lawsuit_cnj: "0021142-63.2024.5.04.0008",
                lawsuit_instance: 1,
                step_date: "2025-06-01T10:00:00Z",
                step_id: "step123",
                private: false,
                steps_count: 5,
              },
              name: "Lawsuit Name",
              parties: [
                {
                  name: "Party Name",
                  side: "Plaintiff",
                  person_type: "Natural Person",
                  document: "12345678901",
                  document_type: "CPF",
                  lawyers: [],
                  tags: {},
                },
              ],
              phase: "Phase Name",
              related_lawsuits: [],
              secrecy_level: 0,
              status: "active",
              steps: [],
              subjects: [],
              tags: {},
              tribunal: "Tribunal Name",
              tribunal_acronym: "TRF",
            },
          },
        ],
      },
    })

    const res = await juditService.searchLawsuitByCNJ(
      "0021142-63.2024.5.04.0008",
    )

    assert(clientMock.createRequest.calledOnce)
    assert(clientMock.checkRequest.calledTwice)
    assert(clientMock.listResponses.calledOnce)

    assert.strictEqual(res?.response_id, "67890")
  })
})
