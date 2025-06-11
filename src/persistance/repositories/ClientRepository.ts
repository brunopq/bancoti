import { inject, injectable } from "inversify"
import { and, eq } from "drizzle-orm"

import { client } from "../models/client.ts"
import type { db as database } from "../db.ts"
import type {
  Client,
  Individual,
  Company,
} from "../../domain/entities/client.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import { clientMapper } from "../mappers/client.mapper.ts"
import { individual } from "../models/individual.ts"
import { legalEntity } from "../models/legalEntity.ts"

@injectable()
export class ClientRepository implements IBaseRepository<Client> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<Client | null> {
    const [clientData] = await this.db
      .select()
      .from(client)
      .where(eq(client.id, id))

    if (!clientData) return null

    let domainClient: Client | null = null

    if (clientData.type === "individual") {
      const [individualData] = await this.db
        .select()
        .from(individual)
        .where(eq(individual.id, clientData.entityId))

      if (!individualData) return null

      domainClient = clientMapper.toDomain({
        client: clientData,
        individual: individualData,
      })
    } else if (clientData.type === "legal_entity") {
      const [legalEntityData] = await this.db
        .select()
        .from(legalEntity)
        .where(eq(legalEntity.id, clientData.entityId))

      if (!legalEntityData) return null

      domainClient = clientMapper.toDomain({
        client: clientData,
        legalEntity: legalEntityData,
      })
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

    return clientMapper.toDomain({
      client: clients,
      individual: individuals,
    }) as Individual // this is safe (I hope)
  }

  async findByCNPJ(cnpj: string): Promise<Company | null> {
    const [{ clients, legal_entities }] = await this.db
      .select()
      .from(client)
      .leftJoin(legalEntity, eq(client.entityId, legalEntity.id))
      .where(and(eq(client.type, "legal_entity"), eq(legalEntity.cnpj, cnpj)))

    if (!legal_entities) return null

    return clientMapper.toDomain({
      client: clients,
      legalEntity: legal_entities,
    }) as Company // this is safe (I hope)
  }

  async findAll(): Promise<Client[]> {
    throw new Error("Method not implemented.")
    // return this.db.select().from(client)
  }

  async create(item: Client): Promise<Client> {
    throw new Error("Method not implemented.")
    // const [created] = await this.db.insert(client).values(item).returning()
    // return created
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
