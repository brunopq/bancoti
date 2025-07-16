import { injectable, inject } from "inversify"

import { LoggerFactory } from "@/utils/LoggerProvider.ts"

import { JudiceService } from "@/persistance/external/judice/judiceService.ts"
import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"
import { IndividualRepository } from "@/persistance/repositories/IndividualRepository.ts"
import { LegalEntityRepository } from "@/persistance/repositories/LegalEntityRepository.ts"
import "@/persistance/db.ts" // Ensure DB is initialized


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
    private readonly logger = LoggerFactory("JudiceClientSyncService"),
  ) {}

  private getDocumentType(document: string): "cpf" | "cnpj" | undefined {
    return (
      {
        11: "cpf",
        14: "cnpj",
      } as const
    )[document.replaceAll(/\D/g, "").length]
  }

  private async syncClientByJid(
    jid: number,
    logger = this.logger,
  ): Promise<void> {
    logger.info({ jid }, "Syncing client by JID")
    const client = await this.judiceService.getClientById(jid)
    logger.info({ client }, "Fetched client from Judice")

    if (!client) {
      // should not happen btw
      logger.warn({ jid }, "Client not found in Judice, skipping sync.")
      return
    }

    if (!client.cpf_cnpj) {
      logger.warn({ jid: client.id }, "Client has no CPF/CNPJ, skipping sync.")
      return
    }

    const documentType = this.getDocumentType(client.cpf_cnpj)

    if (!documentType) {
      logger.warn(
        { jid: client.id, cpf_cnpj: client.cpf_cnpj },
        "Client has invalid CPF/CNPJ, skipping sync.",
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
        phones: [client.fone, client.celular, client.comercial].filter(
          (p) => typeof p === "string",
        ),
        birthDate: client.nascimento ? new Date(client.nascimento) : undefined,
      })

      entityId = individual.id
      entityType = "individual"

      logger.info({ individualId: entityId, jid }, "Synced individual client")
    } else {
      const legalEntity = await this.legalEntityRepository.sync({
        cnpj: client.cpf_cnpj,
        corporateName: client.alcunha_nomefantasia || client.nome,
      })

      entityId = legalEntity.id
      entityType = "legal_entity"

      logger.info(
        { legalEntityId: entityId, jid },
        "Synced legal entity client",
      )
    }

    logger.info(
      { jid: client.id, entityId, entityType },
      "Syncing client to database",
    )

    let dbClient = await this.clientRepository.findByEntity(entityId)

    if (!dbClient) {
      dbClient = await this.clientRepository.create({
        entityId,
        type: entityType,
        jid,
      })
      logger.info({ dbClient }, "Created new client in database")
    }
  }

  async sync(): Promise<void> {
    const syncId = new Date().toISOString()
    const syncLogger = this.logger.child({ syncId })

    syncLogger.info({ event: "Sync start" }, "Syncing clients from Judice...")

    const lastSyncClient = await this.clientRepository.findAll({
      limit: 1,
      orderBy: { jid: "desc" },
    })

    const lastId = lastSyncClient[0]?.jid || 0

    syncLogger.info({ lastId }, "Starting sync from last JID")

    const clients = await this.judiceService.listClients({
      startFrom: lastId,
    })

    syncLogger.info({ count: clients.length }, "Fetched clients from Judice")

    await Promise.allSettled(
      clients.map((c) => this.syncClientByJid(c.id, syncLogger)),
    )
  }
}
