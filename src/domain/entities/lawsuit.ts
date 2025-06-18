import type { Movement } from "./movement.ts"

export const lawsuitAreas = [
  "civil",
  "criminal",
  "administrative",
  "labor",
  "tax",
] as const

export type LawsuitArea = (typeof lawsuitAreas)[number]

export type Lawsuit = {
  id: string
  createdAt: Date
  updatedAt: Date
  cnj: string
  status: string
  area: LawsuitArea
}

export type LawsuitWithMovements = Lawsuit & {
  movements: Movement[]
}
