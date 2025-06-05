import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const event = pgTable("events", {
  ...baseTable,
  lawsuit_id: text(),
  type: text(),
  title: text(),
  description: text(),
  date: timestamp(),
})
