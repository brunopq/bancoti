import { inject, injectable } from "inversify"
import { eq, desc } from "drizzle-orm"

import type { db as database } from "../../db.ts"
import { apiCalls } from "../../models/judit/index.ts"

type ApiCall = typeof apiCalls.$inferSelect
type InsertApiCall = typeof apiCalls.$inferInsert

@injectable()
export class ApiCallsRepository {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: number): Promise<ApiCall | null> {
    const rows = await this.db
      .select()
      .from(apiCalls)
      .where(eq(apiCalls.id, id))
    return rows[0] ?? null
  }

  async findByEndpoint(endpoint: string): Promise<ApiCall[]> {
    return this.db
      .select()
      .from(apiCalls)
      .where(eq(apiCalls.endpoint, endpoint))
      .orderBy(desc(apiCalls.calledAt))
  }

  async findRecentCalls(limit = 100): Promise<ApiCall[]> {
    return this.db
      .select()
      .from(apiCalls)
      .orderBy(desc(apiCalls.calledAt))
      .limit(limit)
  }

  async findAll(): Promise<ApiCall[]> {
    return this.db.select().from(apiCalls).orderBy(desc(apiCalls.calledAt))
  }

  async create(item: InsertApiCall): Promise<ApiCall> {
    const [created] = await this.db.insert(apiCalls).values(item).returning()
    return created
  }

  async update(
    id: number,
    item: Partial<InsertApiCall>,
  ): Promise<ApiCall | null> {
    const [updated] = await this.db
      .update(apiCalls)
      .set(item)
      .where(eq(apiCalls.id, id))
      .returning()
    return updated ?? null
  }

  async delete(id: number): Promise<void> {
    await this.db.delete(apiCalls).where(eq(apiCalls.id, id))
  }

  async count(): Promise<number> {
    return this.db.$count(apiCalls)
  }

  async exists(id: number): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
