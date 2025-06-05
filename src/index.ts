import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { showRoutes } from "hono/dev"
import { db } from "./persistance/db.ts"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

showRoutes(app, { colorize: true })
serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server is running on http://localhost:${info.port} 🔥`)
})
