import { z } from "zod"

export const ForumSchema = z.object({
  id: z.string(),
  name: z.string(),
  district: z.string(),
})

export type Forum = z.infer<typeof ForumSchema>
