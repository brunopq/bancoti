import { drizzle } from "drizzle-orm/node-postgres"

import * as models from "@/persistance/models/index.ts"

export const mockDb = drizzle.mock({
  schema: models,
  casing: "snake_case",
})
