import type { JMapper } from "./baseJMapper.ts"

import type { Movement } from "../../../../domain/entities/movement.ts"

import type { listaAndamentosResponseSchema } from "../dto/index.ts"
import type { z } from "zod"

type JAndamento = z.infer<
  typeof listaAndamentosResponseSchema
>["retorno"]["object"][number]

type PartialMovement = Omit<
  Movement,
  "id" | "createdAt" | "updatedAt" | "lawsuit_id"
>

export const jMovementMapper: JMapper<JAndamento, PartialMovement> = {
  toDomain: (j) => ({
    _judiceId: j.id,
    description: j.comentario,
    type: j.tipo_de_tramite.tipo_de_tramite_descricao,
    title: "Sem título", // Judice does not provide a title
  }),

  toJudice: (domain) => {
    throw new Error("Not implemented")
  },
}
