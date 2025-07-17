import { inject, injectable } from "inversify"
import { and, asc, desc, eq } from "drizzle-orm"

import { client } from "../models/client.ts"
import type { Database } from "../db.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import { individual } from "../models/individual.ts"
import { legalEntity } from "../models/legalEntity.ts"

type Client = typeof client.$inferSelect
type NewClient = typeof client.$inferInsert

type Individual = typeof individual.$inferSelect
type LegalEntity = typeof legalEntity.$inferSelect

type IndividualClient = Client & { type: "individual"; individual: Individual }
type LegalEntityClient = Client & {
  type: "legal_entity"
  legalEntity: LegalEntity
}

type FullClient = IndividualClient | LegalEntityClient

type ListClientsOptions = {
  where?: Partial<Record<keyof Client, Client[keyof Client]>>
  orderBy?: Partial<Record<keyof Client, "asc" | "desc">>
  limit?: number
}

@injectable()
export class ClientRepository implements IBaseRepository<Client, NewClient> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<FullClient | null> {
    const [clientData] = await this.db
      .select()
      .from(client)
      .where(eq(client.id, id))

    if (!clientData) return null

    if (clientData.type === "individual") {
      const [individualData] = await this.db
        .select()
        .from(individual)
        .where(eq(individual.id, clientData.entityId))

      if (!individualData) return null

      return { ...clientData, individual: individualData, type: "individual" }
    }

    if (clientData.type === "legal_entity") {
      const [legalEntityData] = await this.db
        .select()
        .from(legalEntity)
        .where(eq(legalEntity.id, clientData.entityId))

      if (!legalEntityData) return null

      return {
        ...clientData,
        legalEntity: legalEntityData,
        type: "legal_entity",
      }
    }

    throw new Error(`Unknown client type: ${clientData.type}`)
  }

  async findByCPF(cpf: string): Promise<IndividualClient | null> {
    const rows = await this.db
      .select()
      .from(client)
      .innerJoin(individual, eq(client.entityId, individual.id))
      .where(and(eq(client.type, "individual"), eq(individual.cpf, cpf)))
      .limit(1)

    if (rows.length === 0) return null

    return {
      ...rows[0].clients,
      type: "individual",
      individual: { ...rows[0].individuals },
    }
  }

  async findByCNPJ(cnpj: string): Promise<LegalEntityClient | null> {
    const rows = await this.db
      .select()
      .from(client)
      .innerJoin(legalEntity, eq(client.entityId, legalEntity.id))
      .where(and(eq(client.type, "legal_entity"), eq(legalEntity.cnpj, cnpj)))

    if (rows.length === 0) return null

    return {
      ...rows[0].clients,
      type: "legal_entity",
      legalEntity: rows[0].legal_entities,
    }
  }

  async findByEntity(entityId: string): Promise<Client | null> {
    const rows = await this.db
      .select()
      .from(client)
      .where(eq(client.entityId, entityId))

    return rows[0] ?? null
  }

  async findAll(
    options: ListClientsOptions = { limit: 500 },
  ): Promise<Client[]> {
    const order = []

    if (options.orderBy) {
      for (const [key, direction] of Object.entries(options.orderBy)) {
        const orderFn = direction === "asc" ? asc : desc
        // typescript loses type information here, so we need to cast
        order.push(orderFn(client[key as keyof Client]))
      }
    }

    return this.db
      .select()
      .from(client)
      .orderBy(...order)
      .limit(options.limit ?? 500)
  }

  async findAllFull(
    options: ListClientsOptions = { limit: 500 },
  ): Promise<FullClient[]> {
    const order = []

    if (options.orderBy) {
      for (const [key, direction] of Object.entries(options.orderBy)) {
        const orderFn = direction === "asc" ? asc : desc
        // typescript loses type information here, so we need to cast
        order.push(orderFn(client[key as keyof Client]))
      }
    }

    const rows = await this.db
      .select()
      .from(client)
      .leftJoin(
        individual,
        and(eq(client.entityId, individual.id), eq(client.type, "individual")),
      )
      .leftJoin(
        legalEntity,
        and(
          eq(client.entityId, legalEntity.id),
          eq(client.type, "legal_entity"),
        ),
      )
      .orderBy(...order)
      .limit(options.limit ?? 500)

    return rows
      .map((row) => {
        if (row.clients.type === "individual" && row.individuals)
          return {
            ...row.clients,
            individual: row.individuals,
            type: "individual" as const,
          }
        if (row.clients.type === "legal_entity" && row.legal_entities)
          return {
            ...row.clients,
            legalEntity: row.legal_entities,
            type: "legal_entity" as const,
          }
      })
      .filter((c) => c !== undefined)
  }

  async create(item: NewClient): Promise<Client> {
    const [created] = await this.db.insert(client).values(item).returning()

    return created
  }

  async update(id: string, item: Client): Promise<Client | null> {
    throw new Error("Method not implemented.")
    // const [updated] = await this.db
    //   .update(client)
    //   .set(item)
    //   .where(eq(client.id, id))
    //   .returning()
    // return updated ?? null
  }

  async delete(id: string): Promise<void> {
    await this.db.delete(client).where(eq(client.id, id))
  }

  async count(): Promise<number> {
    return this.db.$count(client)
  }

  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
