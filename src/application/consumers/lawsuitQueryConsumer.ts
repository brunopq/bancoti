import { inject, injectable } from "inversify"
import { z } from "zod"

import { LawsuitQueryHandler } from "@/domain/services/LawsuitQueryHandler/index.ts"
import { RabbitMQMessageQueue } from "@/persistance/messaging/RabbitMQMessageQueue.ts"

const lawsuitQueryMessageSchema = z.object({
  queryId: z.string(),
})

@injectable()
export class LawsuitQueryConsumer {
  constructor(
    @inject(RabbitMQMessageQueue)
    private readonly mq: RabbitMQMessageQueue,
    @inject(LawsuitQueryHandler)
    private readonly lawsuitQueryHandler: LawsuitQueryHandler,
  ) {}

  async start() {
    await this.mq.consume("lawsuit_query_queue", async (msg) => {
      const { queryId } = lawsuitQueryMessageSchema.parse(msg)

      await this.lawsuitQueryHandler.handleQuery(queryId)
    })
  }
}
