import { inject, injectable } from "inversify"
import { clientDocument } from "../models/clientDocument.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"
import { eq } from "drizzle-orm"

type ClientDocument = typeof clientDocument.$inferSelect

@injectable()
export class ClientDocumentRepository implements IBaseRepository<ClientDocument> {
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<ClientDocument | null> {
    const rows = await this.db
      .select()
      .from(clientDocument)
      .where(eq(clientDocument.id, id))
    return rows[0] ?? null
  }
  async findAll(): Promise<ClientDocument[]> {
    return this.db.select().from(clientDocument)
  }
  async create(item: ClientDocument): Promise<ClientDocument> {
    const [created] = await this.db
      .insert(clientDocument)
      .values(item)
      .returning()
    return created
  }
  async update(
    id: string,
    item: ClientDocument,
  ): Promise<ClientDocument | null> {
    const [updated] = await this.db
      .update(clientDocument)
      .set(item)
      .where(eq(clientDocument.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(clientDocument).where(eq(clientDocument.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(clientDocument)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
