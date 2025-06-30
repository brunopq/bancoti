import { injectable, inject } from "inversify"

import {
  MovementRepository,
  type Movement as PersistantMovement,
} from "../../../persistance/repositories/MovementRepository.ts"
import { LawsuitRepository } from "../../../persistance/repositories/LawsuitRepository.ts"

import type { Movement } from "../../entities/movement.ts"
import { MovementSyncService } from "../movementSyncService/index.ts"

const movementMapper = {
  toDomain: (p: PersistantMovement): Movement => {
    if (!p.lawsuitId) throw new Error("PersistantMovement is missing lawsuitId")

    return {
      id: p.id,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
      lawsuitId: p.lawsuitId,
      type: p.type,
      title: p.title,
      description: p.description,
      _judiceId: p._judiceId ?? null,
    }
  },
}

@injectable()
export class MovementService {
  constructor(
    @inject(MovementRepository)
    private readonly movementRepository: MovementRepository,
    @inject(MovementSyncService)
    private readonly movementSyncService: MovementSyncService,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
  ) {}

  async listByLawsuitId(id: string): Promise<Movement[]> {
    await this.movementSyncService.sync()

    const lawsuit = await this.lawsuitRepository.findById(id)

    if (!lawsuit) {
      throw new Error(`Lawsuit with id "${id}" not found.`)
    }

    const movements = await this.movementRepository.findAll({
      where: { lawsuitCnj: lawsuit.cnj },
      orderBy: { createdAt: "desc" },
    })

    const movementsWithLawsuitId = await Promise.all(
      movements.map(async (movement) => {
        const u = await this.movementRepository.update(movement.id, {
          lawsuitId: id,
        })

        if (!u)
          throw new Error(`Failed to update movement with id "${movement.id}"`)

        return movementMapper.toDomain(u)
      }),
    )

    return movementsWithLawsuitId
  }
}
