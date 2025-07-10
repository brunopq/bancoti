import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { legalEntity } from "../models/legalEntity.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type LegalEntity = typeof legalEntity.$inferSelect
type InsertLegalEntity = typeof legalEntity.$inferInsert

@injectable()
export class LegalEntityRepository
  implements IBaseRepository<LegalEntity, InsertLegalEntity>
{
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<LegalEntity | null> {
    const rows = await this.db
      .select()
      .from(legalEntity)
      .where(eq(legalEntity.id, id))
    return rows[0] ?? null
  }

  async findByCnpj(cnpj: string): Promise<LegalEntity | null> {
    const rows = await this.db
      .select()
      .from(legalEntity)
      .where(eq(legalEntity.cnpj, cnpj))

    return rows[0] ?? null
  }

  async findByName(name: string): Promise<LegalEntity | null> {
    const rows = await this.db
      .select()
      .from(legalEntity)
      .where(eq(legalEntity.corporateName, name))

    return rows[0] ?? null
  }

  async findAll(): Promise<LegalEntity[]> {
    return this.db.select().from(legalEntity)
  }

  async sync(item: InsertLegalEntity): Promise<LegalEntity> {
    let existing = await this.findByCnpj(item.cnpj)

    if (existing) return existing

    existing = await this.findByName(item.corporateName)

    if (existing) return existing

    existing = await this.create(item)

    return existing
  }

  async create(item: InsertLegalEntity): Promise<LegalEntity> {
    const [created] = await this.db.insert(legalEntity).values(item).returning()
    return created
  }
  async update(
    id: string,
    item: InsertLegalEntity,
  ): Promise<LegalEntity | null> {
    const [updated] = await this.db
      .update(legalEntity)
      .set(item)
      .where(eq(legalEntity.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(legalEntity).where(eq(legalEntity.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(legalEntity)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
