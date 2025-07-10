import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { witness } from "../models/witness.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type Witness = typeof witness.$inferSelect

@injectable()
export class WitnessRepository implements IBaseRepository<Witness> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Witness | null> {
    const rows = await this.db.select().from(witness).where(eq(witness.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<Witness[]> {
    return this.db.select().from(witness)
  }
  async create(item: Witness): Promise<Witness> {
    const [created] = await this.db.insert(witness).values(item).returning()
    return created
  }
  async update(id: string, item: Witness): Promise<Witness | null> {
    const [updated] = await this.db
      .update(witness)
      .set(item)
      .where(eq(witness.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(witness).where(eq(witness.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(witness)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
