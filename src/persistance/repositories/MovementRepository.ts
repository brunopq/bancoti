import { inject, injectable } from "inversify"
import { asc, desc, eq } from "drizzle-orm"
import { movement } from "../models/movement.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

export type Movement = typeof movement.$inferSelect
type InsertMovement = typeof movement.$inferInsert

type ListMovementsOptions = {
  where?: Partial<Record<keyof Movement, Movement[keyof Movement]>>
  orderBy?: Partial<Record<keyof Movement, "asc" | "desc">>
  limit?: number
}

@injectable()
export class MovementRepository implements IBaseRepository<Movement, InsertMovement> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<Movement | null> {
    const rows = await this.db
      .select()
      .from(movement)
      .where(eq(movement.id, id))
    return rows[0] ?? null
  }

  async findAll(
    options: ListMovementsOptions = { limit: 500 },
  ): Promise<Movement[]> {
    const order = []

    if (options.orderBy) {
      for (const [key, direction] of Object.entries(options.orderBy)) {
        const orderFn = direction === "asc" ? asc : desc
        // typescript loses type information here, so we need to cast
        order.push(orderFn(movement[key as keyof Movement]))
      }
    }

    return this.db
      .select()
      .from(movement)
      .orderBy(...order)
      .limit(options.limit ?? 500)
  }

  async create(item: InsertMovement): Promise<Movement> {
    const [created] = await this.db.insert(movement).values(item).returning()
    return created
  }
  async update(
    id: string,
    item: Partial<InsertMovement>,
  ): Promise<Movement | null> {
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
