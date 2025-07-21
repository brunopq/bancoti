import { inject, injectable } from "inversify"
import { and, asc, desc, eq, inArray, or, type Query } from "drizzle-orm"

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
import { individual } from "../models/individual.ts"
import { legalEntity } from "../models/legalEntity.ts"
import { court } from "../models/court.ts"
import type { PgSelectBuilder } from "drizzle-orm/pg-core"

type LawsuitSearchFilters = {
  clientId?: string
  clientRole?: PartyRole
}

type LawsuitListOptions = {
  orderBy?: Partial<Record<keyof Lawsuit, "asc" | "desc">>
  limit?: number
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

  async findAll(
    filters?: LawsuitSearchFilters,
    options?: LawsuitListOptions,
  ): Promise<Lawsuit[]> {
    if (!filters || !filters.clientId) {
      return await this.db
        .select()
        .from(lawsuit)
        .orderBy(
          ...Object.entries(options?.orderBy || {}).map(([k, v]) =>
            v === "asc"
              ? asc(lawsuit[k as keyof Lawsuit])
              : desc(lawsuit[k as keyof Lawsuit]),
          ),
        )
        .limit(options?.limit || 1000)
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
      .leftJoin(
        individual,
        and(eq(individual.id, client.entityId), eq(client.type, "individual")),
      )
      .leftJoin(
        legalEntity,
        and(
          eq(legalEntity.id, client.entityId),
          eq(client.type, "legal_entity"),
        ),
      )
      .leftJoin(
        party,
        or(
          and(eq(party.entityId, individual.id), eq(party.type, "individual")),
          and(
            eq(party.entityId, legalEntity.id),
            eq(party.type, "legal_entity"),
          ),
        ),
      )
      .leftJoin(lawsuit, eq(lawsuit.id, party.lawsuitId))
      .orderBy(
        ...Object.entries(options?.orderBy || {}).map(([k, v]) =>
          v === "asc"
            ? asc(lawsuit[k as keyof Lawsuit])
            : desc(lawsuit[k as keyof Lawsuit]),
        ),
      )
      .limit(options?.limit || 1000)

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

  async findAllFull(filters?: LawsuitSearchFilters) {
    const lawsuits = await this.db
      .select()
      .from(lawsuit)
      .leftJoin(party, eq(party.lawsuitId, lawsuit.id))
      .leftJoin(
        individual,
        and(eq(individual.id, party.entityId), eq(party.type, "individual")),
      )
      .leftJoin(
        legalEntity,
        and(eq(legalEntity.id, party.entityId), eq(party.type, "legal_entity")),
      )
      .leftJoin(
        client,
        or(
          and(
            eq(client.type, "individual"),
            eq(client.entityId, individual.id),
          ),
          and(
            eq(client.type, "legal_entity"),
            eq(client.entityId, legalEntity.id),
          ),
        ),
      )
      .leftJoin(movement, eq(movement.lawsuitId, lawsuit.id))
      .where(
        filters
          ? and(
              filters.clientId ? eq(client.id, filters.clientId) : undefined,
              filters?.clientRole
                ? eq(party.role, filters.clientRole)
                : undefined,
            )
          : undefined,
      )

    return lawsuits
  }

  async findAllDomainFull(
    filters?: LawsuitSearchFilters,
  ): Promise<DomainLawsuitWith<"courts" | "movements" | "parties">[]> {
    const lawsuits = await this.findAllFull(filters)

    // Group by lawsuit ID to avoid duplicates
    const map = new Map<
      string,
      {
        lawsuit: DomainLawsuitWith<"courts" | "movements" | "parties">
        courtIds: string[]
        subjectsIds: string[]
      }
    >()

    for (const {
      lawsuits: l,
      clients: c,
      individuals: i,
      legal_entities: le,
      movements: m,
      parties: p,
    } of lawsuits) {
      if (!map.has(l.id)) {
        map.set(l.id, {
          lawsuit: {
            ...l,
            courts: [],
            movements: [],
            parties: [],
            subjects: [],
          },
          courtIds: l.courtsIds,
          subjectsIds: l.subjectsIds,
        })
      }

      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const lawsuit = map.get(l.id)!

      lawsuit.courtIds.push(...l.courtsIds)
      lawsuit.subjectsIds.push(...l.subjectsIds)

      if (m)
        lawsuit.lawsuit.movements.push({
          ...m,
          lawsuitId: l.id,
        })

      if (p && p.type === "individual" && i) {
        lawsuit.lawsuit.parties.push({
          ...p,
          type: "individual",
          individual: {
            ...i,
            phones: i.phones || [],
            email: i.email || undefined,
            birthDate: i.birthDate || undefined,
            gender: i.gender || undefined,
          },
        })
      }

      if (p && p.type === "legal_entity" && le) {
        lawsuit.lawsuit.parties.push({
          ...p,
          type: "company",
          company: le,
        })
      }
    }

    // Fetch courts for each lawsuit
    const courtIds = Array.from(
      new Set(Array.from(map.values()).flatMap((l) => l.courtIds)),
    )
    const courts = await this.db
      .select()
      .from(court)
      .where(inArray(court.id, courtIds))

    for (const lawsuit of map.values()) {
      lawsuit.lawsuit.courts = courts
        .filter((c) => lawsuit.courtIds.includes(c.id))
        .map((c) => ({
          ...c,
          forumId: c.forumId || undefined,
          tribunalId: c.tribunalId || undefined,
        }))
    }

    // fetch subjects for each lawsuit
    const subjectsIds = Array.from(
      new Set(Array.from(map.values()).flatMap((l) => l.subjectsIds)),
    )
    const subjects = await this.db
      .select()
      .from(subject)
      .where(inArray(subject.id, subjectsIds))

    for (const lawsuit of map.values()) {
      lawsuit.lawsuit.subjects = subjects
        .filter((s) => lawsuit.subjectsIds.includes(s.id))
        .map((s) => s.name)
    }

    return Array.from(map.values().map((l) => l.lawsuit))
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
