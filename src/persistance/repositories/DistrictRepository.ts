import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { district } from "../models/district.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type District = typeof district.$inferSelect
type InsertDistrict = typeof district.$inferInsert

@injectable()
export class DistrictRepository implements IBaseRepository<District, InsertDistrict> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<District | null> {
    const rows = await this.db
      .select()
      .from(district)
      .where(eq(district.id, id))
    return rows[0] ?? null
  }

  async findByName(name: string): Promise<District | null> {
    const rows = await this.db
      .select()
      .from(district)
      .where(eq(district.name, name))
    return rows[0] ?? null
  }

  async findAll(): Promise<District[]> {
    return this.db.select().from(district)
  }
  async create(item: InsertDistrict): Promise<District> {
    const [created] = await this.db.insert(district).values(item).returning()
    return created
  }
  async update(id: string, item: InsertDistrict): Promise<District | null> {
    const [updated] = await this.db
      .update(district)
      .set(item)
      .where(eq(district.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(district).where(eq(district.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(district)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
