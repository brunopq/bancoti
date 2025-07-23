import { z } from "zod"

import { partyRoles } from "@/domain/entities/party.ts"

import { individualDTO } from "./individual.dto.ts"
import { companyDTO } from "./company.dto.ts"

const partyRole = z.enum(partyRoles)

const baseParty = z.object({
  side: partyRole,
  type: z.enum(["individual", "company"]),
})

export const partyDTO = z.discriminatedUnion("type", [
  baseParty.extend({
    type: z.literal("individual"),
    individual: individualDTO,
  }),
  baseParty.extend({
    type: z.literal("company"),
    company: companyDTO,
  }),
])
