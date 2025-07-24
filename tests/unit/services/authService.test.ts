import { describe, it } from "node:test"
import assert from "node:assert"

import { AuthService } from "@/domain/services/authService/index.ts"

describe("Auth Service", () => {
  const service = new AuthService()

  it("should be defined", () => {
    assert.ok(service)
  })

  it("should create a token", async () => {
    const token = service.generateToken()

    assert.ok(token)
    assert.strictEqual(typeof token, "string")
  })

  it("should verify a valid token", () => {
    const token = service.generateToken()
    const isValid = service.verify(token)

    assert.strictEqual(isValid, true)
  })

  it("should not verify an invalid token", () => {
    const isValid = service.verify("invalid-token")

    assert.strictEqual(isValid, false)
  })
})
