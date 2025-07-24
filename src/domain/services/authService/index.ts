import crypto from "node:crypto"
import { injectable, inject } from "inversify"

import { env } from "@/utils/env.ts"
import { LoggerFactory } from "@/utils/LoggerProvider.ts"

@injectable()
export class AuthService {
  constructor(private readonly logger = LoggerFactory("AuthService")) {}

  public generateToken(): string {
    this.logger.debug("Generating new token")
    const random = crypto.randomBytes(32)
    const signature = crypto
      .createHmac("sha256", env.API_TOKEN)
      .update(random)
      .digest()

    const combined = Buffer.concat([random, signature])
    this.logger.debug("Token generated successfully")
    return combined.toString("base64url")
  }

  public verify(token: string): boolean {
    try {
      const combined = Buffer.from(token, "base64url")
      if (combined.length !== 64) return false

      const random = combined.subarray(0, 32)
      const signature = combined.subarray(32, 64)

      const expectedSignature = crypto
        .createHmac("sha256", env.API_TOKEN)
        .update(random)
        .digest()
      return crypto.timingSafeEqual(signature, expectedSignature)
    } catch {
      return false
    }
  }
}
