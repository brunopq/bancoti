import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const legalEntity = pgTable("legal_entities", {
  ...baseTable,
  corporateName: text().notNull(),
  cnpj: text().notNull(),
  // stateRegistration: text(), // inscricaoEstadual
  // address: text(), // endereco
  // phone: text(), // telefone
  // email: text(),
})

export type LegalEntity = typeof legalEntity.$inferSelect
export type InsertLegalEntity = typeof legalEntity.$inferInsert