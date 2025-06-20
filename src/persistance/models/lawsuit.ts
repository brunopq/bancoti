import { pgTable, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { baseTable } from "./baseTable.ts"
import { lawsuitArea } from "./enums.ts"

import { movement } from "./movement.ts"
import { court } from "./court.ts"

export const lawsuit = pgTable("lawsuits", {
  ...baseTable,
  cnj: text().notNull(),
  status: text().notNull(),
  area: lawsuitArea().notNull(),
  courtId: text()
    .notNull()
    .references(() => court.id), // Foreign key to court table
})


export const lawsuitRelations = relations(lawsuit, ({ one, many }) => ({
  movements: many(movement),
  court: one(court, {
    fields: [lawsuit.courtId],
    references: [court.id],
  }),
}))