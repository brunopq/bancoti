import { inject, injectable } from "inversify"

import { MovementRepository } from "../../../persistance/repositories/MovementRepository.ts"
import { JudiceService } from "../../../persistance/external/judice/judiceService.ts"
import { LawsuitRepository } from "../../../persistance/repositories/LawsuitRepository.ts"

@injectable()
export class MovementSyncService {
  constructor(
    @inject(MovementRepository)
    private readonly movementRepository: MovementRepository,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
    @inject(JudiceService) private readonly judice: JudiceService,
  ) {}

  async sync() {
    while (true) {
      const [lastMovement] = await this.movementRepository.findAll({
        orderBy: { _judiceId: "desc" },
        limit: 1,
      })

      const lastMovId = lastMovement?._judiceId || 0

      const judiceMovements = await this.judice.listMovements({
        startFrom: lastMovId,
      })

      if (
        judiceMovements.length === 1 &&
        lastMovement._judiceId === judiceMovements[0].id
      ) {
        // No new movements to sync
        return
      }

      for (const jMov of judiceMovements) {
        const lawsuit = await this.lawsuitRepository.findByCnj(jMov.cnj)

        if (!lawsuit) {
          throw new Error("Handle this error case please i'm dumb")
        }

        const mov = await this.movementRepository.create({
          lawsuit_id: lawsuit.id,
          _judiceId: jMov.id,
          description: jMov.comentario,
          title: "Sem título", // TODO: think about this 🤔🤔
          type: jMov.tipo_de_tramite.tipo_de_tramite_descricao,
        })
      }
    }
  }
}
