import { inject, injectable } from "inversify"
import { and, eq } from "drizzle-orm"

import { client } from "../models/client.ts"
import type { db as database } from "../db.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import { individual } from "../models/individual.ts"
import { legalEntity } from "../models/legalEntity.ts"

type Client = typeof client.$inferSelect
type NewClient = typeof client.$inferInsert

type Individual = typeof individual.$inferSelect
type Company = typeof legalEntity.$inferSelect

type FullClient = (Client & Individual) | (Client & Company)

@injectable()
export class ClientRepository implements IBaseRepository<Client, NewClient> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<FullClient | null> {
    const [clientData] = await this.db
      .select()
      .from(client)
      .where(eq(client.id, id))

    if (!clientData) return null

    let domainClient: FullClient | null = null

    if (clientData.type === "individual") {
      const [individualData] = await this.db
        .select()
        .from(individual)
        .where(eq(individual.id, clientData.entityId))

      if (!individualData) return null

      domainClient = { ...clientData, ...individualData }
    } else if (clientData.type === "legal_entity") {
      const [legalEntityData] = await this.db
        .select()
        .from(legalEntity)
        .where(eq(legalEntity.id, clientData.entityId))

      if (!legalEntityData) return null

      domainClient = { ...clientData, ...legalEntityData }
    } else {
      throw new Error(`Unknown client type: ${clientData.type}`)
    }

    return domainClient
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

  async findAll(): Promise<Client[]> {
    throw new Error("Method not implemented.")
    // return this.db.select().from(client)
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
