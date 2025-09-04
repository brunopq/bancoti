import { z } from "zod"

export const individualDTO = z.object({
  // id: z.string(),
  name: z.string(),
  cpf: z.string(),
  email: z.string().optional(),
  phones: z.string().array(),
  birthDate: z.coerce.date().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
})
