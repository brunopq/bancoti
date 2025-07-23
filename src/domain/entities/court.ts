import type { Forum } from "./forum.ts"
import type { LawsuitArea } from "./lawsuit.ts"
import type { Tribunal } from "./tribunal.ts"

export type Court = {
  id: string
  createdAt: Date
  updatedAt: Date
  area: LawsuitArea
  name: string
  forumId?: string | undefined
  tribunalId?: string | undefined
}

export type CourtRelations = {
  forum?: Forum
  tribunal?: Tribunal
}

export type CourtWith<T extends keyof CourtRelations> = Court &
  Pick<CourtRelations, T>

