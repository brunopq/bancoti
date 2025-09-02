import { inject } from "inversify"

import { LawsuitQueryRepository } from "@/persistance/repositories/LawsuitQueryRepository.ts"
import { JuditSyncService } from "../juditSyncService.ts"

export class LawsuitQueryHandler {
  constructor(
    @inject(LawsuitQueryRepository)
    private readonly lawsuitQueryRepository: LawsuitQueryRepository,
    @inject(JuditSyncService)
    private readonly lawsuitSyncService: JuditSyncService,
  ) {}

  async handleQuery(queryId: string): Promise<void> {
    console.log(`Handling lawsuit query ${queryId}`)

    const query = await this.lawsuitQueryRepository.findById(queryId)

    if (!query) {
      console.error(`Lawsuit query ${queryId} not found`)
      throw new Error("Lawsuit query not found")
    }

    for (const lawsuitCnj of query.lawsuitCnjs) {
      const lawsuit = await this.lawsuitSyncService.syncLawsuitByCNJ(lawsuitCnj)
    }

    await this.lawsuitQueryRepository.update(queryId, { status: "completed" })
    console.log(`Lawsuit query ${queryId} completed`)
  }
}
