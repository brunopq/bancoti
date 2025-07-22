import { describe, it } from "node:test"
import assert from "node:assert"

import { container } from "@/dependencyManager.ts"
import { ApiCallsRepository } from "@/persistance/external/judit/apiCallsRepository.ts"

describe("apiCallsRepository", () => {
  const repository = container.get(ApiCallsRepository)

  it("should be defined", () => {
    assert.ok(repository)
  })

  it("should create an API call", async () => {
    const call = await repository.create({
      endpoint: "/test",
      method: "GET",
      calledAt: new Date(),
      request: { test: "data" },
      requestHeaders: { "Content-Type": "application/json" },
    })

    assert.ok(call.id)
    assert.strictEqual(call.endpoint, "/test")
    assert.strictEqual(call.method, "GET")
    assert.deepStrictEqual(call.request, { test: "data" })
  })
})
