import { inject, injectable } from "inversify"
import { and, eq } from "drizzle-orm"
import { court } from "../models/court.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

type Court = typeof court.$inferSelect
type InsertCourt = typeof court.$inferInsert

@injectable()
export class CourtRepository implements IBaseRepository<Court, InsertCourt> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<Court | null> {
    const rows = await this.db.select().from(court).where(eq(court.id, id))
    return rows[0] ?? null
  }

  async findByNameAndForum(
    name: string,
    forumId: string,
  ): Promise<Court | null> {
    const rows = await this.db
      .select()
      .from(court)
      .where(and(eq(court.name, name), eq(court.forumId, forumId)))

    return rows[0] ?? null
  }

  async findAll(): Promise<Court[]> {
    return this.db.select().from(court)
  }
  async create(item: InsertCourt): Promise<Court> {
    const [created] = await this.db.insert(court).values(item).returning()
    return created
  }
  async update(id: string, item: InsertCourt): Promise<Court | null> {
    const [updated] = await this.db
      .update(court)
      .set(item)
      .where(eq(court.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(court).where(eq(court.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(court)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
