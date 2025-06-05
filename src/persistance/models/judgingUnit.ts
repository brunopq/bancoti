import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const judgingUnit = pgTable("judging_units", {
  ...baseTable,
  court_id: text(),
  name: text(),
  address: text(),
})
