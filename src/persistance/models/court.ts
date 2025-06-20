import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const court = pgTable("courts", {
  ...baseTable,
  name: text().notNull(),
  abbreviation: text().notNull(),
  district: text().notNull(),
  type: text().notNull(),
})

