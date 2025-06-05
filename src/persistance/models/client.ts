import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"
import { entityType } from "./enums.ts"

export const client = pgTable("clients", {
  ...baseTable,
  entity_id: text(),
  type: entityType(),
  // origem: text(), // commented in puml
  // indicacao: boolean(), // commented in puml
})
