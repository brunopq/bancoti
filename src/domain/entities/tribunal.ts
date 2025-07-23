import type { LawsuitArea } from "./lawsuit.ts"

export type Tribunal = {
  id: string
  area: LawsuitArea
  name: string
  abbreviation: string
}