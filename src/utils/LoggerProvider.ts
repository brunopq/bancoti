import { pino, type Logger } from "pino"

function createLoggerFactory(): (serviceName: string) => Logger {
  const logger = pino({
    level: process.env.LOG_LEVEL || "info",
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
            host: "http://localhost:3100", // Your Loki server
            labels: { app: "bancoti" },
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
