import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"

export const district = pgTable("districts", {
  ...baseTable,
  name: text().notNull(),
  municipalities: text().array().notNull(),
  state: text().notNull(),
})
