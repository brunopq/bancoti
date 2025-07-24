import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { showRoutes } from "hono/dev"
import { logger } from "hono/logger"
import { swaggerUI } from "@hono/swagger-ui"
import { describeRoute, openAPISpecs } from "hono-openapi"

import { container } from "./dependencyManager.ts"
import { env } from "./utils/env.ts"

import { clientController } from "./application/controllers/clientController.ts"
import { lawsuitController } from "./application/controllers/lawsuitController.ts"
import { makeAuthMiddleware } from "./application/middlewares/auth.middleware.ts"
import "./application/cron/index.ts"

import { AuthService } from "./domain/services/authService/index.ts"
import { resolver } from "hono-openapi/zod"
import { z } from "zod"

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
        version: env.API_VERSION,
        description: "Banco de dados jurídico",
      },
      components: {
        // TODO: define schemas and responses here for better documentation
        securitySchemes: {
          apiKey: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
          },
        },
      },
      servers: [
        { url: `http://localhost:${env.PORT}`, description: "Local Server" },
        { url: env.PRODUCTION_URL, description: "Production Server" },
      ],
      security: [{}],
    },
  }),
)

app.get(
  "/",
  describeRoute({
    tags: ["About"],
    description: "Health check and welcome message",
    responses: {
      200: {
        description: "Info about the API",
        content: {
          "application/json": {
            schema: resolver(
              z.object({
                message: z.string(),
                version: z.string(),
                docs: z.string().url(),
              }),
            ),
          },
        },
      },
    },
    validateResponse: true,
  }),
  (c) =>
    c.json({
      message: "Welcome to BancoTi API",
      version: env.API_VERSION,
      docs: `${new URL(c.req.url).origin}/ui`,
    }),
)

const authService = container.get(AuthService)
const authMiddleware = makeAuthMiddleware(authService)
app.use(authMiddleware)

app.route("/clients", clientController)
app.route("/lawsuits", lawsuitController)

showRoutes(app, { colorize: true })
serve({ fetch: app.fetch, port: env.PORT }, (info) => {
  console.log(`Server is running on http://localhost:${info.port} 🔥`)
})
