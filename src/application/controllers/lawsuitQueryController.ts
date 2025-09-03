import { Hono } from "hono"
import { z } from "zod"
import { describeRoute } from "hono-openapi"
import { resolver } from "hono-openapi/zod"
import { zValidator } from "@hono/zod-validator"

import { container } from "@/dependencyManager.ts"

import {
  createLawsuitQueryResponse,
  getLawsuitQueryResponse,
  lawsuitQueryOptions,
  type CreateLawsuitQueryResponse,
  type GetLawsuitQueryResponse,
} from "../dto/lawsuitQuery.dto.ts"

import { LawsuitQueryService } from "@/domain/services/lawsuitQueryService/index.ts"

export const lawsuitQueryController = new Hono()

const lawsuitQueryService = container.get(LawsuitQueryService)

lawsuitQueryController.post(
  "/",
  describeRoute({
    description:
      "Creates a lawsuit query job. A query might take a while to be fullfilled, so it's done asynchronously",
    requestBody: {
      content: {
        "application/json": await resolver(lawsuitQueryOptions).builder(),
      },
    },
    tags: ["Lawsuits"],
    security: [{ apiKey: [] }],
    responses: {
      200: {
        description: "Successfull response",
        content: {
          "application/json": {
            schema: resolver(createLawsuitQueryResponse),
          },
        },
      },
    },
  }),
  zValidator("json", lawsuitQueryOptions),
  async (c) => {
    const options = c.req.valid("json")

    if (!options.cnj && !options.clientId) {
      return c.json(
        { message: "At least one of 'cnj' or 'clientId' must be provided" },
        400,
      )
    }

    const res = await lawsuitQueryService.createLawsuitQuery(options)

    return c.json(
      createLawsuitQueryResponse.parse({
        queryId: res.id,
        createdAt: res.createdAt.toISOString(),
        options: res.options,
      } satisfies CreateLawsuitQueryResponse),
    )
  },
)

lawsuitQueryController.get(
  "/:queryId",
  describeRoute({
    description: "Get the status of a lawsuit query job",
    tags: ["Lawsuits"],
    security: [{ apiKey: [] }],
    parameters: [
      {
        in: "path",
        name: "queryId",
        required: true,
        schema: resolver(z.string().uuid()),
      },
    ],
    responses: {
      200: {
        description: "Successfull response",
        content: {
          "application/json": { schema: resolver(getLawsuitQueryResponse) },
        },
      },
    },
  }),
  zValidator("param", z.object({ queryId: z.string() })),
  async (c) => {
    const { queryId } = c.req.valid("param")

    const res = await lawsuitQueryService.getQuery(queryId)

    if (!res) {
      return c.json({ message: "Lawsuit query not found" }, 404)
    }

    return c.json(
      getLawsuitQueryResponse.parse({
        queryId: res.id,
        options: res.options,
        createdAt: res.createdAt.toISOString(),
        status: res.status,
        completedAt:
          "completedAt" in res ? res.completedAt.toISOString() : null,
        result:
          "result" in res
            ? res.result.map((r) => ({
                ...r,
                parties: r.parties.map((p) => ({
                  ...p,
                  side: p.role,
                })),
                movements: r.movements.map((m) => ({
                  ...m,
                  createdAt: m.createdAt.toISOString(),
                  updatedAt: m.updatedAt.toISOString(),
                })),
              }))
            : null,
      } satisfies GetLawsuitQueryResponse),
    )
  },
)
