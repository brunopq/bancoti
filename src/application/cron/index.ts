import { container } from "@/dependencyManager.ts"
import { JudiceClientSyncService } from "@/domain/services/judiceClientSyncService/index.ts"

import { NodeCronJobScheduler } from "@/persistance/cron/CronScheduler.ts"

const cronService = container.get(NodeCronJobScheduler)
const judiceSyncClient = container.get(JudiceClientSyncService)

cronService.schedule(
  "sync-judice-clients",
  "0 1,13 * * *", // Every day 01:00 and 13:00
  async () => {
    await judiceSyncClient.sync()
  },
)