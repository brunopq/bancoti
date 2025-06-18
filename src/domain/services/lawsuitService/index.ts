import { inject, injectable } from "inversify"

import {
  InvalidArgumentException,
  NotFoundException,
} from "../../../utils/exceptions/index.ts"

import { LawsuitRepository } from "../../../persistance/repositories/LawsuitRepository.ts"

import type { Lawsuit, LawsuitWithMovements } from "../../entities/lawsuit.ts"
import type { PartyRole } from "../../entities/party.ts"

type LawsuitFilters = {
  clientId?: string
  clientRole?: PartyRole
}

@injectable()
export class LawsuitService {
  constructor(
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
  ) {}

  async index(filters?: LawsuitFilters): Promise<Lawsuit[]> {
    if (filters?.clientRole && !filters.clientId) {
      throw new InvalidArgumentException(
        "`clientRole` filter requires `clientId` to be set.",
      )
    }

    return this.lawsuitRepository.findAll(filters)
  }

  async getById(id: string): Promise<Lawsuit | LawsuitWithMovements> {
    const lawsuit = await this.lawsuitRepository.findById(id)

    if (!lawsuit) {
      throw new NotFoundException(`Lawsuit with id "${id}" not found.`)
    }

    return lawsuit
  }

  async getByCnj(cnj: string): Promise<Lawsuit | LawsuitWithMovements> {
    const lawsuit = await this.lawsuitRepository.findByCnj(cnj)

    if (!lawsuit) {
      throw new NotFoundException(`Lawsuit with cnj "${cnj}" not found.`)
    }

    return lawsuit
  }
}
