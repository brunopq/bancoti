import "dotenv"
import { cleanEnv, num, str, url } from "envalid"

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "production", "test"],
    default: "development",
  }),
  PRODUCTION_URL: url(),
  PORT: num({ default: 3000 }),

  LOG_LEVEL: str({
    choices: ["debug", "info", "warn", "error", "silent"],
    default: "info",
  }),
  LOGGER_HOST: url(),
  LOGGER_USER: str(),
  LOGGER_PASS: str(),

  DB_URL: url(),
  REDIS_URL: url(),

  JUDICE_DB_URL: url(),
  JUDICE_API_URL: url(),
  JUDICE_API_TOKEN: str(),
  JUDICE_API_TENANT: str(),

  JUDIT_REQUESTS_BASE_URL: url(),
  JUDIT_TRACKING_BASE_URL: url(),
  JUDIT_API_KEY: str(),
})
