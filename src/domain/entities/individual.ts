import { z } from "zod"

export const IndividualSchema = z.object({
  id: z.string(),
  name: z.string(),
  cpf: z.string(),
  email: z.string().optional(),
  phones: z.string().array(),
  birthDate: z.coerce.date().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
})

export const NewIndividualSchema = IndividualSchema.omit({ id: true })

export type Individual = z.infer<typeof IndividualSchema>
export type NewIndividual = z.infer<typeof NewIndividualSchema>
