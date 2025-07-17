import { inject, injectable } from "inversify"

import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"

import type {
  Client,
  IndividualClient,
  CompanyClient,
} from "@/domain/entities/client.ts"

@injectable()
export class ClientService {
  constructor(
    @inject(ClientRepository) private clientRepository: ClientRepository,
  ) {}

  async getAllClients(): Promise<Client[]> {
    const dbClients = await this.clientRepository.findAllFull()

    // TODO: abstract this shit to a mapper
    return dbClients.map((c) => {
      if (c.type === "individual") {
        return {
          ...c,
          individual: {
            ...c.individual,
            phones: c.individual.phones || [],
            email: c.individual.email || undefined,
            birthDate: c.individual.birthDate || undefined,
            gender: c.individual.gender || undefined,
          },
        }
      }

      if (c.type === "legal_entity") {
        return { ...c, type: "company", company: c.legalEntity }
      }

      return c
    })
  }

  async getClientById(id: string): Promise<Client | null> {
    const client = await this.clientRepository.findById(id)

    if (!client) return null

    if (client.type === "individual") {
      return {
        type: "individual",
        id: client.id,
        individual: {
          ...client.individual,
          email: client.individual.email || undefined,
          phones: client.individual.phones || [],
          birthDate: client.individual.birthDate || undefined,
          gender: client.individual.gender || undefined,
        },
      }
    }

    if (client.type === "legal_entity") {
      return {
        type: "company",
        id: client.id,
        company: client.legalEntity,
      }
    }

    throw new Error("Unknown client type")
  }

  async getClientByCPF(cpf: string): Promise<IndividualClient | null> {
    const cleanCpf = cpf.replace(/\D/g, "")
    const client = await this.clientRepository.findByCPF(cleanCpf)

    if (!client) return null

    return {
      type: "individual",
      id: client.id,
      individual: {
        ...client.individual,
        phones: client.individual.phones || [],
        email: client.individual.email || undefined,
        birthDate: client.individual.birthDate || undefined,
        gender: client.individual.gender || undefined,
      },
    }
  }

  async getClientByCNPJ(cnpj: string): Promise<CompanyClient | null> {
    const cleanCnpj = cnpj.replace(/\D/g, "")
    const client = await this.clientRepository.findByCNPJ(cleanCnpj)

    if (!client) return null

    return {
      type: "company",
      id: client.id,
      company: client.legalEntity,
    }
  }
}
