import type { z } from "zod"

import type { Lawsuit } from "../../../../domain/entities/lawsuit.ts"

import type { consultaProcessoResponseSchema } from "../dto/index.ts"
import type { JMapper } from "./baseJMapper.ts"
import { jAreaMapper } from "./jAreaMapper.ts"

type JLawsuit = z.infer<
  typeof consultaProcessoResponseSchema
>["retorno"]["object"][number]

export const jLawsuitMapper: JMapper<JLawsuit, Partial<Lawsuit>> = {
  toDomain: (j) => ({
    area: jAreaMapper.toDomain(j.area.nome),
    cnj: j.cnj,
  }),
  toJudice: (lawsuit) => {
    throw new Error("Not implemented")
  },
}
