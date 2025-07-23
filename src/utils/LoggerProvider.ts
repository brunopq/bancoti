import { pino, type Logger } from "pino"

import { env } from "@/utils/env.ts"


function createLoggerFactory(): (serviceName: string) => Logger {
  const logger = pino({
    level: env.LOG_LEVEL || "info",
    base: undefined, // Removes pid and hostname
    transport: {
      targets: [
        {
          target: "pino-pretty",
          level: "info",
          options: { colorize: true },
        },
        {
          target: "pino-loki",
          level: "info",
          options: {
            host: env.LOGGER_HOST,
            basicAuth: {
              username: env.LOGGER_USER,
              password: env.LOGGER_PASS,
            },
            labels: { app: "bancoti", enviroment: env.NODE_ENV },
            batching: true,
            interval: 5,
          },
        },
      ],
    },
  })

  return (serviceName: string) =>
    logger.child({
      service: serviceName,
    })
}

export const LoggerFactory = createLoggerFactory()
