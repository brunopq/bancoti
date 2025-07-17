import { z } from "zod"

import { IndividualSchema } from "./individual.ts"
import { CompanySchema } from "./company.ts"

const ClientType = z.enum(["individual", "company"])

const BaseClientSchema = z.object({
  id: z.string(), // Esse id é o id da entidade (individual ou company)
  type: ClientType,
})

export const IndividualClientSchema = BaseClientSchema.extend({
  type: z.literal("individual"),
  individual: IndividualSchema,
})

export const CompanyClientSchema = BaseClientSchema.extend({
  type: z.literal("company"),
  company: CompanySchema,
})

export const ClientSchema = z.discriminatedUnion("type", [
  IndividualClientSchema,
  CompanyClientSchema,
])

export const NewClientSchema = z.discriminatedUnion("type", [
  IndividualClientSchema.omit({ id: true }),
  CompanyClientSchema.omit({ id: true }),
])

export type Client = z.infer<typeof ClientSchema>
export type IndividualClient = z.infer<typeof IndividualClientSchema>
export type CompanyClient = z.infer<typeof CompanyClientSchema>

export type NewClient = z.infer<typeof NewClientSchema>
