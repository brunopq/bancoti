import { z } from "zod"

import { IndividualSchema } from "./individual.ts"
import { CompanySchema } from "./company.ts"

export const partyRoles = ["author", "defendant"] as const
export const partyTypes = ["individual", "company"] as const

export const PartyRoleSchema = z.enum(partyRoles)
export const PartyTypeSchema = z.enum(partyTypes)

const BasePartySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  lawsuitId: z.string(),
  role: PartyRoleSchema,
  type: PartyTypeSchema,
})

export const IndividualPartySchema = BasePartySchema.extend({
  type: z.literal("individual"),
  individual: IndividualSchema,
})

export const CompanyPartySchema = BasePartySchema.extend({
  type: z.literal("company"),
  company: CompanySchema,
})

export const PartySchema = z.discriminatedUnion("type", [
  IndividualPartySchema,
  CompanyPartySchema,
])

export type PartyRole = z.infer<typeof PartyRoleSchema>
export type PartyType = z.infer<typeof PartyTypeSchema>

export type IndividualParty = z.infer<typeof IndividualPartySchema>
export type CompanyParty = z.infer<typeof CompanyPartySchema>
export type Party = z.infer<typeof PartySchema>
// TODO: make new party and stuff