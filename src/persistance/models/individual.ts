import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { baseTable } from "./baseTable.ts"
import { genderType } from "./enums.ts"

export const individual = pgTable("individuals", {
  ...baseTable,
  name: text().notNull(),
  cpf: text().notNull(),
  birthDate: timestamp(),
  gender: genderType(),
  // nacionalidade: text(),
  // estadoCivil: text(),
  // profissao: text(),
  // endereco: text(),
  phones: text().array(),
  email: text(),
})
