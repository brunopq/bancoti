import { inject, injectable } from "inversify"
import { addMilliseconds, isAfter } from "date-fns"

import { delay } from "@/utils/delay.ts"

import { JuditApiClient } from "./apiClient.ts"

@injectable()
export class JuditService {
  private static readonly DEFAULT_POLLING_DELAY_MS = 5 * 1000 // 5 seconds
  private static readonly DEFAULT_MAX_POLLING_TIME_MS = 30 * 60 * 1000 // 30 minutes

  constructor(@inject(JuditApiClient) private readonly api: JuditApiClient) {}

  async searchLawsuitByCNJ(cnj: string) {
    const createdReq = await this.api.createRequest({
      body: {
        search: {
          search_key: cnj,
          search_type: "lawsuit_cnj",
        },
      },
    })

    if (createdReq.status !== 201)
      throw new Error("Error while creating lawsuit search")

    const res = await this.pollRequest(createdReq.body.request_id)

    return res
  }

  private async pollRequest(
    requestId: string,
    maxPollingTimeMs = JuditService.DEFAULT_MAX_POLLING_TIME_MS,
    pollingDelayMs = JuditService.DEFAULT_POLLING_DELAY_MS,
  ) {
    const startTime = new Date()
    const timeoutTime = addMilliseconds(startTime, maxPollingTimeMs)

    while (!isAfter(new Date(), timeoutTime)) {
      await delay(pollingDelayMs)

      const response = await this.api.checkRequest({
        params: { requestId },
      })

      if (response.status !== 200) continue

      if (response.body.status === "completed") {
        return await this.getResponse(requestId)
      }
    }

    throw new Error(`Polling timeout after ${maxPollingTimeMs}ms`)
  }

  private async getResponse(requestId: string) {
    const res = await this.api.listResponses({
      query: {
        request_id: requestId,
      },
    })

    if (res.status !== 200)
      throw new Error(`Failed to get the response for request id: ${requestId}`)

    return res.body.page_data
  }
}
