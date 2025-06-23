import "dotenv"
import { cleanEnv, str, url } from "envalid"

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "production", "test"],
    default: "development",
  }),
  DB_URL: url(),
  JUDICE_DB_URL: url(),
  JUDICE_API_URL: url(),
  JUDICE_API_TOKEN: str(),
  JUDICE_API_TENANT: str(),
})
