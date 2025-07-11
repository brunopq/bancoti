import type { JMapper } from "./baseJMapper.ts"

import type { CourtArea } from "@/persistance/models/enums.ts"

export const jCourtAreaMapper: JMapper<string, CourtArea> = {
  toDomain: (j: string): CourtArea => {
    switch (j) {
      case "CRIMINAL":
        return "criminal"
      case "FAMÍLIA":
        return "family"
      case "PENAL":
        return "criminal"
      case "CÍVEL":
        return "civil"
      case "TRABALHISTA":
        return "labor"
      default:
        throw new Error(`Unknown area: ${j}`)
    }
  },

  toJudice: (value: CourtArea): string => {
    switch (value) {
      case "criminal":
        return "CRIMINAL"
      case "family":
        return "FAMÍLIA"
      case "civil":
        return "CÍVEL"
      case "labor":
        return "TRABALHISTA"
      default:
        throw new Error(`Unknown court area: ${value}`)
    }
  },
}
