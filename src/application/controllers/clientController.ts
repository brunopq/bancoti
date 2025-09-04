import { Hono } from "hono"
import { z } from "zod"
import { describeRoute } from "hono-openapi"
import { resolver } from "hono-openapi/zod"
import { zValidator } from "@hono/zod-validator"

import { container } from "@/dependencyManager.ts"
import { ClientService } from "@/domain/services/clientService/index.ts"
import {
  ClientDTO,
  ClientDTOArray,
  type ClientDTOArrayType,
  type ClientDTOType,
} from "../dto/clientDTO.ts"
import type { Client } from "@/domain/entities/client.ts"

export const clientController = new Hono()
const clientService = container.get(ClientService)

clientController.get(
  "/",
  describeRoute({
    tags: ["Client"],
    description: "List all clients",
    security: [{ apiKey: [] }],
    responses: {
      200: {
        description: "Array of clients",
        content: {
          "application/json": { schema: resolver(ClientDTOArray) },
        },
      },
    },
    validateResponse: true,
  }),
  async (c) => {
    const clients = await clientService.getAllClients()

    return c.json(
      ClientDTOArray.parse(
        clients.map((c) => ({
          ...(c.type === "individual"
            ? { ...c.individual, type: "individual" }
            : { ...c.company, type: "company" }),
          id: c.id,
        })) satisfies ClientDTOArrayType,
      ),
    )
  },
)

clientController.get(
  "/search",
  zValidator(
    "query",
    z.object({
      cpf: z.string().optional(),
      cnpj: z.string().optional(),
    }),
  ),
  describeRoute({
    tags: ["Client"],
    description: "Search client by CPF or CNPJ",
    security: [{ apiKey: [] }],
    parameters: [
      {
        name: "cpf",
        in: "query",
        required: false,
        schema: { type: "string" },
      },
      {
        name: "cnpj",
        in: "query",
        required: false,
        schema: { type: "string" },
      },
    ],
    responses: {
      200: {
        description: "Client found",
        content: {
          "application/json": { schema: resolver(ClientDTO) },
        },
      },
      404: { description: "Client not found" },
    },
    validateResponse: true,
  }),
  async (c) => {
    const { cpf, cnpj } = c.req.valid("query")

    let client: Client | null = null

    if (cpf) {
      client = await clientService.getClientByCPF(cpf)
    } else if (cnpj) {
      client = await clientService.getClientByCNPJ(cnpj)
    } else {
      return c.json({ error: "cpf or cnpj required" }, 400)
    }

    if (!client) return c.notFound()

    return c.json(
      ClientDTO.parse({
        ...(client.type === "individual"
          ? { ...client.individual, type: "individual" }
          : { ...client.company, type: "company" }),
        id: client.id,
      } satisfies ClientDTOType),
    )
  },
)

clientController.get(
  "/:id",
  zValidator("param", z.object({ id: z.string() })),
  describeRoute({
    tags: ["Client"],
    description: "Get a client by ID",
    security: [{ apiKey: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: { type: "string" },
      },
    ],
    responses: {
      200: {
        description: "Client found",
        content: {
          "application/json": { schema: resolver(ClientDTO) },
        },
      },
      404: { description: "Client not found" },
    },
    validateResponse: true,
  }),
  async (c) => {
    const { id } = c.req.valid("param")
    const client = await clientService.getClientById(id)

    if (!client) return c.notFound()

    return c.json(
      ClientDTO.parse({
        ...(client.type === "individual"
          ? { ...client.individual, type: "individual" }
          : { ...client.company, type: "company" }),
        id: client.id,
      } satisfies ClientDTOType),
    )
  },
)
