import type { LawsuitArea } from "../../../../domain/entities/lawsuit.ts"

import type { JMapper } from "./baseJMapper.ts"

export const jAreaMapper: JMapper<string, LawsuitArea> = {
  toDomain: (j) => {
    switch (j) {
      case "TRIBUTÁRIO":
        return "tax"
      case "CRIMINAL":
        return "criminal"
      case "FAMÍLIA":
        return "family"
      case "CONTROLADORIA JURÍDICA":
        return "legal_compliance"
      case "PENAL":
        return "criminal"
      case "ADMINISTRATIVO":
        return "administrative"
      case "PREVIDENCIÁRIO":
        return "social_security"
      case "CÍVEL":
        return "civil"
      case "TRABALHISTA":
        return "labor"
      default:
        throw new Error(`Unknown area: ${j}`)
    }
  },
  toJudice: (area) => {
    switch (area) {
      case "tax":
        return "TRIBUTÁRIO"
      case "criminal":
        return "CRIMINAL"
      case "family":
        return "FAMÍLIA"
      case "legal_compliance":
        return "CONTROLADORIA JURÍDICA"
      case "social_security":
        return "PREVIDENCIÁRIO"
      case "administrative":
        return "ADMINISTRATIVO"
      case "civil":
        return "CÍVEL"
      case "labor":
        return "TRABALHISTA"
      default:
        throw new Error(`Unknown area: ${area}`)
    }
  },
}
