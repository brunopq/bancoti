import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"

import { env } from "@/utils/env.ts"


import * as models from "./models/index.ts"
import { sql } from "drizzle-orm"

const pool = new Pool({
  connectionString: env.DB_URL,
})
export const db = drizzle({
  client: pool,
  schema: models,
  casing: "snake_case",
})

await db.execute(sql`CREATE EXTENSION IF NOT EXISTS unaccent`)

export type Database = NodePgDatabase<typeof models>

await migrate(db, { migrationsFolder: "drizzle" })

