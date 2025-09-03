import { z } from "zod"
import { completeLawsuitDTO } from "./lawsuitDTO.ts"

export const lawsuitQueryOptions = z.object({
  cnj: z.string().optional(),
  clientId: z.string().optional(),
  movementsCount: z.number().min(1).optional(),
})

export type LawsuitQueryOptions = z.infer<typeof lawsuitQueryOptions>

export const createLawsuitQueryResponse = z.object({
  queryId: z.string(),
  createdAt: z.string(),
  options: lawsuitQueryOptions,
})

export type CreateLawsuitQueryResponse = z.infer<
  typeof createLawsuitQueryResponse
>

export const getLawsuitQueryResponse = z.object({
  queryId: z.string(),
  status: z.enum(["pending", "completed", "failed"]),
  createdAt: z.string(),
  options: lawsuitQueryOptions,
  completedAt: z.string().nullish(),
  result: z.array(completeLawsuitDTO).nullish(),
})

export type GetLawsuitQueryResponse = z.infer<typeof getLawsuitQueryResponse>
