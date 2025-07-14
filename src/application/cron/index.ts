import { container } from "@/dependencyManager.ts"
import { JudiceClientSyncService } from "@/domain/services/judiceClientSyncService/index.ts"

import { NodeCronJobScheduler } from "@/persistance/cron/CronScheduler.ts"

const cronService = container.get(NodeCronJobScheduler)
const judiceSyncClient = container.get(JudiceClientSyncService)

cronService.schedule(
  "sync-judice-clients",
  "Sync Judice Clients",
  "0 0 * * *", // Every day at midnight
  async () => {
    await judiceSyncClient.sync()
  },
  true,
)
