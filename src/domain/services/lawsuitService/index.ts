import { inject, injectable } from "inversify"

import {
  InvalidArgumentException,
  NotFoundException,
} from "@/utils/exceptions/index.ts"

import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"

import type { Lawsuit, LawsuitWith } from "@/domain/entities/lawsuit.ts"
import type { PartyRole } from "@/domain/entities/party.ts"

import { LawsuitSyncService } from "@/domain/services/lawsuitSyncService/index.ts"
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
    @inject(LawsuitSyncService)
    private readonly lawsuitSyncService: LawsuitSyncService,
    @inject(MovementSyncService)
    private readonly movementSyncService: MovementSyncService,
    @inject(MovementService)
    private readonly movementService: MovementService,
  ) {}

  async index(filters?: LawsuitFilters): Promise<Lawsuit[]> {
    if (filters?.clientRole && !filters.clientId) {
      throw new InvalidArgumentException(
        "`clientRole` filter requires `clientId` to be set.",
      )
    }

    return this.lawsuitRepository.findAll(filters)
  }

  async getById(id: string): Promise<Lawsuit | LawsuitWith<"movements">> {
    const lawsuit = await this.lawsuitRepository.findById(id)

    if (!lawsuit) {
      throw new NotFoundException(`Lawsuit with id "${id}" not found.`)
    }

    const movements = await this.movementService.listByLawsuitId(lawsuit.id)

    return {
      ...lawsuit,
      movements,
    }
  }

  async getByCnj(cnj: string): Promise<Lawsuit | LawsuitWith<"movements">> {
    const lawsuit = await this.lawsuitSyncService.syncLawsuitByCNJ(cnj)

    if (!lawsuit) {
      throw new NotFoundException(`Lawsuit with cnj "${cnj}" not found.`)
    }

    await this.movementSyncService.sync()

    const movements = await this.movementService.listByLawsuitId(lawsuit.id)

    return {
      ...lawsuit,
      movements,
    }
  }
}
