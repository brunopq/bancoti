import { inject, injectable } from "inversify"
import { and, eq } from "drizzle-orm"
import { party } from "../models/party.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"
import { individual } from "../models/individual.ts"
import { legalEntity } from "../models/legalEntity.ts"

type Party = typeof party.$inferSelect
type InsertParty = typeof party.$inferInsert

@injectable()
export class PartyRepository implements IBaseRepository<Party, InsertParty> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Party | null> {
    const rows = await this.db.select().from(party).where(eq(party.id, id))
    return rows[0] ?? null
  }

  async findByEntityId(entityId: string): Promise<Party | null> {
    const rows = await this.db
      .select()
      .from(party)
      .where(eq(party.entityId, entityId))
    return rows[0] ?? null
  }

  async findEntityForLawsuit({
    entityId,
    lawsuitId,
  }: {
    entityId: string
    lawsuitId: string
  }): Promise<Party | null> {
    const rows = await this.db
      .select()
      .from(party)
      .where(and(eq(party.entityId, entityId), eq(party.lawsuitId, lawsuitId)))
    return rows[0] ?? null
  }

  async findByLawsuitId(lawsuitId: string) {
    return this.db
      .select()
      .from(party)
      .where(eq(party.lawsuitId, lawsuitId))
      .leftJoin(
        individual,
        and(eq(party.entityId, individual.id), eq(party.type, "individual")),
      )
      .leftJoin(
        legalEntity,
        and(eq(party.entityId, legalEntity.id), eq(party.type, "legal_entity")),
      )
  }

  async findAll(): Promise<Party[]> {
    return this.db.select().from(party)
  }
  async create(item: InsertParty): Promise<Party> {
    const [created] = await this.db.insert(party).values(item).returning()
    return created
  }
  async update(id: string, item: InsertParty): Promise<Party | null> {
    const [updated] = await this.db
      .update(party)
      .set(item)
      .where(eq(party.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(party).where(eq(party.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(party)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
