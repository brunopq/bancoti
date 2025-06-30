import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"

import { courtArea } from "./enums.ts"
import { forum } from "./forum.ts"

export const court = pgTable("courts", {
  ...baseTable,
  name: text().notNull(),
  abbreviation: text().notNull(),
  forumId: text()
    .notNull()
    .references(() => forum.id),
  area: courtArea().notNull(),
})


export const courtRelations = relations(court, ({ one, many }) => ({
  forum: one(forum, {
    fields: [court.forumId],
    references: [forum.id],
  }),
}))