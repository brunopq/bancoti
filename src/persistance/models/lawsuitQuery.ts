import { jsonb, pgEnum, pgTable, text } from "drizzle-orm/pg-core"

import { baseTable } from "./baseTable.ts"

import { lawsuitQueryStatuses } from "@/domain/entities/lawsuitQuery.ts"

export const lawsuitQueryStatusEnum = pgEnum(
  "lawsuit_query_status",
  lawsuitQueryStatuses,
)

export const lawsuitQuery = pgTable("lawsuit_queries", {
  ...baseTable,
  status: lawsuitQueryStatusEnum().notNull(),
  options: jsonb("options").notNull(),
  lawsuitCnjs: text("lawsuit_cnjs").array().default([]).notNull(),
})
