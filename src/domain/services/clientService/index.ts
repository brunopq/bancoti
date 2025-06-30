import { inject, injectable } from "inversify"

import { ClientRepository } from "../../../persistance/repositories/ClientRepository.ts"

import type { Client, Individual, Company } from "../../entities/client.ts"

@injectable()
export class ClientService {
  constructor(
    @inject(ClientRepository) private clientRepository: ClientRepository,
  ) {}

  async getAllClients(): Promise<Client[]> {
    // Implement fetching all clients
    return []
  }

  async getClientById(id: string): Promise<Client | null> {
    const client = await this.clientRepository.findById(id)

    if (!client) return null

    if (client.type === "individual") {
      return {
        type: "individual",
        id: client.id,
        name: client.name,
        cpf: client.cpf,
        email: client.email || undefined,
        phones: client.phones || [],
        birthDate: client.birthDate || undefined,
        gender: client.gender || undefined,
      }
    }

    if (client.type === "legal_entity") {
      return {
        type: "company",
        id: client.id,
        corporateName: client.corporateName,
        cnpj: client.cnpj,
      }
    }

    throw new Error("Unknown client type")

  }

  async getClientByCPF(cpf: string): Promise<Individual | null> {
    const client = await this.clientRepository.findByCPF(cpf)

    if (!client) return null

    return {
      type: "individual",
      id: client.id,
      name: client.name,
      cpf: client.cpf,
      email: client.email || undefined,
      phones: client.phones || [],
      birthDate: client.birthDate || undefined,
    }
  }

  async getClientByCNPJ(cnpj: string): Promise<Company | null> {
    const client = await this.clientRepository.findByCNPJ(cnpj)

    if (!client) return null

    return {
      type: "company",
      id: client.id,
      corporateName: client.corporateName,
      cnpj: client.cnpj,
    }
  }
}
