import { container } from "@/dependencyManager.ts"
import { JudiceClientSyncService } from "@/domain/services/judiceClientSyncService/index.ts"
import { JudiceLawsuitSyncService } from "@/domain/services/judiceLawsuitSyncService/index.ts"

import { NodeCronJobScheduler } from "@/persistance/cron/CronScheduler.ts"

const cronService = container.get(NodeCronJobScheduler)
const judiceSyncClient = container.get(JudiceClientSyncService)
const judiceSyncLawsuit = container.get(JudiceLawsuitSyncService)

cronService.schedule(
  "sync-judice-clients",
  "0 22 * * *", // Every day, 22:00
  async () => {
    await judiceSyncClient.sync()
  },
)

cronService.schedule(
  "sync-judice-lawsuits",
  "0 2 * * *", // Every day 02:00
  async () => {
    await judiceSyncLawsuit.sync()
  },
)