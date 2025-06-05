import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const witness = pgTable("witnesses", {
  ...baseTable,
  part_id: text(),
  individual_id: text(),
  // lawsuit_id: text(), // commented in puml
})
