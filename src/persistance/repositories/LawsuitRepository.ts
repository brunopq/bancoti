import { inject, injectable } from "inversify"
import { and, eq, inArray } from "drizzle-orm"

import type { Database } from "../db.ts"

import type { IBaseRepository } from "./IBaseRepository.ts"

import type {
  Lawsuit as DomainLawsuit,
  LawsuitWith as DomainLawsuitWith,
} from "@/domain/entities/lawsuit.ts"

import type { PartyRole } from "../models/enums.ts"
import { lawsuit, type Lawsuit, type InsertLawsuit } from "../models/lawsuit.ts"
import { client } from "../models/client.ts"
import { party } from "../models/party.ts"
import { subject } from "../models/subject.ts"
import { movement, type Movement } from "../models/movement.ts"

type LawsuitSearchFilters = {
  clientId?: string
  clientRole?: PartyRole
}

@injectable()
export class LawsuitRepository implements IBaseRepository<Lawsuit, InsertLawsuit> {
  constructor(@inject("db") private db: Database) {}

  async findByIdDomain(
    id: string,
  ): Promise<DomainLawsuitWith<"movements"> | null> {
    const lawsuit = await this.db.query.lawsuit.findFirst({
      where: (l, { eq }) => eq(l.id, id),
      with: { movements: true },
    })

    if (!lawsuit) return null

    const subjects = await this.db
      .select()
      .from(subject)
      .where(inArray(subject.id, lawsuit.subjectsIds))

    return {
      ...lawsuit,
      movements: lawsuit.movements.map((m) => ({
        ...m,
        lawsuitId: lawsuit.id,
      })),
      subjects: subjects.map((s) => s.name),
    }
  }

  async findById(id: string) {
    const lawsuit = await this.db.query.lawsuit.findFirst({
      where: (l, { eq }) => eq(l.id, id),
      with: { movements: true },
    })

    if (!lawsuit) return null

    const subjects = await this.db
      .select()
      .from(subject)
      .where(inArray(subject.id, lawsuit.subjectsIds))

    return {
      ...lawsuit,
      subjects,
    }
  }

  async findAll(filters?: LawsuitSearchFilters): Promise<Lawsuit[]> {
    if (!filters || !filters.clientId) {
      return this.db.select().from(lawsuit)
    }

    const a = await this.db
      .select()
      .from(client)
      .where(
        and(
          eq(client.id, filters.clientId),
          filters?.clientRole ? eq(party.role, filters.clientRole) : undefined,
        ),
      )
      .leftJoin(party, eq(party.entityId, client.id))
      .leftJoin(lawsuit, eq(lawsuit.id, party.lawsuitId))

    return a.map((aa) => aa.lawsuits).filter((aa) => aa !== null)
  }

  async findAllDomain(
    filters?: LawsuitSearchFilters,
  ): Promise<DomainLawsuit[]> {
    const lawsuits = await this.findAll(filters)

    const subjectsIds = lawsuits.flatMap((l) => l.subjectsIds)
    const subjects = await this.db
      .select()
      .from(subject)
      .where(inArray(subject.id, subjectsIds))

    return lawsuits.map((lawsuit) => ({
      ...lawsuit,
      subjects: subjects
        .filter((s) => lawsuit.subjectsIds.includes(s.id))
        .map((s) => s.name),
    }))
  }

  async findByCnj(cnj: string) {
    const lawsuit = await this.db.query.lawsuit.findFirst({
      where: (l, { eq }) => eq(l.cnj, cnj),
      with: { movements: true },
    })

    return lawsuit
  }

  async sync(item: InsertLawsuit): Promise<Lawsuit> {
    const existing = await this.findByCnj(item.cnj)

    if (existing) {
      return existing
    }

    return await this.create(item)
  }

  async create(item: InsertLawsuit): Promise<Lawsuit> {
    const [created] = await this.db.insert(lawsuit).values(item).returning()
    return created
  }
  async update(
    id: string,
    item: Partial<InsertLawsuit>,
  ): Promise<Lawsuit | null> {
    const [updated] = await this.db
      .update(lawsuit)
      .set(item)
      .where(eq(lawsuit.id, id))
      .returning()
    return updated ?? null
  }
  async delete(id: string): Promise<void> {
    await this.db.delete(lawsuit).where(eq(lawsuit.id, id))
  }
  async count(): Promise<number> {
    return this.db.$count(lawsuit)
  }
  async exists(id: string): Promise<boolean> {
    return !!(await this.findById(id))
  }
}
