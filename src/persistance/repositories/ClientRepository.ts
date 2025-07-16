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
type Company = typeof legalEntity.$inferSelect

type FullClient =
  | (Client & { type: "individual" } & Individual)
  | (Client & { type: "legal_entity" } & Company)

  
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

      return { ...clientData, ...individualData, type: "individual" }
    }

    if (clientData.type === "legal_entity") {
      const [legalEntityData] = await this.db
        .select()
        .from(legalEntity)
        .where(eq(legalEntity.id, clientData.entityId))

      if (!legalEntityData) return null

      return { ...clientData, ...legalEntityData, type: "legal_entity" }
    }

    throw new Error(`Unknown client type: ${clientData.type}`)
  }

  async findByCPF(cpf: string): Promise<Individual | null> {
    const [{ clients, individuals }] = await this.db
      .select()
      .from(client)
      .leftJoin(individual, eq(client.entityId, individual.id))
      .where(and(eq(client.type, "individual"), eq(individual.cpf, cpf)))

    if (!individuals) return null

    return { ...clients, ...individuals }
  }

  async findByCNPJ(cnpj: string): Promise<Company | null> {
    const [{ clients, legal_entities }] = await this.db
      .select()
      .from(client)
      .leftJoin(legalEntity, eq(client.entityId, legalEntity.id))
      .where(and(eq(client.type, "legal_entity"), eq(legalEntity.cnpj, cnpj)))

    if (!legal_entities) return null

    return { ...clients, ...legal_entities }
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
