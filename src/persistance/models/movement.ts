import {
  boolean,
  pgTable,
  text,
  index,
  bigint,
  timestamp,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { baseTable } from "./baseTable.ts"
import { lawsuit } from "./lawsuit.ts"

export const movement = pgTable(
  "movements",
  {
    ...baseTable,
    lawsuitId: text().references(() => lawsuit.id), // .notNull(), remove not null for now
    lawsuitCnj: text(), // This is a denormalized field, should be removed in the future
    dispatchDate: timestamp().notNull(),
    type: text().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    showClient: boolean().default(false).notNull(),
    _judiceId: bigint({ mode: "number" }).unique(),
  },
  (a) => [
    index("judice_id").on(a._judiceId.desc()),
    index("lawsuit_cnj").on(a.lawsuitCnj),
  ],
)

export const movementRelations = relations(movement, ({ one, many }) => ({
  lawsuit: one(lawsuit, {
    fields: [movement.lawsuitId],
    references: [lawsuit.id],
  }),
}))

export type Movement = typeof movement.$inferSelect
export type InsertMovement = typeof movement.$inferInsert