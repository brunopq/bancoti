import { Hono } from "hono"

import { JudiceService } from "../../domain/services/judiceService/index.ts"

import { container } from "../../dependencyManager.ts"

export const judiceController = new Hono()

const judiceService = container.get(JudiceService)

judiceController.get("/ping", (c) => {
  return c.text("pong")
})

judiceController.get("/lawsuits", async (c) => {
  const lawsuits = await judiceService.getLawsuits()

  return c.json(lawsuits)
})
