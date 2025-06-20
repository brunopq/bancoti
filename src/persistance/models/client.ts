import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable, id } from "./baseTable.ts"
import { entityType } from "./enums.ts"

export const client = pgTable("clients", {
  ...baseTable,
  entityId: id().notNull(),
  type: entityType().notNull(),
})
