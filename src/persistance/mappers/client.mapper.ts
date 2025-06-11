import type { Client } from "../../domain/entities/client.ts"

import type { client } from "../models/client.ts"
import type { legalEntity } from "../models/legalEntity.ts"
import type { individual } from "../models/individual.ts"

import type { Mapper } from "./base.mapper.ts"

type Meta = "createdAt" | "updatedAt"

type ClientModel = Omit<typeof client.$inferSelect, "entityId" | Meta>
type LegalEntityModel = Omit<typeof legalEntity.$inferSelect, "id" | Meta>
type IndividualModel = Omit<typeof individual.$inferSelect, "id" | Meta>

type Model = { client: ClientModel } & (
  | { legalEntity: LegalEntityModel }
  | { individual: IndividualModel }
)

export const clientMapper: Mapper<Client, Model> = {
  toDomain: (model: Model): Client => {
    if ("legalEntity" in model) {
      return {
        id: model.client.id,
        type: "company",
        corporateName: model.legalEntity.corporateName,
        cnpj: model.legalEntity.cnpj,
      }
    }
    return {
      id: model.client.id,
      type: "individual",
      name: model.individual.name,
      cpf: model.individual.cpf,
      email: model.individual.email || undefined,
      phones: model.individual.phones || [],
      // address: model.individual.,
      birthDate: model.individual.birthDate || undefined,
      gender: model.individual.gender || undefined,
    }
  },

  toPersistance: (entity: Client): Model => {
    if (entity.type === "company") {
      return {
        client: {
          id: entity.id,
          type: "legal_entity",
        },
        legalEntity: {
          corporateName: entity.corporateName,
          cnpj: entity.cnpj,
        },
      }
    }
    return {
      client: {
        id: entity.id,
        type: "individual",
      },
      individual: {
        name: entity.name,
        cpf: entity.cpf,
        email: entity.email || null,
        phones: entity.phones || [],
        birthDate: entity.birthDate || null,
        gender: entity.gender || null,
      },
    }
  },
}
