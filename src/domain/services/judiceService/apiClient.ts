import { initContract, initClient } from "@ts-rest/core"
import { z } from "zod"

import { container } from "../../../dependencyManager.ts"

import { env } from "../../../utils/env.ts"

import * as dto from "./dto/index.ts"

const c = initContract()

const contract = c.router({
  listaAndamentos: {
    method: "POST",
    path: "/andamento",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
      limit: z.number().max(1000).optional(), // pagination
      cliente: z.array(z.number()).optional(), // filter by client id
      clientview: z.number().min(0).max(1).optional(), // 0 - não, 1 - sim
      area_id: z.number().optional(), // filter by area id
      date_ini: z.string().date().optional(), // filter by start date
      date_fim: z.string().date().optional(), // filter by end date
    }),
    responses: {
      200: dto.listaAndamentosResponseSchema,
    },
  },

  listaProcessos: {
    method: "POST",
    path: "/processo",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
      limit: z.number().optional(), // pagination
    }),
    responses: {
      200: dto.listaProcessosResponseSchema,
    },
  },

  consultaProcesso: {
    method: "POST",
    path: "/processo",
    body: z.object({
      action: z.literal("get"),
      id: z.number(), // the lawsuit id
    }),
    responses: {
      200: dto.consultaProcessoResponseSchema,
    },
  },

  listaProcessosVinculados: {
    method: "POST",
    path: "/processo",
    body: z.object({
      action: z.literal("listVinculados"),
      id: z.number(), // the lawsuit id
    }),
    responses: {
      200: dto.listaProcessosVinculadosResponseSchema,
    },
  },

  listaTodosProcessos: {
    method: "POST",
    path: "/processo",
    body: z.object({
      action: z.literal("listacnj"),
      id: z.number().optional(), // used for pagination
      limit: z.number().max(1000).optional(), // pagination
      forum_id: z.number().optional(), // filter by forum id
      subarea_id: z.number().optional(), // filter by subarea id
      comarca_id: z.number().optional(), // filter by comarca id
      situation: z.number().optional(), // filter by situation (1 - ativo, 0 - encerrado)
    }),
    responses: {
      200: dto.listaTodosProcessosResponseSchema,
    },
  },

  listaFases: {
    method: "POST",
    path: "/fase",
    body: z.object({
      action: z.literal("list"),
      id: z.number(),
    }),
    responses: {
      200: dto.listaFasesResponseSchema,
    },
  },

  listaTipoDeAcao: {
    method: "POST",
    path: "/tipo-de-acao",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaTipoDeAcaoResponseSchema,
    },
  },

  listaForuns: {
    method: "POST",
    path: "/forum",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaForunsResponseSchema,
    },
  },

  listaVaras: {
    method: "POST",
    path: "/vara",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaVarasResponseSchema,
    },
  },

  listTribunais: {
    method: "POST",
    path: "/tribunal",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listTribunaisResponseSchema,
    },
  },

  listaCidades: {
    method: "POST",
    path: "/cidade",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaCidadesResponseSchema,
    },
  },

  listaAreas: {
    method: "POST",
    path: "/area",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaAreasResponseSchema,
    },
  },

  listaTiposDeSistema: {
    method: "POST",
    path: "/tipo-de-sistema",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaTiposDeSistemaResponseSchema,
    },
  },

  listaClientes: {
    method: "POST",
    path: "/cliente",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaClientesResponseSchema,
    },
  },

  consultaCliente: {
    method: "POST",
    path: "/cliente",
    body: z.object({
      action: z.literal("get"),
      id: z.number(), // the client id
    }),
    responses: {
      200: dto.consultaClienteResponseSchema,
    },
  },

  listaPartes: {
    method: "POST",
    path: "/parte",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaPartesResponseSchema,
    },
  },

  listaPosicoes: {
    method: "POST",
    path: "/posicao",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaPosicoesResponseSchema,
    },
  },

  listaCartorios: {
    method: "POST",
    path: "/cartorio",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaCartoriosResponseSchema,
    },
  },

  listaGrupos: {
    method: "POST",
    path: "/grupo",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaGruposResponseSchema,
    },
  },

  listaPublicacoes: {
    method: "POST",
    path: "/publicacao",
    body: z.object({
      action: z.literal("list"),
      id: z.number().optional(), // used for pagination
    }),
    responses: {
      200: dto.listaPublicacoesResponseSchema,
    },
  },
})

export const apiClient = initClient(contract, {
  baseUrl: env.JUDICE_API_URL,
  baseHeaders: {
    token: env.JUDICE_API_TOKEN,
    tenant: env.JUDICE_API_TENANT,
  },
})

container.bind("JudiceApiClient").toConstantValue(apiClient)
