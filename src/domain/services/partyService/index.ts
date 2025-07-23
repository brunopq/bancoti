import { inject, injectable } from "inversify"

import { PartyRepository } from "@/persistance/repositories/PartyRepository.ts"

import type {
  Party,
  IndividualParty,
  CompanyParty,
} from "@/domain/entities/party.ts"

@injectable()
export class PartyService {
  constructor(
    @inject(PartyRepository)
    private readonly partyRepository: PartyRepository,
  ) {}

  async findForLawsuit(lawsuitId: string): Promise<Party[]> {
    const parties = await this.partyRepository.findByLawsuitId(lawsuitId)

    const mappedParties: Party[] = []

    for (const party of parties) {
      if (party.parties.type === "individual") {
        const individual = party.individuals

        if (!individual) {
          console.log(`Individual not found for party ${party.parties.id}`)
          continue
        }

        const individualParty: IndividualParty = {
          id: party.parties.id,
          createdAt: party.parties.createdAt,
          updatedAt: party.parties.updatedAt,
          lawsuitId: party.parties.lawsuitId,
          role: party.parties.role,
          type: "individual",
          individual: {
            id: individual.id,
            name: individual.name,
            cpf: individual.cpf,
            email: individual.email || undefined,
            phones: individual.phones || [],
            birthDate: individual.birthDate || undefined,
            gender: individual.gender || undefined,
          },
        }
        mappedParties.push(individualParty)
      } else if (party.parties.type === "legal_entity") {
        const legalEntity = party.legal_entities

        if (!legalEntity) {
          console.log(`Legal entity not found for party ${party.parties.id}`)
          continue
        }

        const companyParty: CompanyParty = {
          id: party.parties.id,
          createdAt: party.parties.createdAt,
          updatedAt: party.parties.updatedAt,
          lawsuitId: party.parties.lawsuitId,
          role: party.parties.role,
          type: "company",
          company: {
            id: legalEntity.id,
            corporateName: legalEntity.corporateName,
            cnpj: legalEntity.cnpj,
          },
        }
        mappedParties.push(companyParty)
      }
    }

    return mappedParties
  }
}
