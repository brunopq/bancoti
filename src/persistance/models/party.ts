import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"
import { partRole, entityType } from "./enums.ts"

export const party = pgTable("parties", {
  ...baseTable,
  entityId: text().notNull(),
  type: entityType().notNull(),
  lawsuitId: text().notNull(),
  role: partRole().notNull(),
})

export type Party = typeof party.$inferSelect
export type InsertParty = typeof party.$inferInsert