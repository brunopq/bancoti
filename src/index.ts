import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { showRoutes } from "hono/dev"
import { logger } from "hono/logger"
import { swaggerUI } from "@hono/swagger-ui"
import { describeRoute, openAPISpecs } from "hono-openapi"
import { resolver, validator } from "hono-openapi/zod"
import { z } from "zod"

import { db } from "./persistance/db.ts"

// import { judiceController } from "./application/controllers/judiceController.ts"
import { clientController } from "./application/controllers/clientController.ts"
import { lawsuitController } from "./application/controllers/lawsuitController.ts"
import "./application/cron/index.ts"

const app = new Hono()
app.use(logger())
app.get("/ui", swaggerUI({ url: "/openapi" }))

app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "BancoTi",
        version: "0.0.1",
        description: "Banco de dados jurídico",
      },
      servers: [{ url: "http://localhost:3000", description: "Local Server" }],
    },
  }),
)

app.get(
  "/",
  describeRoute({
    description: "Root endpoint",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "text/plain": { schema: resolver(z.string()) },
        },
      },
    },
  }),
  (c) => {
    return c.text("Hello Hono!")
  },
)

// app.route("/judice", judiceController)
app.route("/clients", clientController)
app.route("/lawsuits", lawsuitController)

showRoutes(app, { colorize: true })
serve({ fetch: app.fetch, port: 3002 }, (info) => {
  console.log(`Server is running on http://localhost:${info.port} 🔥`)
})
