import { inject, injectable } from "inversify"
import { asc, desc, eq } from "drizzle-orm"
import { lawsuitQuery } from "../models/lawsuitQuery.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

export type LawsuitQuery = typeof lawsuitQuery.$inferSelect
export type InsertLawsuitQuery = typeof lawsuitQuery.$inferInsert

type ListLawsuitQueriesOptions = {
  where?: Partial<Record<keyof LawsuitQuery, LawsuitQuery[keyof LawsuitQuery]>>
  orderBy?: Partial<Record<keyof LawsuitQuery, "asc" | "desc">>
  limit?: number
}

@injectable()
export class LawsuitQueryRepository
  implements IBaseRepository<LawsuitQuery, InsertLawsuitQuery>
{
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<LawsuitQuery | null> {
    const rows = await this.db
      .select()
      .from(lawsuitQuery)
      .where(eq(lawsuitQuery.id, id))
    return rows[0] ?? null
  }

  async findAll(
    options: ListLawsuitQueriesOptions = { limit: 500 },
  ): Promise<LawsuitQuery[]> {
    const order = []

    if (options.orderBy) {
      for (const [key, direction] of Object.entries(options.orderBy)) {
        const orderFn = direction === "asc" ? asc : desc
        order.push(orderFn(lawsuitQuery[key as keyof LawsuitQuery]))
      }
    }

    return this.db
      .select()
      .from(lawsuitQuery)
      .orderBy(...order)
      .limit(options.limit ?? 500)
  }

  async create(item: InsertLawsuitQuery): Promise<LawsuitQuery> {
    const [created] = await this.db
      .insert(lawsuitQuery)
      .values(item)
      .returning()
    return created
  }
  async update(
    id: string,
    item: Partial<InsertLawsuitQuery>,
  ): Promise<LawsuitQuery | null> {
    const [updated] = await this.db
      .update(lawsuitQuery)
      .set(item)
      .where(eq(lawsuitQuery.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(lawsuitQuery).where(eq(lawsuitQuery.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(lawsuitQuery)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
