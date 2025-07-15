import { beforeEach, describe, it } from "node:test"
import assert from "node:assert"
import { createStubInstance } from "sinon"

import { LoggerFactory } from "@/utils/LoggerProvider.ts"
import { JudiceClientSyncService } from "@/domain/services/judiceClientSyncService/index.ts"
import { JudiceService } from "@/persistance/external/judice/judiceService.ts"
import { ClientRepository } from "@/persistance/repositories/ClientRepository.ts"
import { IndividualRepository } from "@/persistance/repositories/IndividualRepository.ts"
import { LegalEntityRepository } from "@/persistance/repositories/LegalEntityRepository.ts"

describe("JudiceSyncClient", (t) => {
  const logger = LoggerFactory("JudiceSyncClientTest")
  const judiceService = createStubInstance(JudiceService)
  const clientRepository = createStubInstance(ClientRepository)
  const individualRepository = createStubInstance(IndividualRepository)
  const legalEntityRepository = createStubInstance(LegalEntityRepository)

  const judiceClientSyncService = new JudiceClientSyncService(
    judiceService,
    clientRepository,
    individualRepository,
    legalEntityRepository,
    logger,
  )

  beforeEach(() => {
    judiceService.listClients.resetHistory()
    judiceService.getClientById.resetHistory()
    clientRepository.findByEntity.resetHistory()
    clientRepository.create.resetHistory()
    individualRepository.sync.resetHistory()
    legalEntityRepository.sync.resetHistory()
  })

  it("should be defined", (i) => {
    assert(judiceClientSyncService)
  })

  it("should handle individuals", async () => {
    judiceService.listClients.resolves([
      {
        id: 1,
        cpf_cnpj: "12345678901",
        nome: "João da Silva",
        cidade: "pinamonhangaba",
      },
    ])

    judiceService.getClientById.resolves({
      id: 1,
      cpf_cnpj: "12345678901",
      nome: "João da Silva",
      cidade: "pinamonhangaba",
      email: "joaosilva@email.com",
      bairro: "Centro",
      cep: "12345678",
      complemento: "Apto 101",
      nascimento: "1990-01-01",
      endereco: "Rua A, 123",
      celular: "9876543210",
      comercial: "1122334455",
      fone: "1234567890",
      grupos: [],
      nacionalidade: "Brasileiro",
      profissao: "Engenheiro",
      numero: "2222",
      uf: 2,
      segment: "",
      tipo: "",
      alcunha_nomefantasia: "",
      aposentado: "false",
    })

    individualRepository.sync.resolves({
      id: "individual-1",
      // biome-ignore lint/suspicious/noExplicitAny: just for test sorry
    } as any)

    clientRepository.findByEntity.resolves(null)
    clientRepository.create.resolves({
      id: "client-1",
      entityId: "individual-1",
      type: "individual",
      createdAt: new Date(),
      updatedAt: new Date(),
      jid: 1,
    })

    await judiceClientSyncService.sync()

    assert(judiceService.listClients.calledOnce)
    assert(judiceService.getClientById.calledWith(1))
    assert(individualRepository.sync.calledOnce)
    assert(clientRepository.findByEntity.calledWith("individual-1"))
    assert(clientRepository.create.calledOnce)
  })

  it("should handle legal entities", async () => {
    judiceService.listClients.resolves([
      {
        id: 2,
        cpf_cnpj: "12345678000195",
        nome: "Empresa XYZ",
        cidade: "São Paulo",
      },
    ])

    judiceService.getClientById.resolves({
      id: 2,
      cpf_cnpj: "12345678000195",
      alcunha_nomefantasia: "Empresa XYZ",
      email: "empresa@email.com",
      bairro: "Centro",
      cep: "87654321",
      complemento: "Sala 202",
      endereco: "Avenida B, 456",
      celular: "9876543210",
      comercial: "1122334455",
      fone: "1234567890",
      grupos: [],
      nacionalidade: "",
      profissao: "",
      numero: "3333",
      uf: 2,
      segment: "",
      tipo: "",
      aposentado: "",
      cidade: "São Paulo",
      nome: "",
      ie: "",
      nascimento: "",
    })

    legalEntityRepository.sync.resolves({
      id: "legal-entity-1",
      // biome-ignore lint/suspicious/noExplicitAny: just for test sorry
    } as any)

    clientRepository.findByEntity.resolves(null)
    clientRepository.create.resolves({
      id: "client-2",
      entityId: "legal-entity-1",
      type: "legal_entity",
      createdAt: new Date(),
      updatedAt: new Date(),
      jid: 2,
    })

    await judiceClientSyncService.sync()

    assert(judiceService.listClients.calledOnce)
    assert(judiceService.getClientById.calledWith(2))
    assert(legalEntityRepository.sync.calledOnce)
    assert(clientRepository.findByEntity.calledWith("legal-entity-1"))
    assert(clientRepository.create.calledOnce)
  })
})
