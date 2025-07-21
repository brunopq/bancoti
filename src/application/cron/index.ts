import { container } from "@/dependencyManager.ts"
import { JudiceClientSyncService } from "@/domain/services/judiceClientSyncService/index.ts"
import { JudiceLawsuitSyncService } from "@/domain/services/judiceLawsuitSyncService/index.ts"

import { NodeCronJobScheduler } from "@/persistance/cron/CronScheduler.ts"

const cronService = container.get(NodeCronJobScheduler)
const judiceSyncClient = container.get(JudiceClientSyncService)
const judiceSyncLawsuit = container.get(JudiceLawsuitSyncService)

cronService.schedule(
  "sync-judice-clients",
  "0 1,13 * * *", // Every day 01:00 and 13:00
  async () => {
    await judiceSyncClient.sync()
  },
)

cronService.schedule(
  "sync-judice-lawsuits",
  "0 2,10,20 * * *", // Every day 02:00, 10:00, and 20:00
  async () => {
    await judiceSyncLawsuit.sync()
  },
)