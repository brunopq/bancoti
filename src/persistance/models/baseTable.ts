import { char, type PgColumnBuilderBase, timestamp } from "drizzle-orm/pg-core"
import { customAlphabet } from "nanoid"

const idLength = 16
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  idLength,
)

export const id = () => char()

export const baseTable = {
  id: id()
    .$defaultFn(() => `proc_${nanoid()}`)
    .primaryKey(),
  createdAt: timestamp({ mode: "date", withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp({ mode: "date", withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
} satisfies Record<string, PgColumnBuilderBase>
