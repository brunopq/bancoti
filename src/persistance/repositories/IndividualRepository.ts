import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { individual } from "../models/individual.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

type Individual = typeof individual.$inferSelect

@injectable()
export class IndividualRepository implements IBaseRepository<Individual> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<Individual | null> {
    const rows = await this.db
      .select()
      .from(individual)
      .where(eq(individual.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<Individual[]> {
    return this.db.select().from(individual)
  }
  async create(item: Individual): Promise<Individual> {
    const [created] = await this.db.insert(individual).values(item).returning()
    return created
  }
  async update(id: string, item: Individual): Promise<Individual | null> {
    const [updated] = await this.db
      .update(individual)
      .set(item)
      .where(eq(individual.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(individual).where(eq(individual.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(individual)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
