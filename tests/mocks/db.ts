import { drizzle } from "drizzle-orm/node-postgres"

import * as models from "../../src/persistance/models/index.ts"

export const mockDb = drizzle.mock({
  schema: models,
  casing: "snake_case",
})
