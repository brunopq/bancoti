import { container } from "@/dependencyManager.ts"

import { RabbitMQMessageQueue } from "@/persistance/messaging/RabbitMQMessageQueue.ts"
import { ExampleConsumer } from "./exampleConsumer.ts"
import { LawsuitQueryConsumer } from "./lawsuitQueryConsumer.ts"

const mq = container.get(RabbitMQMessageQueue)

await mq.connect()

const exampleConsumer = container.get(ExampleConsumer)
const lawsuitQueryConsumer = container.get(LawsuitQueryConsumer)
await exampleConsumer.start()
await lawsuitQueryConsumer.start()
