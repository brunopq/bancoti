import { z } from "zod/v4"

const LawsuitSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cnj: z.string().optional(),
  type: z.string(),
  status: z.string(),
})
