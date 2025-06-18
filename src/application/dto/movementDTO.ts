import { z } from "zod"

export const movementDTO = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  lawsuit_id: z.string(),
  type: z.string(),
  title: z.string(),
  description: z.string(),
})
