import { Hono } from "hono"

import { container } from "../../dependencyManager.ts"

export const lawsuitController = new Hono()

lawsuitController.get("/lawsuits", async (c) => {
  const lawsuits = await lawsuitService.index()

  return c.json(lawsuits)
})
