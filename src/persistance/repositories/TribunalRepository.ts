import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { tribunal } from "../models/tribunal.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type Tribunal = typeof tribunal.$inferSelect
type InsertTribunal = typeof tribunal.$inferInsert

@injectable()
export class TribunalRepository
  implements IBaseRepository<Tribunal, InsertTribunal>
{
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Tribunal | null> {
    const result = await this.db.query.tribunal.findFirst({
      where: (t, { eq }) => eq(t.id, id),
    })
    return result ?? null
  }

  async findAll(): Promise<Tribunal[]> {
    return this.db.select().from(tribunal)
  }

  async findByName(name: string): Promise<Tribunal | null> {
    const result = await this.db.query.tribunal.findFirst({
      where: (t, { eq }) => eq(t.name, name),
    })
    return result ?? null
  }

  async findByAbbreviation(abbreviation: string): Promise<Tribunal | null> {
    const result = await this.db.query.tribunal.findFirst({
      where: (t, { eq }) => eq(t.abbreviation, abbreviation),
    })
    return result ?? null
  }

  async sync(item: InsertTribunal): Promise<Tribunal> {
    const existing = await this.findByAbbreviation(item.abbreviation)

    if (existing) {
      return existing
    }

    return this.create(item)
  }

  async create(item: InsertTribunal): Promise<Tribunal> {
    const [created] = await this.db.insert(tribunal).values(item).returning()
    return created
  }

  async update(
    id: string,
    item: Partial<InsertTribunal>,
  ): Promise<Tribunal | null> {
    const [updated] = await this.db
      .update(tribunal)
      .set(item)
      .where(eq(tribunal.id, id))
      .returning()
    return updated ?? null
  }

  async delete(id: string): Promise<void> {
    await this.db.delete(tribunal).where(eq(tribunal.id, id))
  }

  async count(): Promise<number> {
    return this.db.$count(tribunal)
  }

  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
