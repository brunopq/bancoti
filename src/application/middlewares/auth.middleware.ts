import { getConnInfo } from "@hono/node-server/conninfo"
import type { MiddlewareHandler } from "hono"

import { LoggerFactory } from "@/utils/LoggerProvider.ts"

import type { AuthService } from "@/domain/services/authService/index.ts"

export function makeAuthMiddleware(
  authService: AuthService,
  logger = LoggerFactory("AuthMiddleware"),
): MiddlewareHandler {
  return async (c, next) => {
    const token = c.req.header("Authorization")

    if (!token) {
      logger.warn(
        {
          method: c.req.method,
          path: c.req.path,
          ip: getConnInfo(c).remote.address,
        },
        "Unauthorized access attempt without token",
      )
      return c.json({ error: "Unauthorized" }, 401)
    }

    const isValid = authService.verify(token)

    if (!isValid) {
      logger.warn(
        {
          method: c.req.method,
          path: c.req.path,
          ip: getConnInfo(c).remote.address,
        },
        "Unauthorized access attempt with invalid token",
      )

      return c.json({ error: "Unauthorized" }, 401)
    }

    return next()
  }
}
