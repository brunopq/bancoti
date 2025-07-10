import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"

export const subject = pgTable("subjects", {
  ...baseTable,
  name: text().notNull().unique(),
})

export type Subject = typeof subject.$inferSelect
export type InsertSubject = typeof subject.$inferInsert
