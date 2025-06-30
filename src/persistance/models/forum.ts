import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"
import { district } from "./district.ts"
import { relations } from "drizzle-orm"

export const forum = pgTable("forums", {
  ...baseTable,
  name: text().notNull(),
  districtId: text()
    .notNull()
    .references(() => district.id),
})

export const forumRelations = relations(forum, ({ one }) => ({
  district: one(district, {
    fields: [forum.districtId],
    references: [district.id],
  }),
}))
