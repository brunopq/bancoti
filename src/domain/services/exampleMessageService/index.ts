import { RabbitMQMessageQueue } from "@/persistance/messaging/RabbitMQMessageQueue.ts"
import { injectable, inject } from "inversify"

@injectable()
export class ExampleMessageService {
  constructor(
    @inject(RabbitMQMessageQueue)
    private readonly mq: RabbitMQMessageQueue,
  ) {}

  async sendExampleMessage(message: string): Promise<void> {
    await this.mq.publish("example_queue", { message })
  }
}
