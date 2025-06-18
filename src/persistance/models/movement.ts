import { pgTable, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { baseTable } from "./baseTable.ts"
import { lawsuit } from "./lawsuit.ts"


export const movement = pgTable("movements", {
  ...baseTable,
  lawsuit_id: text().notNull(),
  type: text().notNull(),
  title: text().notNull(),
  description: text().notNull(),
})

export const movementRelations = relations(movement, ({ one, many }) => ({
  lawsuit: one(lawsuit, {
    fields: [movement.lawsuit_id],
    references: [lawsuit.id],
  }),
}))