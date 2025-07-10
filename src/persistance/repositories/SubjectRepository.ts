import { inject, injectable } from "inversify"
import { eq } from "drizzle-orm"
import { subject } from "../models/subject.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type Subject = typeof subject.$inferSelect
type InsertSubject = typeof subject.$inferInsert

@injectable()
export class SubjectRepository
  implements IBaseRepository<Subject, InsertSubject>
{
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Subject | null> {
    const result = await this.db.query.subject.findFirst({
      where: (s, { eq }) => eq(s.id, id),
    })
    return result ?? null
  }

  async findAll(): Promise<Subject[]> {
    return this.db.select().from(subject)
  }

  async findByName(name: string): Promise<Subject | null> {
    const result = await this.db.query.subject.findFirst({
      where: (s, { eq }) => eq(s.name, name),
    })
    return result ?? null
  }

  async sync(item: InsertSubject): Promise<Subject> {
    const existing = await this.findByName(item.name)

    if (existing) {
      return existing
    }

    return await this.create(item)
  }

  async create(item: InsertSubject): Promise<Subject> {
    const [created] = await this.db.insert(subject).values(item).returning()
    return created
  }

  async update(
    id: string,
    item: Partial<InsertSubject>,
  ): Promise<Subject | null> {
    const [updated] = await this.db
      .update(subject)
      .set(item)
      .where(eq(subject.id, id))
      .returning()
    return updated ?? null
  }

  async delete(id: string): Promise<void> {
    await this.db.delete(subject).where(eq(subject.id, id))
  }

  async count(): Promise<number> {
    return this.db.$count(subject)
  }

  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
