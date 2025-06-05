import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const lawsuitDocument = pgTable("lawsuit_documents", {
  ...baseTable,
  lawsuit_id: text(),
  movementation_id: text(),
  type: text(),
  date: timestamp(),
  description: text(),
  file_url: text(),
})
