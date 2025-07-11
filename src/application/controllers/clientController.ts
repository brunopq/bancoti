import { Hono } from "hono"
import { z } from "zod"
import { describeRoute } from "hono-openapi"
import { resolver } from "hono-openapi/zod"
import { zValidator } from "@hono/zod-validator"

import { container } from "@/dependencyManager.ts"
import { ClientService } from "@/domain/services/clientService/index.ts"
import { ClientDTO, ClientDTOArray } from "../dto/clientDTO.ts"
import type { Client } from "@/domain/entities/client.ts"

export const clientController = new Hono()
const clientService = container.get(ClientService)

/**
 * GET /clients
 * List all clients
 */
clientController.get(
  "/",
  describeRoute({
    tags: ["Client"],
    description: "List all clients",
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
    return c.json(clients)
  },
)

/**
 * GET /clients/search?cpf=... or /clients/search?cnpj=...
 * Search client by CPF or CNPJ
 */
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

    console.log(client)

    if (!client) return c.notFound()

    return c.json(client)
  },
)

/**
 * GET /clients/:id
 * Get a client by ID
 */
clientController.get(
  "/:id",
  zValidator("param", z.object({ id: z.string() })),
  describeRoute({
    tags: ["Client"],
    description: "Get a client by ID",
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

    return c.json(client)
  },
)
