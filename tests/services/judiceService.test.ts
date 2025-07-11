import { describe, it, before } from "node:test"
import assert from "node:assert"

import { apiClient } from "@/persistance/external/judice/apiClient.ts"
import * as dto from "@/persistance/external/judice/dto/index.ts"

describe("Judice API Client", () => {
  let client: typeof apiClient

  before(() => {
    client = apiClient
  })

  it("should be defined", () => {
    assert.ok(client)
  })

  it("should list case updates", { only: false }, async () => {
    const res = await client.listaAndamentos({
      body: { action: "list", date_ini: "2025-04-05", date_fim: "2025-04-05" },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaAndamentosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list lawsuits", { only: false }, async () => {
    const res = await client.listaProcessos({
      body: { action: "list", limit: 200 },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaProcessosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.success, true)
  })

  it("should get lawsuit details", { only: false }, async () => {
    const res = await client.consultaProcesso({
      body: { action: "get", id: 552676 },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.consultaProcessoResponseSchema.parse(res.body)
    assert.strictEqual(parsed.success, true)
  })

  it("should list linked lawsuits", { only: false }, async () => {
    const res = await client.listaProcessosVinculados({
      body: { action: "listVinculados" },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaProcessosVinculadosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.success, true)
  })

  it("should list all lawsuits", { only: false }, async () => {
    const res = await client.listaTodosProcessos({
      body: { action: "listacnj", limit: 100 },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaTodosProcessosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.success, true)
  })

  it("should list action types", { only: false }, async () => {
    const res = await client.listaTipoDeAcao({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaTipoDeAcaoResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list forums", { only: false }, async () => {
    const res = await client.listaForuns({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaForunsResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list courts", { only: false }, async () => {
    const res = await client.listTribunais({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listTribunaisResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list judicial divisions", { only: false }, async () => {
    const res = await client.listaVaras({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaVarasResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list cities", { only: false }, async () => {
    const res = await client.listaCidades({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaCidadesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list legal areas", { only: false }, async () => {
    const res = await client.listaAreas({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaAreasResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list system types", { only: false }, async () => {
    const res = await client.listaTiposDeSistema({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaTiposDeSistemaResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list clients", { only: false }, async () => {
    const res = await client.listaClientes({
      body: { action: "list", id: 13000 },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaClientesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.success, true)
  })

  it("should list parties", { only: false }, async () => {
    const res = await client.listaPartes({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaPartesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.success, 1)
  })

  it("should list positions", { only: false }, async () => {
    const res = await client.listaPosicoes({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaPosicoesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list notary offices", { only: false }, async () => {
    const res = await client.listaCartorios({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaCartoriosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list groups", { only: false }, async () => {
    const res = await client.listaGrupos({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaGruposResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list publications", { only: false }, async () => {
    const res = await client.listaPublicacoes({
      body: { action: "list", data_inclusao: "2025-06-20" },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaPublicacoesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })
})