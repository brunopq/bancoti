import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { showRoutes } from "hono/dev"
import { logger } from "hono/logger"
import { swaggerUI } from "@hono/swagger-ui"
import { openAPISpecs } from "hono-openapi"

import { clientController } from "./application/controllers/clientController.ts"
import { lawsuitController } from "./application/controllers/lawsuitController.ts"
import "./application/cron/index.ts"
import { env } from "./utils/env.ts"

const app = new Hono()

if (env.NODE_ENV === "development") {
  app.use(logger())
}

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
      components: {
        // TODO: define schemas and responses here for better documentation
      },
      servers: [
        { url: `http://localhost:${env.PORT}`, description: "Local Server" },
        { url: env.PRODUCTION_URL, description: "Production Server" },
      ],
    },
  }),
)

app.route("/clients", clientController)
app.route("/lawsuits", lawsuitController)

showRoutes(app, { colorize: true })
serve({ fetch: app.fetch, port: env.PORT }, (info) => {
  console.log(`Server is running on http://localhost:${info.port} 🔥`)
})
