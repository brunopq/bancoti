import type { Movement } from "./movement.ts"
import type { Court } from "./court.ts"

export const lawsuitAreas = [
  "civil",
  "criminal",
  "administrative",
  "legal_compliance",
  "social_security",
  "family",
  "labor",
  "tax",
] as const

export const lawsuitInstances = ["first", "second", "special"] as const

export type LawsuitArea = (typeof lawsuitAreas)[number]
export type LawsuitInstance = (typeof lawsuitInstances)[number]

export type Lawsuit = {
  id: string
  createdAt: Date
  updatedAt: Date
  cnj: string
  status: string
  area: LawsuitArea
  instance: LawsuitInstance
  courtId: string | null
}

type LawsuitRelations = {
  movements: Movement[]
  court: Court
}

export type LawsuitWith<T extends keyof LawsuitRelations> = Lawsuit &
  Pick<LawsuitRelations, T>
