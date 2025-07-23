import { z } from "zod"

import { lawsuitArea } from "./enums.ts"
import { forumDTO } from "./forum.dto.ts"
import { tribunalDTO } from "./tribunal.dto.ts"

export const courtDTO = z.object({
  id: z.string(),
  name: z.string(),
  area: lawsuitArea,
})

export const fullCourtDTO = courtDTO.extend({
  forum: forumDTO.optional(),
  tribunal: tribunalDTO.optional(),
})
