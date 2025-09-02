import amqplib, { type Channel } from "amqplib"
import { injectable } from "inversify"

import { env } from "@/utils/env.ts"

@injectable()
export class RabbitMQMessageQueue {
  private channel!: Channel

  async connect(): Promise<void> {
    const conn = await amqplib.connect(env.RABBITMQ_URL)
    this.channel = await conn.createChannel()
  }

  async publish<T>(queue: string, message: T): Promise<void> {
    await this.channel.assertQueue(queue, { durable: true })
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    })
  }

  async consume<T>(
    queue: string,
    handler: (msg: T) => Promise<void>,
  ): Promise<void> {
    await this.channel.assertQueue(queue, { durable: true })

    this.channel.consume(queue, async (msg) => {
      if (!msg) return

      try {
        const payload = JSON.parse(msg.content.toString()) as T
        await handler(payload)
        this.channel.ack(msg)
      } catch (err) {
        console.error(`Failed to process message on queue ${queue}`, err)
        this.channel.nack(msg, false, false) // reject and drop
      }
    })
  }
}
