import { inject, injectable } from "inversify"

import { delay } from "../../../utils/delay.ts"

import { JuditApiClient } from "./apiClient.ts"

@injectable()
export class JuditService {
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

    if (createdReq.status !== 200)
      throw new Error("Error while creating lawsuit search")

    const res = await this.pollRequest(createdReq.body.request_id)

    return res
  }

  private async pollRequest(requestId: string, maxAttempts?: number) {
    let attempt = 0

    while (maxAttempts === undefined || attempt < maxAttempts) {
      await delay(1000)
      attempt++

      const response = await this.api.checkRequest({
        params: { requestId },
      })

      // or should I throw?
      if (response.status !== 200) continue

      if (response.body.status === "completed") {
        return await this.getResponse(requestId)
      }
    }

    throw new Error("Timeout")
  }

  private async getResponse(requestId: string) {
    const res = await this.api.listResponses({
      query: {
        request_id: requestId,
      },
    })

    if (res.status !== 200)
      throw new Error(`Failed to get the response for request id: ${requestId}`)

    return res.body.page_data.at(0)
  }
}
