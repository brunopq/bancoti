import {
  integer,
  jsonb,
  pgSchema,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core"

export const juditSchema = pgSchema("judit_api")

export const apiCalls = juditSchema.table("api_call", {
  id: serial().primaryKey(),
  calledAt: timestamp().notNull(),
  respondedAt: timestamp(),
  endpoint: text().notNull(),
  method: text().notNull(),
  status: integer(),
  request: jsonb().notNull(),
  requestHeaders: jsonb().notNull(),
  response: jsonb(),
  responseHeaders: jsonb(),
  validationError: jsonb(),
})
