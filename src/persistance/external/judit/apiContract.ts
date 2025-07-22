import { initContract } from "@ts-rest/core"
import * as dto from "./dto/index.ts"

const c = initContract()

export const requestsRouter = c.router({
  createRequest: {
    path: "/requests",
    method: "POST",
    body: dto.createRequestPayload,
    responses: {
      201: dto.okCreateRequestResponse,
    },
  },

  checkRequest: {
    method: "GET",
    path: "/requests/:requestId",
    responses: {
      200: dto.okCheckRequestResponse,
    },
  },

  listResponses: {
    method: "GET",
    path: "/responses",
    query: dto.listResponsesQuery,
    responses: {
      200: dto.okListResponsesResponse,
    },
  },
})

export const trackingRouter = c.router(
  {
    createTracking: {
      path: "/tracking",
      method: "POST",
      body: dto.createTrackingPayload,
      responses: {
        200: dto.okCreateTrackingResponse,
      },
    },

    listTrackings: {
      method: "GET",
      path: "/tracking",
      query: dto.listTrackingsQuery,
      responses: {
        200: dto.okListTrackingsResponse,
      },
    },

    getTracking: {
      method: "GET",
      path: "/tracking/:trackingId",
      responses: {
        200: dto.okGetTrackingResponse,
      },
    },
  },
  {},
)
