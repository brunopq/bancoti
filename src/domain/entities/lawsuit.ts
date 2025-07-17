import type { Movement } from "./movement.ts"
import type { Court } from "./court.ts"
import type { Party } from "./party.ts"

export const lawsuitAreas = [
  "civil",
  "criminal",
  "administrative",
  "legal_compliance",
  "social_security",
  "family",
  "labor",
  "tax",
  "unknown",
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
  subjects: string[]
  courtsIds: string[]
}

export type LawsuitRelations = {
  movements: Movement[]
  courts: Court[]
  parties: Party[]
}

export type LawsuitWith<T extends keyof LawsuitRelations> = Lawsuit &
  Pick<LawsuitRelations, T>
