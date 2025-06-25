import { injectable, inject } from "inversify"

import { JudiceService } from "../../../persistance/external/judice/judiceService.ts"
import { LawsuitRepository } from "../../../persistance/repositories/LawsuitRepository.ts"

@injectable()
export class LawsuitSyncService {
  constructor(
    @inject(JudiceService) private readonly judiceService: JudiceService,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
  ) {}

  /**
   * This method expects the lawsuit to be present in the judice API.
   *
   * @param cnj
   */
  async syncLawsuitByCNJ(cnj: string): Promise<void> {
    const lawsuit = await this.judiceService.getLawsuitByCNJ(cnj)

    if (!lawsuit) {
      throw new Error(`Lawsuit with CNJ ${cnj} not found in judice API`)
    }

    const dbLawsuit = await this.lawsuitRepository.findByCnj(cnj)

    if (dbLawsuit) {
      await this.lawsuitRepository.update(dbLawsuit.id, {
        area: lawsuit.area,
        status: lawsuit.status,
      })
    }
  }
}
