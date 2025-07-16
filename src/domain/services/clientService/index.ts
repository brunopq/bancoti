import { inject, injectable } from "inversify"

import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"

import type { Client, Individual, Company } from "@/domain/entities/client.ts"

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
          phones: c.phones || [],
          email: c.email || undefined,
          birthDate: c.birthDate || undefined,
          gender: c.gender || undefined,
        }
      }

      if (c.type === "legal_entity") {
        return { ...c, type: "company" }
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
    const cleanCpf = cpf.replace(/\D/g, "")
    const client = await this.clientRepository.findByCPF(cleanCpf)

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
    const cleanCnpj = cnpj.replace(/\D/g, "")
    const client = await this.clientRepository.findByCNPJ(cleanCnpj)

    if (!client) return null

    return {
      type: "company",
      id: client.id,
      corporateName: client.corporateName,
      cnpj: client.cnpj,
    }
  }
}
