import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { event } from "../models/event.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type Event = typeof event.$inferSelect

@injectable()
export class EventRepository implements IBaseRepository<Event> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Event | null> {
    const rows = await this.db.select().from(event).where(eq(event.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<Event[]> {
    return this.db.select().from(event)
  }
  async create(item: Event): Promise<Event> {
    const [created] = await this.db.insert(event).values(item).returning()
    return created
  }
  async update(id: string, item: Event): Promise<Event | null> {
    const [updated] = await this.db
      .update(event)
      .set(item)
      .where(eq(event.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(event).where(eq(event.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(event)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
