import { z } from "zod"

import { lawsuitAreas, lawsuitInstances } from "@/domain/entities/lawsuit.ts"

export const lawsuitArea = z.enum(lawsuitAreas)
export const lawsuitInstance = z.enum(lawsuitInstances)
