import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const court = pgTable("courts", {
  ...baseTable,
  name: text(),
  abbreviation: text(),
  district: text(),
  type: text(),
})
