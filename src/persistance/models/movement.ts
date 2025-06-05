import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const movement = pgTable("movements", {
  ...baseTable,
  lawsuit_id: text(),
  type: text(),
  title: text(),
  description: text(),
})
