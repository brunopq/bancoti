import { z } from "zod"

import { ClientSchema } from "@/domain/entities/client.ts"

export const ClientDTO = ClientSchema
export type ClientDTOType = z.infer<typeof ClientDTO>

export const ClientDTOArray = z.array(ClientDTO)
export type ClientDTOArrayType = z.infer<typeof ClientDTOArray>
