import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const clientDocument = pgTable("client_documents", {
  ...baseTable,
  client_id: text(),
  type: text(),
  date: timestamp(),
  description: text(),
  file_url: text(),
})
