import { z } from "zod"

export const companyDTO = z.object({
  // id: z.string(),
  corporateName: z.string(),
  cnpj: z.string(),
})
