import { z } from "zod"

import { lawsuitArea, lawsuitInstance } from "./enums.ts"
import { movementDTO } from "./movementDTO.ts"
import { courtDTO } from "./court.dto.ts"
import { partyDTO } from "./party.dto.ts"

export const lawsuitDTO = z.object({
  id: z.string(),
  // createdAt: z.string().datetime(),
  // updatedAt: z.string().datetime(),
  cnj: z.string(),
  status: z.string(),
  area: lawsuitArea,
  subjects: z.array(z.string()),
  instance: lawsuitInstance,
})

export const lawsuitWithMovementsDTO = lawsuitDTO.extend({
  movements: z.array(movementDTO),
})


export const completeLawsuitDTO = lawsuitDTO.extend({
  movements: z.array(movementDTO),
  courts: z.array(courtDTO),
  parties: z.array(partyDTO),
})

export type LawsuitDTO = z.infer<typeof lawsuitDTO>
export type lawsuitWithMovementsDTO = z.infer<typeof lawsuitWithMovementsDTO>
export type CompleteLawsuitDTO = z.infer<typeof completeLawsuitDTO>

export const listLawsuitsResponse = z.object({
  lawsuits: z.array(lawsuitDTO),
})
export const findLawsuitByCNJResponse = z.object({
  lawsuit: lawsuitWithMovementsDTO,
})

export type ListLawsuitsResponse = z.infer<typeof listLawsuitsResponse>
export type findLawsuitByCNJResponse = z.infer<typeof findLawsuitByCNJResponse>