import type { District } from "./district.ts"

export type Forum = {
  id: string
  name: string
  districtId: string
}

export type ForumWithDistrict = Forum & {
  district: District
}