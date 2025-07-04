import { pgTable, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { baseTable } from "./baseTable.ts"
import { lawsuitArea, lawsuitInstance } from "./enums.ts"

import { movement } from "./movement.ts"
import { court } from "./court.ts"

export const lawsuit = pgTable("lawsuits", {
  ...baseTable,
  cnj: text().notNull(),
  status: text().notNull(),
  area: lawsuitArea().notNull(),
  instance: lawsuitInstance().notNull(),
  courtId: text().references(() => court.id), // Foreign key to court table
})


export const lawsuitRelations = relations(lawsuit, ({ one, many }) => ({
  movements: many(movement),
  court: one(court, {
    fields: [lawsuit.courtId],
    references: [court.id],
  }),
}))