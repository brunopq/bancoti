import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { resolver } from "hono-openapi/zod"
import { z } from "zod"
import { describeRoute } from "hono-openapi"

import { container } from "@/dependencyManager.ts"

import { LawsuitService } from "@/domain/services/lawsuitService/index.ts"
import { PartyRoleSchema } from "@/domain/entities/party.ts"

import {
  listLawsuitsResponse,
  findLawsuitByCNJResponse,
  type ListLawsuitsResponse,
  completeLawsuitDTO,
  type CompleteLawsuitDTO,
} from "../dto/lawsuitDTO.ts"
import { lawsuitMapper } from "../mappers/lawsuit.mapper.ts"

export const lawsuitController = new Hono()

const lawsuitService = container.get(LawsuitService)

const listLawsuitFilters = {
  clientId: z.string().optional(),
  clientRole: PartyRoleSchema.optional(),
}

lawsuitController.get(
  "/",
  describeRoute({
    description: "List all lawsuits",
    tags: ["Lawsuits"],
    security: [{ apiKey: [] }],
    parameters: [
      {
        in: "query",
        name: "clientId",
        description:
          "Filters the lawsuits where the client appears as one of the parts",
        schema: resolver(listLawsuitFilters.clientId),
      },
      {
        in: "query",
        name: "clientRole",
        description:
          "Filters the lawsuits by the role of the client in the lawsuit. Must be used with clientId",
        schema: resolver(listLawsuitFilters.clientRole),
      },
    ],
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": { schema: resolver(listLawsuitsResponse) },
        },
      },
    },
    validateResponse: true,
  }),
  zValidator("query", z.object(listLawsuitFilters)),
  async (c) => {
    const filters = c.req.valid("query")

    const lawsuits = await lawsuitService.index(filters)

    const res: ListLawsuitsResponse = {
      lawsuits: lawsuits.map(lawsuitMapper.toDTO),
    }

    return c.json(res)
  },
)

lawsuitController.get(
  "/:id",
  describeRoute({
    description: "Get lawsuit by id",
    tags: ["Lawsuits"],
    security: [{ apiKey: [] }],
    responses: {
      200: {
        description: "Successfull response",
        content: {
          "application/json": { schema: resolver(findLawsuitByCNJResponse) },
        },
      },
    },
    // validateResponse: true,
  }),
  zValidator("param", z.object({ id: z.string() })),
  async (c) => {
    const { id } = c.req.valid("param")

    const res = await lawsuitService.getById(id)

    return c.json(res)
  },
)

lawsuitController.get(
  "/cnj/:cnj",
  describeRoute({
    description: "Get lawsuit by cnj",
    tags: ["Lawsuits"],
    security: [{ apiKey: [] }],
    responses: {
      200: {
        description: "Successfull response",
        content: {
          "application/json": { schema: resolver(completeLawsuitDTO) },
        },
      },
    },
    // validateResponse: true,
  }),
  zValidator("param", z.object({ cnj: z.string() })),
  async (c) => {
    const { cnj } = c.req.valid("param")

    const res = await lawsuitService.getByCnj(cnj)

    const completeLawsuit: CompleteLawsuitDTO = {
      ...res,
      movements: res.movements.map((m) => ({
        ...m,
        createdAt: m.createdAt.toISOString(),
        updatedAt: m.updatedAt.toISOString(),
      })),
      parties: res.parties.map((p) => ({
        ...p,
        side: p.role,
      })),
    }

    return c.json(completeLawsuitDTO.parse(completeLawsuit))
  },
)
