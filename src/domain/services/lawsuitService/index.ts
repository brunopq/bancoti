import { inject, injectable } from "inversify"

import {
  InvalidArgumentException,
  NotFoundException,
} from "@/utils/exceptions/index.ts"
import { LoggerFactory } from "@/utils/LoggerProvider.ts"

import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"

import type { Lawsuit, LawsuitWith } from "@/domain/entities/lawsuit.ts"
import type { PartyRole } from "@/domain/entities/party.ts"

import { JuditSyncService } from "@/domain/services/juditSyncService.ts"
import { MovementSyncService } from "@/domain/services/movementSyncService/index.ts"
import { MovementService } from "@/domain/services/movementService/index.ts"
import { CourtService } from "@/domain/services/courtService/index.ts"
import { PartyService } from "@/domain/services/partyService/index.ts"

type LawsuitFilters = {
  clientId?: string
  clientRole?: PartyRole
}

@injectable()
export class LawsuitService {
  constructor(
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
    @inject(JuditSyncService)
    private readonly lawsuitSyncService: JuditSyncService,
    @inject(CourtService)
    private readonly courtService: CourtService,
    @inject(PartyService)
    private readonly partyService: PartyService,
    @inject(MovementSyncService)
    private readonly movementSyncService: MovementSyncService,
    @inject(MovementService)
    private readonly movementService: MovementService,

    private readonly logger = LoggerFactory("LawsuitService"),
  ) {}

  async index(filters?: LawsuitFilters): Promise<Lawsuit[]> {
    if (filters?.clientRole && !filters.clientId) {
      throw new InvalidArgumentException(
        "`clientRole` filter requires `clientId` to be set.",
      )
    }

    return this.lawsuitRepository.findAllDomainFull(filters)
  }

  async getById(id: string): Promise<LawsuitWith<"movements">> {
    const lawsuit = await this.lawsuitRepository.findByIdDomain(id)

    if (!lawsuit) {
      throw new NotFoundException(`Lawsuit with id "${id}" not found.`)
    }

    return {
      ...lawsuit,
    }
  }

  async getByCnjNoSync(
    cnj: string,
    options?: { movementsCount?: number },
  ): Promise<LawsuitWith<"movements" | "courts" | "parties">> {
    const lawsuit = await this.lawsuitRepository.findByCnjDomain(cnj, options)

    if (!lawsuit) {
      throw new NotFoundException(
        `Lawsuit with CNJ "${cnj}" not found in the database.`,
      )
    }

    const courts = await this.courtService.findByIds(lawsuit.courtsIds)
    const parties = await this.partyService.findForLawsuit(lawsuit.id)

    return {
      ...lawsuit,
      courts,
      parties,
    }
  }

  async getByCnj(
    cnj: string,
  ): Promise<LawsuitWith<"movements" | "courts" | "parties">> {
    let syncResult: Awaited<ReturnType<JuditSyncService["syncLawsuitByCNJ"]>>

    try {
      syncResult = await this.lawsuitSyncService.syncLawsuitByCNJ(cnj)
    } catch (error) {
      this.logger.error({ cnj, error }, "Failed to sync lawsuit with judit")
      // I mean, it's not the end of the world
    }

    const lawsuit = await this.lawsuitRepository.findByCnjDomain(cnj)

    if (!lawsuit) {
      throw new NotFoundException(
        `Lawsuit with CNJ "${cnj}" not found in the database.`,
      )
    }

    const courts = await this.courtService.findByIds(lawsuit.courtsIds)
    const parties = await this.partyService.findForLawsuit(lawsuit.id)

    return {
      ...lawsuit,
      courts,
      parties,
    }
  }
}
