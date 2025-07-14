import { injectable, inject } from "inversify"
import { pino } from "pino"

import { JudiceService } from "@/persistance/external/judice/judiceService.ts"
import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"
import { IndividualRepository } from "@/persistance/repositories/IndividualRepository.ts"
import { LegalEntityRepository } from "@/persistance/repositories/LegalEntityRepository.ts"

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  base: undefined, // Removes pid and hostname
  transport: {
    targets: [
      {
        target: "pino-pretty",
        level: "info",
        options: { colorize: true },
      },
      {
        target: "pino-loki",
        level: "info",
        options: {
          batching: true,
          interval: 5,
          host: "http://localhost:3100", // Your Loki server
          labels: { app: "bancoti", component: "judice-sync" },
        },
      },
    ],
  },
})

@injectable()
export class JudiceClientSyncService {
  constructor(
    @inject(JudiceService)
    private readonly judiceService: JudiceService,
    @inject(ClientRepository)
    private readonly clientRepository: ClientRepository,
    @inject(IndividualRepository)
    private readonly individualRepository: IndividualRepository,
    @inject(LegalEntityRepository)
    private readonly legalEntityRepository: LegalEntityRepository,
  ) {}

  private getDocumentType(document: string): "cpf" | "cnpj" | undefined {
    return (
      {
        11: "cpf",
        14: "cnpj",
      } as const
    )[document.replaceAll(/\D/g, "").length]
  }

  private async syncClientByJid(jid: number): Promise<void> {
    const client = await this.judiceService.getClientById(jid)

    if (!client) {
      // should not happen btw
      console.warn(`Client with ID ${jid} not found in Judice, skipping.`)
      return
    }

    if (!client.cpf_cnpj) {
      console.warn(`Client with ID ${client.id} has no CPF/CNPJ, skipping.`)
      return
    }

    const documentType = this.getDocumentType(client.cpf_cnpj)

    if (!documentType) {
      console.warn(
        `Client with ID ${client.id} has invalid CPF/CNPJ, skipping.`,
      )
      return
    }

    let entityId: string | undefined
    let entityType: "individual" | "legal_entity"

    if (this.getDocumentType(client.cpf_cnpj) === "cpf") {
      const individual = await this.individualRepository.sync({
        name: client.nome,
        cpf: client.cpf_cnpj,
        email: client.email,
        phones: [client.fone, client.celular, client.comercial].filter(Boolean),
        birthDate: client.nascimento ? new Date(client.nascimento) : undefined,
      })

      entityId = individual.id
      entityType = "individual"
    } else {
      const legalEntity = await this.legalEntityRepository.sync({
        cnpj: client.cpf_cnpj,
        corporateName: client.alcunha_nomefantasia,
      })

      entityId = legalEntity.id
      entityType = "legal_entity"
    }

    let dbClient = await this.clientRepository.findByEntity(entityId)

    if (!dbClient) {
      dbClient = await this.clientRepository.create({
        entityId,
        type: entityType,
        jid,
      })
    }

    console.log(`Created client ${dbClient.id} (${entityType})`)
  }

  async sync(): Promise<void> {
    const syncId = new Date().toISOString()
    const syncLogger = logger.child({ syncId })
    syncLogger.info({ event: "Sync start" }, "Syncing clients from Judice...")
    const clients = await this.judiceService.listClients()
    syncLogger.info({ count: clients.length }, "Fetched clients from Judice")

    for (const client of clients) {
      this.syncClientByJid(client.id)
    }
  }
}
