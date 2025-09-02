import { RabbitMQMessageQueue } from "@/persistance/messaging/RabbitMQMessageQueue.ts"
import { inject, injectable } from "inversify"

@injectable()
export class ExampleConsumer {
  constructor(
    @inject(RabbitMQMessageQueue)
    private readonly mq: RabbitMQMessageQueue,
  ) {}

  async start() {
    await this.mq.consume<{ queryId: string; lawsuitIds: string[] }>(
      "example_queue",
      async (msg) => {
        console.log(msg)
      },
    )
  }
}
