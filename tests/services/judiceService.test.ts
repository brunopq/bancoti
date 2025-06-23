import { describe, it, before } from "node:test"
import assert from "node:assert"

import { apiClient } from "../../src/domain/services/judiceService/apiClient.ts"
import * as dto from "../../src/domain/services/judiceService/dto/index.ts"

describe("Judice API Client", () => {
  let client: typeof apiClient

  before(() => {
    client = apiClient
  })

  it("should be defined", () => {
    assert.ok(client)
  })

  it("should list case updates", async () => {
    const res = await client.listaAndamentos({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaAndamentosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list lawsuits", async () => {
    const res = await client.listaProcessos({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaProcessosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should get lawsuit details", async () => {
    const res = await client.consultaProcesso({
      body: { action: "get", id: 1 },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.consultaProcessoResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list linked lawsuits", async () => {
    const res = await client.listaProcessosVinculados({
      body: { action: "listVinculados", id: 1 },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaProcessosVinculadosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list all lawsuits", async () => {
    const res = await client.listaTodosProcessos({
      body: { action: "listacnj" },
    })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaTodosProcessosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list phases", async () => {
    const res = await client.listaFases({ body: { action: "list", id: 1 } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaFasesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list action types", async () => {
    const res = await client.listaTipoDeAcao({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaTipoDeAcaoResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list forums", async () => {
    const res = await client.listaForuns({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaForunsResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list courts", async () => {
    const res = await client.listTribunais({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listTribunaisResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list judicial divisions", async () => {
    const res = await client.listaVaras({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaVarasResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list cities", async () => {
    const res = await client.listaCidades({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaCidadesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list legal areas", async () => {
    const res = await client.listaAreas({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaAreasResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list system types", async () => {
    const res = await client.listaTiposDeSistema({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaTiposDeSistemaResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list clients", async () => {
    const res = await client.listaClientes({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaClientesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should get client details", async () => {
    const res = await client.consultaCliente({ body: { action: "get", id: 1 } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.consultaClienteResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list parties", async () => {
    const res = await client.listaPartes({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaPartesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list positions", async () => {
    const res = await client.listaPosicoes({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaPosicoesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list notary offices", async () => {
    const res = await client.listaCartorios({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaCartoriosResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list groups", async () => {
    const res = await client.listaGrupos({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaGruposResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })

  it("should list publications", async () => {
    const res = await client.listaPublicacoes({ body: { action: "list" } })
    assert.strictEqual(res.status, 200)
    const parsed = dto.listaPublicacoesResponseSchema.parse(res.body)
    assert.strictEqual(parsed.retorno.success, true)
  })
})
