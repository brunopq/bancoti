import { z } from "zod"

import { districtDTO } from "./district.dto.ts"

export const forumDTO = z.object({
  id: z.string(),
  name: z.string(),
})

export const forumWithDistrictDTO = forumDTO.extend({
  district: districtDTO,
})
