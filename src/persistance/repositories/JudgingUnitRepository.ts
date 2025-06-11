import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { judgingUnit } from "../models/judgingUnit.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

type JudgingUnit = typeof judgingUnit.$inferSelect

@injectable()
export class JudgingUnitRepository implements IBaseRepository<JudgingUnit> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<JudgingUnit | null> {
    const rows = await this.db
      .select()
      .from(judgingUnit)
      .where(eq(judgingUnit.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<JudgingUnit[]> {
    return this.db.select().from(judgingUnit)
  }
  async create(item: JudgingUnit): Promise<JudgingUnit> {
    const [created] = await this.db.insert(judgingUnit).values(item).returning()
    return created
  }
  async update(id: string, item: JudgingUnit): Promise<JudgingUnit | null> {
    const [updated] = await this.db
      .update(judgingUnit)
      .set(item)
      .where(eq(judgingUnit.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(judgingUnit).where(eq(judgingUnit.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(judgingUnit)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
