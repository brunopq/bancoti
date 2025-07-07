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
    response_data: z
      .object({
        code: z.string().optional(),
        justice: z.string().optional(),
        tribunal: z.string().optional(),
        instance: z.number().optional(),
        distribution_date: z.string().datetime().optional(),
        tribunal_acronym: z.string().optional(),
        secrecy_level: z.number().optional(),
        tags: z.record(z.string(), z.any()).optional(),
        subjects: z
          .array(
            z.object({
              code: z.string().optional(),
              name: z.string().optional(),
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
              name: z.string().optional(),
            }),
          )
          .optional(),
        parties: z
          .array(
            z.object({
              name: z.string().optional(),
              side: z.string().optional(),
              person_type: z.string().optional(),
              document: z.string().optional(),
              document_type: z.string().optional(),
              lawyers: z.array(z.any()).optional(), // Assuming lawyers is an array of any type
              tags: z.record(z.string(), z.any()).optional(),
            }),
          )
          .optional(),
        steps: z.array(z.any()).optional(), // Assuming steps is an array of any type
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
        status: z.string().optional(),
        name: z.string().optional(),
      })
      .optional(),
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
