import { inject, injectable } from "inversify"
import { eq, sql } from "drizzle-orm"
import { individual } from "../models/individual.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { Database } from "../db.ts"

type Individual = typeof individual.$inferSelect
type InsertIndividual = typeof individual.$inferInsert

@injectable()
export class IndividualRepository
  implements IBaseRepository<Individual, InsertIndividual>
{
  constructor(@inject("db") private db: Database) {}

  async findById(id: string): Promise<Individual | null> {
    const rows = await this.db
      .select()
      .from(individual)
      .where(eq(individual.id, id))
    return rows[0] ?? null
  }

  async findByCpf(cpf: string): Promise<Individual | null> {
    const cleanCpf = cpf.replace(/\D/g, "") // Clean CPF

    const rows = await this.db
      .select()
      .from(individual)
      .where(eq(individual.cpf, cleanCpf))

    return rows[0] ?? null
  }

  async findByName(name: string): Promise<Individual | null> {
    const rows = await this.db
      .select()
      .from(individual)
      .where(sql`unaccent(${individual.name}) ILIKE unaccent(${name})`)

    return rows[0] ?? null
  }

  async findAll(): Promise<Individual[]> {
    return this.db.select().from(individual)
  }

  async sync(item: InsertIndividual): Promise<Individual> {
    let existing = await this.findByCpf(item.cpf)

    if (existing) return existing

    existing = await this.findByName(item.name)

    if (existing) return existing

    existing = await this.create(item)

    return existing
  }

  async create(item: InsertIndividual): Promise<Individual> {
    const [created] = await this.db
      .insert(individual)
      .values({
        ...item,
        cpf: item.cpf.replace(/\D/g, ""), // Clean CPF
        phones: item.phones?.map((phone) => phone.replace(/\D/g, "")), // Clean phones
      })
      .returning()
    return created
  }
  async update(id: string, item: InsertIndividual): Promise<Individual | null> {
    const [updated] = await this.db
      .update(individual)
      .set(item)
      .where(eq(individual.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(individual).where(eq(individual.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(individual)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
