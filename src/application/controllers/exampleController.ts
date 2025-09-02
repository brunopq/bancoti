import { Hono } from "hono"

import { container } from "@/dependencyManager.ts"

import { ExampleMessageService } from "@/domain/services/exampleMessageService/index.ts"

export const exampleController = new Hono()

const exampleService = container.get(ExampleMessageService)

exampleController.post("/", async (c) => {
  const res = await exampleService.sendExampleMessage(
    "Hello from exampleController",
  )

  return c.json({ ok: true })
})
