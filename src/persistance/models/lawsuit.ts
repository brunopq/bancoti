import { pgTable, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { baseTable } from "./baseTable.ts"
import { lawsuitArea } from "./enums.ts"

import { movement } from "./movement.ts"

export const lawsuit = pgTable("lawsuits", {
  ...baseTable,
  cnj: text().notNull(),
  status: text().notNull(),
  area: lawsuitArea().notNull(),
})


export const lawsuitRelations = relations(lawsuit, ({ one, many }) => ({
  movements: many(movement),
}))