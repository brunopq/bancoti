import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { lawsuit } from "../models/lawsuit.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

type Lawsuit = typeof lawsuit.$inferSelect

@injectable()
export class LawsuitRepository implements IBaseRepository<Lawsuit> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<Lawsuit | null> {
    const rows = await this.db.select().from(lawsuit).where(eq(lawsuit.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<Lawsuit[]> {
    return this.db.select().from(lawsuit)
  }
  async create(item: Lawsuit): Promise<Lawsuit> {
    const [created] = await this.db.insert(lawsuit).values(item).returning()
    return created
  }
  async update(id: string, item: Lawsuit): Promise<Lawsuit | null> {
    const [updated] = await this.db
      .update(lawsuit)
      .set(item)
      .where(eq(lawsuit.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(lawsuit).where(eq(lawsuit.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(lawsuit)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
