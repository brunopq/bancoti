import { inject, injectable } from "inversify"

import { CourtRepository } from "@/persistance/repositories/CourtRepository.ts"

import type { Court } from "@/domain/entities/court.ts"

@injectable()
export class CourtService {
  constructor(
    @inject(CourtRepository)
    private readonly courtRepository: CourtRepository,
  ) {}

  async findByIds(ids: string[]): Promise<Court[]> {
    const courts = await this.courtRepository.findByIds(ids)

    return courts.map((court) => ({
      ...court,
      forumId: court.forumId || undefined,
      tribunalId: court.tribunalId || undefined,
    }))
  }
}
