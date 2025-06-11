import { z } from "zod"

const ClientType = z.enum(["individual", "company"])

export const ClientBaseSchema = z.object({
  id: z.string(),
  type: ClientType,
})

export const IndividualSchema = ClientBaseSchema.extend({
  type: z.literal("individual"),
  name: z.string(),
  cpf: z.string(),
  email: z.string().email().optional(),
  phones: z.string().array(),
  birthDate: z.coerce.date().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
})

export const CompanySchema = ClientBaseSchema.extend({
  type: z.literal("company"),
  corporateName: z.string(),
  cnpj: z.string(),
})

export const ClientSchema = z.discriminatedUnion("type", [
  IndividualSchema,
  CompanySchema,
])

export type Client = z.infer<typeof ClientSchema>
export type Individual = z.infer<typeof IndividualSchema>
export type Company = z.infer<typeof CompanySchema>
