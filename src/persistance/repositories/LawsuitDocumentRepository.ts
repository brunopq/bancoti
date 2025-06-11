import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { lawsuitDocument } from "../models/lawsuitDocument.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

type LawsuitDocument = typeof lawsuitDocument.$inferSelect

@injectable()
export class LawsuitDocumentRepository
  implements IBaseRepository<LawsuitDocument>
{
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<LawsuitDocument | null> {
    const rows = await this.db
      .select()
      .from(lawsuitDocument)
      .where(eq(lawsuitDocument.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<LawsuitDocument[]> {
    return this.db.select().from(lawsuitDocument)
  }
  async create(item: LawsuitDocument): Promise<LawsuitDocument> {
    const [created] = await this.db
      .insert(lawsuitDocument)
      .values(item)
      .returning()
    return created
  }
  async update(
    id: string,
    item: LawsuitDocument,
  ): Promise<LawsuitDocument | null> {
    const [updated] = await this.db
      .update(lawsuitDocument)
      .set(item)
      .where(eq(lawsuitDocument.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(lawsuitDocument).where(eq(lawsuitDocument.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(lawsuitDocument)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
