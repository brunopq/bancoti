import { z, type ZodSchema } from "zod"

export const paginationQuery = z.object({
  page: z.number().optional(),
  page_size: z.number().optional(),
  orderField: z.string().optional(),
  orderDirection: z.enum(["asc", "desc"]).optional(),
})

export const paginatedResponse = <T extends ZodSchema>(schema: T) =>
  z.object({
    page: z.number(),
    page_count: z.number(),
    all_count: z.number(),
    all_pages_count: z.number(),
    page_data: z.array(schema),
  })

export const searchTypeSchema = z.enum([
  "cpf",
  "cnpj",
  "oab",
  "lawsuit_cnj",
  "lawsuit_id",
])
export const responseTypeSchema = z.enum([
  "lawsuit",
  "parties",
  "attachments",
  "steps",
  "lawsuits",
])

export const requestStatusSchema = z.enum([
  "pending",
  "started",
  "cancelling",
  "cancelled",
  "completed",
])

export const trackingStatusSchema = z.enum([
  "created",
  "updating",
  "updated",
  "paused",
  "deleted",
])

export const searchFields = z.object({
  search_type: searchTypeSchema,
  search_key: z.string(),
  response_type: responseTypeSchema.optional(),
  cache_ttl_in_days: z.number().optional(),
  search_params: z
    .object({
      lawsuit_instance: z.number().optional(),
      masked_response: z.boolean().optional(),
    })
    .optional(),
})

//

export const createRequestPayload = z.object({
  search: searchFields,
})

const juditPartySchemaV1 = z.object({
  name: z.string(),
  side: z.string(), // Known values: "Active", "Passive"
  person_type: z.string(), // Known values: "Autor", "Réu"
  entity_type: z.string().optional(),
  document: z.string().optional(),
  document_type: z.string().optional(), // Known values: "cpf", "CNPJ"
  lawyers: z
    .array(
      z.object({
        name: z.string(),
        document: z.string().optional(),
        document_type: z.string().optional(), // Known values: "cpf", "CNPJ"
        licence: z.string().optional(), // OAB licence number
      }),
    )
    .optional(),
  tags: z.record(z.string(), z.any()).optional(),
})

const juditPartySchemaV2 = z.object({
  side: z.string(), // Known values: "Active", "Passive"
  name: z.string(),
  main_document: z.string().optional(),
  person_type: z.string().optional(), // Known values: "EXEQUENTE", "EXECUTADO"
  entity_type: z.string().optional(), // Known values: "company"
  documents: z.array(
    z.object({
      document: z.string(),
      document_type: z.string().optional(), // Known values: "cpf", "CNPJ"
    }),
  ),
  lawyers: z.array(
    z.object({
      name: z.string(),
      main_document: z.string(),
      documents: z.array(
        z.object({
          document: z.string(),
          document_type: z.string(), // Known values: "cpf", "CNPJ"
        }),
      ),
    }),
  ),
  tags: z.record(z.string(), z.any()).optional(),
})

const juditPartySchema = juditPartySchemaV1

export type JuditParty = z.infer<typeof juditPartySchema>



export const okCreateRequestResponse = z.object({
  request_id: z.string(),
  search: searchFields,
  with_attachments: z.boolean(),
  callback_url: z.string().optional(),
  origin: z.string(),
  origin_id: z.string().optional(),
  user_id: z.string().optional(),
  status: requestStatusSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  tags: z.record(z.string(), z.any()).optional(),
})

export const okCheckRequestResponse = z.object({
  request_id: z.string(),
  search: searchFields,
  with_attachments: z.boolean(),
  callback_url: z.string().optional(),
  origin: z.string(),
  origin_id: z.string().optional(),
  user_id: z.string().optional(),
  status: requestStatusSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  tags: z.record(z.string(), z.any()).optional(),
})

export const listResponsesQuery = paginationQuery.extend({
  response_type: responseTypeSchema.optional(),
  request_id: z.string().optional(),
  request_status: requestStatusSchema.optional(),
  created_at_gte: z.string().datetime().optional(),
  created_at_lte: z.string().datetime().optional(),
  request_created_at_gte: z.string().datetime().optional(),
  request_created_at_lte: z.string().datetime().optional(),
})

export const okListResponsesResponse = paginatedResponse(
  z.object({
    request_status: z.string(),
    request_id: z.string(),
    response_id: z.string(),
    origin: z.string(),
    origin_id: z.string().optional(),
    response_type: z.string(),
    response_data: z.object({
      code: z.string(),
      justice: z.string().optional(),
      tribunal: z.string().optional(), // this is more like an ID, not the name
      instance: z.number().optional(),
      distribution_date: z.string().datetime().optional(),
      tribunal_acronym: z.string(),
      secrecy_level: z.number().optional(),
      tags: z.record(z.string(), z.any()).optional(),
      subjects: z
        .array(
          z.object({
            code: z.string().optional(),
            name: z.string(),
          }),
        )
        .optional(),
      classifications: z
        .array(
          z.object({
            code: z.string().optional(),
            name: z.string().optional(),
          }),
        )
        .optional(),
      courts: z
        .array(
          z.object({
            code: z.string().optional(),
            name: z.string(),
          }),
        )
        .optional(),
      parties: z.array(juditPartySchema).optional(),
      /*
        "lawsuit_cnj": "9999999-99.9999.9.99.9999",
        "lawsuit_instance": 1,
        "private": false,
        "step_id": "d029dd09",
        "tags": {
            "crawl_id": "7b909cec-9060-4530-be34-81e364b86b92"
        },
        "content": "Citação Efetivada Citação aberta pelo Domicilio Eletronico (Polo Passivo) Bv Financeira Sa Credito Financiamento E Investimento -",
        "step_date": "2025-03-11T15:08:48.000Z",
        "steps_count": 15
      */
      steps: z.array(
        z.object({
          lawsuit_cnj: z.string(),
          lawsuit_instance: z.number(),
          private: z.boolean().optional(),
          step_id: z.string(),
          tags: z.record(z.string(), z.any()).optional(),
          content: z.string(),
          step_date: z.string().datetime(),
          steps_count: z.number().optional(),
        }),
      ),
      attachments: z.array(z.any()).optional(), // Assuming attachments is an array of any type
      related_lawsuits: z.array(z.any()).optional(), // Assuming related_lawsuits is an array of any type
      crawler: z
        .object({
          source_name: z.string().optional(),
          crawl_id: z.string().optional(),
          weight: z.number().optional(),
          updated_at: z.string().datetime().optional(),
        })
        .optional(),
      amount: z.number().optional(),
      last_step: z
        .object({
          lawsuit_cnj: z.string().optional(),
          lawsuit_instance: z.number().optional(),
          step_id: z.string().optional(),
          step_date: z.string().datetime().optional(),
          private: z.boolean().optional(),
          steps_count: z.number().optional(),
        })
        .optional(),
      phase: z.string().optional(),
      status: z.string(),
      name: z.string().optional(),
    }),
    user_id: z.string().optional(),
    created_at: z.string().datetime().optional(),
    tags: z.record(z.string(), z.any()).optional(),
  }),
)

export const createTrackingPayload = z.object({
  recurrence: z.number(),
  search: searchFields,
})

export const okCreateTrackingResponse = z.object({
  tracking_id: z.string(),
  user_id: z.string().optional(),
  status: trackingStatusSchema,
  recurrence: z.number(),
  search: searchFields,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export const listTrackingsQuery = paginationQuery.extend({
  search: searchFields,
  lawsuit_instance: z.number().optional(),
  status: trackingStatusSchema.optional(),
  tags: z.string().optional(),
  recurrence_gte: z.string().datetime().optional(),
  recurrence_lte: z.string().datetime().optional(),
  created_at_gte: z.string().datetime().optional(),
  created_at_lte: z.string().datetime().optional(),
  updated_at_gte: z.string().datetime().optional(),
  updated_at_lte: z.string().datetime().optional(),
  updating_at_gte: z.string().datetime().optional(),
  updating_at_lte: z.string().datetime().optional(),
  paused_at_gte: z.string().datetime().optional(),
  paused_at_lte: z.string().datetime().optional(),
  deleted_at_gte: z.string().datetime().optional(),
  deleted_at_lte: z.string().datetime().optional(),
})

export const okListTrackingsResponse = paginatedResponse(
  z.object({
    tracking_id: z.string(),
    user_id: z.string().optional(),
    status: trackingStatusSchema,
    recurrence: z.number(),
    search: searchFields,
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    updating_at: z.string().datetime().optional(),
    paused_at: z.string().datetime().optional(),
    deleted_at: z.string().datetime().optional(),
  }),
)

export const okGetTrackingResponse = z.object({
  tracking_id: z.string(),
  user_id: z.string().optional(),
  status: trackingStatusSchema,
  recurrence: z.number(),
  search: searchFields,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  updating_at: z.string().datetime().optional(),
  paused_at: z.string().datetime().optional(),
  deleted_at: z.string().datetime().optional(),
})
