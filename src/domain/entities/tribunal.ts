import { z } from "zod"

export const TribunalSchema = z.object({
  id: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  area: z.string(),
})

export type Tribunal = z.infer<typeof TribunalSchema>
