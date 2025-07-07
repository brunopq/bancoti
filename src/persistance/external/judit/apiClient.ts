import {
  initClient,
  type ClientArgs,
  type InitClientReturn,
  type ClientInferRequest,
  type ClientInferResponses,
} from "@ts-rest/core"
import { inject, injectable } from "inversify"

import { env } from "../../../utils/env.ts"
import { requestsRouter, trackingRouter } from "./apiContract.ts"
import { LoggerClient } from "./loggerClient.ts"

@injectable()
export class JuditApiClient {
  private requests: InitClientReturn<typeof requestsRouter, ClientArgs>
  private tracking: InitClientReturn<typeof trackingRouter, ClientArgs>

  constructor(@inject(LoggerClient) client: LoggerClient) {
    this.requests = initClient(requestsRouter, {
      baseUrl: env.JUDIT_REQUESTS_BASE_URL,
      api: client.fetch,
    })

    this.tracking = initClient(trackingRouter, {
      baseUrl: env.JUDIT_TRACKING_BASE_URL,
      api: client.fetch,
    })
  }

  async createRequest(
    request: ClientInferRequest<typeof requestsRouter>["createRequest"],
  ): Promise<ClientInferResponses<typeof requestsRouter>["createRequest"]> {
    return this.requests.createRequest(request)
  }

  async checkRequest(
    request: ClientInferRequest<typeof requestsRouter>["checkRequest"],
  ): Promise<ClientInferResponses<typeof requestsRouter>["checkRequest"]> {
    return this.requests.checkRequest(request)
  }

  async listResponses(
    request: ClientInferRequest<typeof requestsRouter>["listResponses"],
  ): Promise<ClientInferResponses<typeof requestsRouter>["listResponses"]> {
    return this.requests.listResponses(request)
  }

  async createTracking(
    request: ClientInferRequest<typeof trackingRouter>["createTracking"],
  ): Promise<ClientInferResponses<typeof trackingRouter>["createTracking"]> {
    return this.tracking.createTracking(request)
  }

  async listTrackings(
    request: ClientInferRequest<typeof trackingRouter>["listTrackings"],
  ): Promise<ClientInferResponses<typeof trackingRouter>["listTrackings"]> {
    return this.tracking.listTrackings(request)
  }

  async getTracking(
    request: ClientInferRequest<typeof trackingRouter>["getTracking"],
  ): Promise<ClientInferResponses<typeof trackingRouter>["getTracking"]> {
    return this.tracking.getTracking(request)
  }
}
