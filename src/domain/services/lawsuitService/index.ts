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

  async getByCnj(cnj: string): Promise<Lawsuit | LawsuitWith<"movements">> {
    let syncResult: Awaited<ReturnType<JuditSyncService["syncLawsuitByCNJ"]>>

    try {
      syncResult = await this.lawsuitSyncService.syncLawsuitByCNJ(cnj)
    } catch (error) {
      this.logger.error({ cnj, error }, "Failed to sync lawsuit with judit")

      throw new Error(`Failed to sync lawsuit with CNJ "${cnj}": ${error}`)
    }

    const lawsuit = await this.lawsuitRepository.findByIdDomain(
      syncResult.lawsuitId,
    )

    if (!lawsuit) {
      throw new NotFoundException(`Lawsuit with CNJ "${cnj}" not found.`)
    }

    return lawsuit
  }
}
