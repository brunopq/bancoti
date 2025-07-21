import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { forum } from "../models/forum.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type Forum = typeof forum.$inferSelect
type InsertForum = typeof forum.$inferInsert

@injectable()
export class ForumRepository implements IBaseRepository<Forum, InsertForum> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Forum | null> {
    const rows = await this.db.select().from(forum).where(eq(forum.id, id))
    return rows[0] ?? null
  }

  async findByName(name: string): Promise<Forum | null> {
    const rows = await this.db.select().from(forum).where(eq(forum.name, name))
    return rows[0] ?? null
  }

  async findAll(): Promise<Forum[]> {
    return this.db.select().from(forum)
  }

  async create(item: InsertForum): Promise<Forum> {
    const [created] = await this.db.insert(forum).values(item).returning()
    return created
  }

  async sync(item: InsertForum): Promise<Forum> {
    const existing = await this.findByName(item.name)

    if (!existing) {
      return this.create(item)
    }

    return existing
  }

  async update(id: string, item: InsertForum): Promise<Forum | null> {
    const [updated] = await this.db
      .update(forum)
      .set(item)
      .where(eq(forum.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(forum).where(eq(forum.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(forum)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
