import { z } from "zod"

import {
  lawsuitAreas,
  lawsuitInstances,
} from "../../domain/entities/lawsuit.ts"
import { movementDTO } from "./movementDTO.ts"

const lawsuitArea = z.enum(lawsuitAreas)
const lawsuitInstance = z.enum(lawsuitInstances)

export const lawsuitDTO = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  cnj: z.string(),
  status: z.string(),
  area: lawsuitArea,
  subjects: z.array(z.string()),
  instance: lawsuitInstance,
})

export const lawsuitWithMovementsDTO = lawsuitDTO.extend({
  movements: z.array(movementDTO),
})

export type LawsuitDTO = z.infer<typeof lawsuitDTO>

export const listLawsuitsResponse = z.object({
  lawsuits: z.array(lawsuitDTO),
})
export const findLawsuitByCNJResponse = z.object({
  lawsuit: lawsuitWithMovementsDTO,
})

export type ListLawsuitsResponse = z.infer<typeof listLawsuitsResponse>
export type findLawsuitByCNJResponse = z.infer<typeof findLawsuitByCNJResponse>