import { inject, injectable } from "inversify"

import { MovementRepository } from "@/persistance/repositories/MovementRepository.ts"
import { JudiceService } from "@/persistance/external/judice/judiceService.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"

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
    // let i = 0
    let lastMovId = 0
    while (true) {
      // console.log("sync step ", i++)

      const [lastMovement] = await this.movementRepository.findAll({
        orderBy: { _judiceId: "desc" },
        limit: 1,
      })

      lastMovId = Math.max(lastMovement?._judiceId || 0, lastMovId)


      const judiceMovements = await this.judice.listMovements({
        startFrom: lastMovId,
        clientView: true,
      })

      if (
        judiceMovements.length === 0 ||
        (judiceMovements.length === 1 &&
          lastMovement._judiceId === judiceMovements[0].id)
      ) {
        // No new movements to sync
        return
      }

      for (const jMov of judiceMovements) {
        const lawsuit = await this.lawsuitRepository.findByCnj(jMov.cnj)

        lastMovId = Math.max(jMov.id, lastMovId)

        try {
          const mov = await this.movementRepository.create({
            createdAt: new Date(jMov.dta),
            updatedAt: new Date(jMov.lastupdate),
            dispatchDate: new Date(jMov.data_ajuizamento),
            lawsuitId: lawsuit?.id,
            lawsuitCnj: jMov.cnj,
            _judiceId: jMov.id,
            description: jMov.comentario,
            title: "Sem título", // TODO: think about this 🤔🤔
            type:
              jMov.tipo_de_tramite.tipo_de_tramite_descricao || "Desconhecido",
          })
        } catch (e) {
          console.error("Error creating movement:", jMov.id, jMov.cnj)
        }
      }
    }
  }
}
