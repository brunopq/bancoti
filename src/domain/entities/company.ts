import { z } from "zod"

export const CompanySchema = z.object({
  id: z.string(),
  corporateName: z.string(),
  cnpj: z.string(),
})

export const NewCompanySchema = CompanySchema.omit({ id: true })

export type Company = z.infer<typeof CompanySchema>
export type NewCompany = z.infer<typeof NewCompanySchema>
