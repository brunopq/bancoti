import { defineConfig } from "drizzle-kit"
import { env } from "./src/utils/env.ts"

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/persistance/models",
  out: "./drizzle",
  dbCredentials: {
    url: env.DB_URL,
  },
  casing: "snake_case",
})
