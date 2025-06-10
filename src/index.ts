import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { showRoutes } from "hono/dev"
import { logger } from "hono/logger"

import { db } from "./persistance/db.ts"

import { judiceController } from "./application/controllers/judiceController.ts"

const app = new Hono()
app.use(logger())

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.route("/judice", judiceController)

showRoutes(app, { colorize: true })
serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server is running on http://localhost:${info.port} 🔥`)
})
