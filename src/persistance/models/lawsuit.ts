import { pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"
import { lawsuitArea } from "./enums.ts"

export const lawsuit = pgTable("lawsuits", {
  ...baseTable,
  cnj: text(),
  status: text(),
  area: lawsuitArea(),
})
