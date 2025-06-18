import { inject, injectable } from "inversify"
import { and, eq } from "drizzle-orm"
import { lawsuit } from "../models/lawsuit.ts"
import type { IBaseRepository } from "./IBaseRepository.ts"
import type { db as database } from "../db.ts"

import type { LawsuitWithMovements } from "../../domain/entities/lawsuit.ts"
import type { PartyRole } from "../models/enums.ts"
import { client } from "../models/client.ts"
import { party } from "../models/party.ts"

type Lawsuit = typeof lawsuit.$inferSelect

type LawsuitSearchFilters = {
  clientId?: string
  clientRole?: PartyRole
}

@injectable()
export class LawsuitRepository implements IBaseRepository<Lawsuit> {
  constructor(@inject("db") private db: typeof database) {}

  async findById(id: string): Promise<LawsuitWithMovements | null> {
    const lawsuit = await this.db.query.lawsuit.findFirst({
      where: (l, { eq }) => eq(l.id, id),
      with: { movements: true },
    })

    return lawsuit || null
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
      .leftJoin(party, eq(party.entity_id, client.id))
      .leftJoin(lawsuit, eq(lawsuit.id, party.lawsuit_id))

    return a.map((aa) => aa.lawsuits).filter((aa) => aa !== null)
  }

  async findByCnj(cnj: string): Promise<LawsuitWithMovements | null> {
    const lawsuit = await this.db.query.lawsuit.findFirst({
      where: (l, { eq }) => eq(l.cnj, cnj),
      with: { movements: true },
    })

    return lawsuit || null
  }

  async create(item: Lawsuit): Promise<Lawsuit> {
    const [created] = await this.db.insert(lawsuit).values(item).returning()
    return created
  }
  async update(id: string, item: Lawsuit): Promise<Lawsuit | null> {
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
