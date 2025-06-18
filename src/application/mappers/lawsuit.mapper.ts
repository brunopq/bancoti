import type { Lawsuit } from "../../domain/entities/lawsuit.ts"
import { type LawsuitDTO, lawsuitDTO } from "../dto/lawsuitDTO.ts"

import type { Mapper } from "./base.mapper.ts"

export const lawsuitMapper: Mapper<Lawsuit, LawsuitDTO> = {
  toDomain: (dto) => ({
    id: dto.id,
    area: dto.area,
    cnj: dto.cnj,
    createdAt: new Date(dto.createdAt),
    updatedAt: new Date(dto.updatedAt),
    status: dto.status,
    movements: [],
  }),
  toDTO: (entity) => ({
    id: entity.id,
    area: entity.area,
    cnj: entity.cnj,
    createdAt: entity.createdAt.toISOString(),
    updatedAt: entity.updatedAt.toISOString(),
    status: entity.status,
    movements: [],
  }),
}
