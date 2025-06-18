import { z } from "zod"

import { ClientSchema } from "./client.ts"

export const partyRoles = ["author", "defendant"] as const

export const PartyRoleSchema = z.enum(partyRoles)
export type PartyRole = z.infer<typeof PartyRoleSchema>

export const PartySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  client: ClientSchema.optional(),
  lawsuitId: z.string(),
  role: PartyRoleSchema,
})

export type Party = z.infer<typeof PartySchema>
