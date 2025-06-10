import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

import { env } from "../../../utils/env.ts"

import * as schema from "./schema.ts"

const pool = new Pool({
  connectionString: env.JUDICE_DB_URL,
})
export const judb = drizzle({ client: pool, schema })
