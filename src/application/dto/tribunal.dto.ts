import { z } from "zod"

import { lawsuitArea } from "./enums.ts"

export const tribunalDTO = z.object({
  id: z.string(),
  area: lawsuitArea,
  name: z.string(),
  abbreviation: z.string(),
})
