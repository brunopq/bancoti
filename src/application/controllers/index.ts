import { Hono } from "hono"
import { describeRoute } from "hono-openapi"

import { JudiceService } from "../../domain/services/judiceService/index.ts"

import { container } from "../../dependencyManager.ts"
import { resolver } from "hono-openapi/zod"
import {
  JudiceLawsuitDTO,
  JudiceLawsuitDTOArray,
} from "../dto/judiceLawsuitDTO.ts"

export const judiceController = new Hono()

const judiceService = container.get(JudiceService)

judiceController.get(
  "/ping",
  describeRoute({
    tags: ["Judice"],
    description: "Root endpoint",
    responses: {
      200: {
        description: "Successful response",
      },
    },
  }),
  (c) => {
    return c.text("pong")
  },
)

judiceController.get(
  "/lawsuits",
  describeRoute({
    tags: ["Judice"],
    description: "Get all lawsuits",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": { schema: resolver(JudiceLawsuitDTOArray) },
        },
      },
    },
    validateResponse: true,
  }),
  async (c) => {
    const lawsuits = await judiceService.getLawsuits()

    return c.json(lawsuits)
  },
)
