import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { movement } from "../models/movement.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

type Movement = typeof movement.$inferSelect

@injectable()
export class MovementRepository implements IBaseRepository<Movement> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<Movement | null> {
    const rows = await this.db
      .select()
      .from(movement)
      .where(eq(movement.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<Movement[]> {
    return this.db.select().from(movement)
  }
  async create(item: Movement): Promise<Movement> {
    const [created] = await this.db.insert(movement).values(item).returning()
    return created
  }
  async update(id: string, item: Movement): Promise<Movement | null> {
    const [updated] = await this.db
      .update(movement)
      .set(item)
      .where(eq(movement.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(movement).where(eq(movement.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(movement)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
