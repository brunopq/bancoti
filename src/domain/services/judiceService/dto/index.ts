import { z } from "zod"

const makeResponseSchema = <T extends z.ZodTypeAny>(objectSchema: T) =>
  z.object({
    retorno: z.object({
      total: z.number(),
      success: z.boolean(),
      message: z.string(),
      object: objectSchema,
    }),
  })

const wrongResponseSchema = <T extends z.ZodTypeAny>(objectSchema: T) =>
  z.object({
    retorno: z.object({
      object: objectSchema,
    }),
    total: z.number(),
    success: z.boolean(),
    message: z.string(),
  })

const wrongWithIntResponseSchema = <T extends z.ZodTypeAny>(objectSchema: T) =>
  z.object({
    retorno: z.object({
      object: objectSchema,
    }),
    total: z.number(),
    success: z.number(),
    message: z.string(),
  })



export const baseResponseSchema = makeResponseSchema(z.any())

export const listaProcessosResponseSchema = wrongResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      numero: z.string(),
      cnj: z.string(),
      fisicoeletronico: z.string(),
      pasta_do_cliente: z.string(),
      situacao: z.number(), // 1 - ativo, 0 - encerrado
      comarca: z.object({
        id: z.number(),
        nome: z.string(),
        uf: z.string(),
      }),
      cartorio: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      tipo_de_justica: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      forum: z.object({
        id: z.number().nullable(),
        nome: z.string().nullable(),
      }),
      cliente: z.object({
        id: z.number(),
        nome: z.string(),
        posicao: z.object({
          id: z.number(),
          nome: z.string(),
        }),
      }),
      sistema: z.object({
        id: z.number().nullable(),
        nome: z.string().nullable(),
      }),
      unidade: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      fase_processual: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      partes: z.array(
        z.object({
          id: z.number(),
          nome: z.string(),
          posicao: z.object({
            id: z.number(),
            nome: z.string(),
          }),
        }),
      ),
    }),
  ),
)

export const consultaProcessoResponseSchema = wrongResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      numero: z.string(),
      cnj: z.string(),
      fisicoeletronico: z.string(),
      pasta_do_cliente: z.string(),
      situacao: z.number(), // 1 - ativo, 0 - encerrado
      responsavel: z.object({
        id: z.number(),
        nome: z.string(),
        email: z.string(),
      }),
      comarca: z.object({
        id: z.number(),
        nome: z.string(),
        uf: z.string(),
      }),
      cartorio: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      tipo_de_justica: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      forum: z.object({
        id: z.number().nullable(),
        nome: z.string().nullable(),
      }),
      cliente: z.object({
        id: z.number(),
        nome: z.string(),
        posicao: z.object({
          id: z.number(),
          nome: z.string(),
          polo: z.object({
            id: z.number(),
            nome: z.string(),
          }),
        }),
      }),
      sistema: z.object({
        id: z.number().nullable(),
        nome: z.string().nullable(),
      }),
      unidade: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      fase_processual: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      area: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      tipo_de_acao: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      valor: z.object({
        causa: z.coerce.number().nullable(), // decimal (!!!)
        interesse: z.coerce.number().nullable(), // decimal (!!!)
        contingencia: z.coerce.number().nullable(), // decimal (!!!)
        condenacao: z.coerce.number().nullable(), // decimal (!!!)
        sentenca: z.coerce.number().nullable(), // decimal (!!!)
        acordao: z.coerce.number().nullable(), // decimal (!!!)
      }),
      partes: z.array(
        z.object({
          id: z.number(),
          nome: z.string(),
          posicao: z.object({
            id: z.number(),
            nome: z.string(),
            polo: z.object({
              id: z.number(),
              nome: z.string(),
            }),
          }),
        }),
      ),
      processos_vinculados: z.array(
        z.object({
          id: z.number(),
          numero: z.string(),
          cnj: z.string(),
          tipo_de_acao: z.object({
            id: z.number(),
            nome: z.string(),
          }),
        }),
      ),
    }),
  ),
)

export const listaAndamentosResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      comentario: z.string(),
      dta: z.string(), // data do andamento, não tenho ideia do formato
      lastupdate: z.string(), // data da última atualização
      numero: z.string(),
      cnj: z.string(),
      area: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      estado: z.string(),
      comarca: z.string(),
      cartorio: z.string(),
      forum: z.string(),
      tipo_de_acao: z.string(),
      fase_processual: z.string(),
      data_ajuizamento: z.string(), // data em formato desconhecido
      data_cadastramento: z.string(),
      valor_da_causa: z.string(), // não é decimal
      tipo_de_tramite: z.object({
        tipo_de_tramite_id: z.number(),
        tipo_de_tramite_descricao: z.string(),
      }),
      process_id: z.number(),
      cliente: z.array(
        z.object({
          id: z.number(),
          nome: z.string(),
        }),
      ),
      participante: z.array(
        z.object({
          id: z.number(),
          nome: z.string(),
          cpf: z.string().nullable(),
        }),
      ),
    }),
  ),
)

export const listaProcessosVinculadosResponseSchema = wrongResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      processos_vinculados: z.array(
        z.object({
          id: z.number(),
          numero: z.string(),
          cnj: z.string(),
          tipo_de_acao: z.object({
            id: z.number(),
            nome: z.string(),
          }),
        }),
      ),
    }),
  ),
)

export const listaTodosProcessosResponseSchema = wrongResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      numero: z.string(),
      cnj: z.string(),
      situacao: z.number(), // 1 - ativo, 0 - encerrado
      monitorado: z.boolean(),
      recursos: z.array(
        z.object({
          id: z.number(),
          numero: z.string(),
        }),
      ),
      comarca: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      forum: z.object({
        id: z.number().nullable(),
        nome: z.string().nullable(),
      }),
      tipo_de_justica: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      sistema: z.object({
        id: z.number().nullable(),
        nome: z.string().nullable(),
      }),
      cliente: z.object({
        id: z.number(),
        nome: z.string(),
      }),
    }),
  ),
)

export const listaFasesResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaTipoDeAcaoResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaForunsResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
      comarca: z.object({
        id: z.number(),
        nome: z.string(),
      }),
    }),
  ),
)

export const listaVarasResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listTribunaisResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaCidadesResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
      uf: z.string(),
    }),
  ),
)

export const listaAreasResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaTiposDeSistemaResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaClientesResponseSchema = wrongResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
      cpf_cnpj: z.string().nullable(),
      cidade: z.string().nullable(),
    }),
  ),
)

export const consultaClienteResponseSchema = makeResponseSchema(
  z.object({
    id: z.number(),
    tipo: z.string(), // Pessoa física ou jurídica
    nome: z.string(),
    alcunha_nomefantasia: z.string(),
    grupos: z.array(z.any()), // não documentado
    segment: z.string(),
    cpf_cnpj: z.string(),
    rg: z.string().optional(),
    ie: z.string().optional(),
    nascimento: z.string().optional(), // data de nascimento
    cep: z.string(),
    endereco: z.string(),
    numero: z.string(),
    complemento: z.string().optional(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string(),
    nacionalidade: z.string(),
    profissao: z.string(),
    aposentado: z.string(), // string????
    email: z.string(),
    fone: z.string(),
    comercial: z.string(),
    celular: z.string(),
  }),
)

export const listaPartesResponseSchema = wrongWithIntResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
      cpf_cnpj: z.string().nullable(),
      cidade: z.string().nullable(),
      uf: z.string().nullable(),
    }),
  ),
)

export const listaPosicoesResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaCartoriosResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaGruposResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
    }),
  ),
)

export const listaPublicacoesResponseSchema = makeResponseSchema(
  z.array(
    z.object({
      id: z.number(),
      data_inclusao: z.string(), // data em formato desconhecido
      data_publicacao: z.string(), // data em formato desconhecido
      processo: z.object({
        id: z.number(),
        numero: z.string(),
        cnj: z.string(),
        area: z.object({
          id: z.number(),
          nome: z.string(),
        }),
        comarca: z.object({
          id: z.number(),
          nome: z.string(),
        }),
        forum: z.object({
          id: z.number().nullable(),
          nome: z.string().nullable(),
        }),
        cartorio: z.object({
          id: z.number(),
          nome: z.string(),
        }),
        tipo_acao: z.object({
          id: z.number(),
          nome: z.string(),
        }),
        fase: z.object({
          id: z.number(),
          nome: z.string(),
        }),
        pasta_cliente: z.string().nullish(),
        cliente: z.object({
          id: z.number(),
          nome: z.string(),
          posicao: z.object({
            id: z.number(),
            nome: z.string(),
            polo: z.object({
              id: z.number(),
              nome: z.string(),
            }),
          }),
        }),
      }),
    }),
  ),
)
