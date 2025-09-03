import type { LawsuitWith } from "./lawsuit.ts"

export const lawsuitQueryStatuses = ["pending", "completed", "failed"] as const

export type LawsuitQueryStatus = (typeof lawsuitQueryStatuses)[number]

export type LawsuitQueryOptions = {
  cnj?: string
  clientId?: string
  movementsCount?: number
}

export type LawsuitQuery = {
  id: string
  createdAt: Date
  updatedAt: Date
  status: LawsuitQueryStatus
  options: LawsuitQueryOptions
}

export type LawsuitQueryWithResult = LawsuitQuery & {
  completedAt: Date
  result: LawsuitWith<"courts" | "parties" | "movements">[]
}
