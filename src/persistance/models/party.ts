import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"
import { partRole, entityType } from "./enums.ts"

export const party = pgTable("parties", {
  ...baseTable,
  entity_id: text(),
  type: entityType(),
  lawsuit_id: text(),
  role: partRole(),
})
