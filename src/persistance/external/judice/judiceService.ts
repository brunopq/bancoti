import { inject, injectable } from "inversify"
import type { z } from "zod"

import { apiClient } from "./apiClient.ts"
import { jLawsuitMapper } from "./mappers/jLawsuitMapper.ts"
import type { listaAndamentosResponseSchema } from "./dto/index.ts"
// import { jMovementMapper } from "./mappers/jMovementMapper.ts"

import type { Lawsuit } from "../../../domain/entities/lawsuit.ts"

type JudiceMovementDTO = z.infer<
  typeof listaAndamentosResponseSchema
>["retorno"]["object"][number]

type ListMovementsOptions = {
  startFrom?: number
}

interface IJudiceService {
  getLawsuitByCNJ(cnj: string): Promise<Partial<Lawsuit>>
  listMovements(options?: ListMovementsOptions): Promise<JudiceMovementDTO[]>
}

@injectable()
export class JudiceService implements IJudiceService {
  constructor(
    private readonly api: typeof apiClient = apiClient,
    private readonly cnjToJidCache: Map<string, number> = new Map(),
  ) {}

  private async getJidByCNJ(cnj: string): Promise<number | undefined> {
    const jid = this.cnjToJidCache.get(cnj)
    if (jid !== undefined) return jid

    const { body, status } = await this.api.listaTodosProcessos({
      body: { action: "listacnj" },
    })

    if (status !== 200 || !body.success) {
      return undefined
    }

    for (const l of body.retorno.object) {
      if (l.cnj && l.id) this.cnjToJidCache.set(l.cnj, l.id)
    }

    // Try cache again
    return this.cnjToJidCache.get(cnj)
  }

  // async getLawsuits(): Promise<Partial<Lawsuit>[]> {
  //   const { body, status } = await this.api.listaProcessos({
  //     body: { action: "list" },
  //   })

  //   if (status !== 200)
  //     throw new Error(
  //       `Failed to fetch lawsuits, judice responded with code ${status}`,
  //     )

  //   if (!body.success) throw new Error(`Judice API error: ${body.message}`)

  //   return body.retorno.object.map((j) => ({
  //     jid: j.id,
  //   }))
  // }

  async getLawsuitByCNJ(cnj: string): Promise<Partial<Lawsuit>> {
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

    return jLawsuitMapper.toDomain(body.retorno.object[0])
  }

  async listMovements(
    options?: ListMovementsOptions,
  ): Promise<JudiceMovementDTO[]> {
    const { body, status } = await this.api.listaAndamentos({
      body: {
        action: "list",
        id: options?.startFrom ?? 0,
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
}
