import { z } from "zod"

export const districtDTO = z.object({
  id: z.string(),
  name: z.string(),
  municipalities: z.array(z.string()),
  state: z.string(),
})
