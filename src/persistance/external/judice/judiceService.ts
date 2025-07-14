import { inject, injectable } from "inversify"
import type { z } from "zod"

import { apiClient } from "./apiClient.ts"
import type {
  listaAndamentosResponseSchema,
  consultaProcessoResponseSchema,
  listaClientesResponseSchema,
  consultaClienteResponseSchema,
} from "./dto/index.ts"
import type { ICacheService } from "@/domain/services/ICacheService.ts"

type JudiceMovementDTO = z.infer<
  typeof listaAndamentosResponseSchema
>["retorno"]["object"][number]

type JudiceLawsuitDTO = z.infer<
  typeof consultaProcessoResponseSchema
>["retorno"]["object"][number]

type JudiceListClientsDTO = z.infer<
  typeof listaClientesResponseSchema
>["retorno"]["object"][number]

type JudiceClientDTO = z.infer<
  typeof consultaClienteResponseSchema
>["retorno"]["object"]

type ListMovementsOptions = {
  startFrom?: number
  clientView?: boolean
}

interface IJudiceService {
  getLawsuitByCNJ(cnj: string): Promise<JudiceLawsuitDTO>
  listMovements(options?: ListMovementsOptions): Promise<JudiceMovementDTO[]>
  listClients(): Promise<JudiceListClientsDTO[]>
}

@injectable()
export class JudiceService implements IJudiceService {
  constructor(
    @inject("CacheService")
    private readonly cacheService: ICacheService<string, number>,
    private readonly api: typeof apiClient = apiClient,
  ) {}

  private async getJidByCNJ(cnj: string): Promise<number | undefined> {
    console.log("Fetching JID for CNJ:", cnj)
    const jid = await this.cacheService.get(cnj)
    if (jid !== undefined) return jid

    console.log("CNJ not found in cache, fetching from API...")
    const { body, status } = await this.api.listaTodosProcessos({
      body: { action: "listacnj" },
    })

    if (status !== 200 || !body.success) {
      console.error("fuck")
      return undefined
    }

    console.log("Populating CNJ to JID cache...")
    for (const l of body.retorno.object) {
      if (l.cnj && l.id) await this.cacheService.set(l.cnj, l.id)
    }
    console.log("CNJ to JID cache populated, checking again...")
    return await this.cacheService.get(cnj)
  }

  async getLawsuitByCNJ(cnj: string): Promise<JudiceLawsuitDTO> {
    const jid = await this.getJidByCNJ(cnj)

    if (!jid) {
      throw new Error(`Lawsuit with CNJ ${cnj} not found`)
    }

    const { body, status } = await this.api.consultaProcesso({
      body: { action: "get", id: jid },
    })

    if (status !== 200)
      throw new Error(
        `Failed to fetch lawsuit with CNJ ${cnj}, judice responded with code ${status}`,
      )

    if (!body.success) throw new Error(`Judice API error: ${body.message}`)

    return body.retorno.object[0]
  }

  async listMovements(
    options?: ListMovementsOptions,
  ): Promise<JudiceMovementDTO[]> {
    const { body, status } = await this.api.listaAndamentos({
      body: {
        action: "list",
        id: options?.startFrom ?? 0,
        clientview: options?.clientView ? 1 : 0,
      },
    })

    if (status !== 200)
      throw new Error(
        `Failed to fetch movements, judice responded with code ${status}`,
      )

    if (!body.retorno.success)
      throw new Error(`Judice API error: ${body.retorno.message}`)

    return body.retorno.object
  }

  async listClients(options?: { startFrom?: number }): Promise<
    JudiceListClientsDTO[]
  > {
    const { body, status } = await this.api.listaClientes({
      body: { action: "list", id: options?.startFrom ?? 0 },
    })

    if (status !== 200)
      throw new Error(
        `Failed to fetch clients, judice responded with code ${status}`,
      )

    if (!body.success) throw new Error(`Judice API error: ${body.message}`)

    return body.retorno.object
  }

  async getClientById(id: number): Promise<JudiceClientDTO> {
    const { body, status } = await this.api.consultaCliente({
      body: { action: "get", id },
    })

    if (status !== 200)
      throw new Error(
        `Failed to fetch client with ID ${id}, judice responded with code ${status}`,
      )

    if (!body.retorno.success)
      throw new Error(`Judice API error: ${body.retorno.message}`)

    return body.retorno.object
  }
}
