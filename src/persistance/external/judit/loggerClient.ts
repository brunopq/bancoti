import { tsRestFetchApi, type ApiFetcherArgs, isZodType } from "@ts-rest/core"
import { inject, injectable } from "inversify"
import type { ZodError } from "zod"

import { ApiCallsRepository } from "./apiCallsRepository.ts"

@injectable()
export class LoggerClient {
  constructor(
    @inject(ApiCallsRepository)
    private readonly apiCallsRepository: ApiCallsRepository,
  ) {}

  async fetch(args: ApiFetcherArgs) {
    const call = await this.apiCallsRepository.create({
      endpoint: args.path,
      method: args.method,
      calledAt: new Date(),
      request: args.body,
      requestHeaders: args.headers,
    })

    const res = await tsRestFetchApi({ ...args, validateResponse: false })

    // don't use the parsed result, just get the error
    const responseSchema = args.route.responses[res.status]
    let validationError: ZodError | null = null
    if (args.validateResponse && isZodType(responseSchema)) {
      const parsed = responseSchema.safeParse(res.body)

      if (!parsed.success) {
        validationError = parsed.error
      }
    }

    await this.apiCallsRepository.update(call.id, {
      respondedAt: new Date(),
      status: res.status,
      response: res.body,
      responseHeaders: res.headers,
      validationError,
    })

    return res
  }
}
