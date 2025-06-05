import { pgTable, text } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"

export const legalEntity = pgTable("legal_entities", {
  ...baseTable,
  corporateName: text(),
  cnpj: text(),
  // stateRegistration: text(), // inscricaoEstadual
  // address: text(), // endereco
  // phone: text(), // telefone
  // email: text(),
})
