import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"

import { env } from "../utils/env.ts"

import { container } from "../dependencyManager.ts"

import * as models from "./models/index.ts"

const pool = new Pool({
  connectionString: env.DB_URL,
})
export const db = drizzle({
  client: pool,
  schema: models,
  casing: "snake_case",
})


export type Database = NodePgDatabase<typeof models>

container.bind("db").toConstantValue(db)

await migrate(db, { migrationsFolder: "drizzle" })

