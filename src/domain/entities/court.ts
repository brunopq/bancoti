import { z } from "zod"

export const CourtSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  area: z.string(),
  forumId: z.string().optional(),
  tribunalId: z.string().optional(),
})

export type Court = z.infer<typeof CourtSchema>
