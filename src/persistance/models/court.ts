import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"

import { courtArea } from "./enums.ts"
import { forum } from "./forum.ts"
import { tribunal } from "./tribunal.ts"

export const court = pgTable("courts", {
  ...baseTable,
  name: text().notNull().unique(),
  forumId: text().references(() => forum.id),
  tribunalId: text().references(() => tribunal.id),
  area: courtArea().notNull(),
})

export const courtRelations = relations(court, ({ one, many }) => ({
  forum: one(forum, {
    fields: [court.forumId],
    references: [forum.id],
  }),
  tribunal: one(tribunal, {
    fields: [court.tribunalId],
    references: [tribunal.id],
  }),
}))

export type Court = typeof court.$inferSelect
export type InsertCourt = typeof court.$inferInsert