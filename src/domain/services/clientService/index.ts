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

    return client
  }

  async getClientByCPF(cpf: string): Promise<Individual | null> {
    const client = await this.clientRepository.findByCPF(cpf)

    return client
  }

  async getClientByCNPJ(cnpj: string): Promise<Company | null> {
    const client = await this.clientRepository.findByCNPJ(cnpj)

    return client
  }
}
