import { pgTable, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { baseTable } from "./baseTable.ts"
import { lawsuitArea, lawsuitInstance } from "./enums.ts"

import { movement } from "./movement.ts"
import { court } from "./court.ts"
import { subject } from "./subject.ts"

export const lawsuit = pgTable("lawsuits", {
  ...baseTable,
  cnj: text().notNull(),
  status: text().notNull(),
  area: lawsuitArea().notNull(),
  instance: lawsuitInstance().notNull(),
  courtsIds: text()
    .references(() => court.id)
    .array()
    .notNull(),
  subjectsIds: text()
    .references(() => subject.id)
    .array()
    .notNull(),
})

export const lawsuitRelations = relations(lawsuit, ({ one, many }) => ({
  movements: many(movement),
}))

export type Lawsuit = typeof lawsuit.$inferSelect
export type InsertLawsuit = typeof lawsuit.$inferInsert
