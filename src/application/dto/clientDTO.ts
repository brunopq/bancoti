import { z } from "zod"

import { companyDTO } from "./company.dto.ts"
import { individualDTO } from "./individual.dto.ts"

const baseClientDto = z.object({
  id: z.string(),
  type: z.enum(["individual", "company"]),
})

const individualClientDto = baseClientDto.merge(individualDTO).extend({
  type: z.literal("individual"),
})
const companyClientDto = baseClientDto.merge(companyDTO).extend({
  type: z.literal("company"),
})

export const ClientDTO = z.discriminatedUnion("type", [
  individualClientDto,
  companyClientDto,
])

export type ClientDTOType = z.infer<typeof ClientDTO>

export const ClientDTOArray = z.array(ClientDTO)
export type ClientDTOArrayType = z.infer<typeof ClientDTOArray>
