import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"
import { courtArea } from "./enums.ts"

export const tribunal = pgTable("tribunals", {
  ...baseTable,
  name: text().notNull(),
  abbreviation: text().notNull(),
  area: courtArea().notNull(),
})

export type Tribunal = typeof tribunal.$inferSelect
export type InsertTribunal = typeof tribunal.$inferInsert
