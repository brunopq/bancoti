import { HTTPException } from "hono/http-exception"
import type { ContentfulStatusCode } from "hono/utils/http-status"

class BaseException extends HTTPException {
  constructor(status: ContentfulStatusCode, message: string) {
    super(status, { message })
  }
}

export class NotFoundException extends BaseException {
  constructor(message: string) {
    super(404, message)
  }
}

export class InvalidArgumentException extends BaseException {
  constructor(message: string) {
    super(400, message)
  }
}
