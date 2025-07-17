import { it, describe } from "node:test"
import assert from "node:assert"

import { container } from "@/dependencyManager.ts"

import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"

describe("LawsuitRepository", () => {
  const repo = container.get(LawsuitRepository)

  it("should be defined", () => {
    assert.ok(repo)
  })

  // TODO: finish writing tests
  it("", async () => {
    const lawsuits = await repo.findAllDomainFull()

    console.dir(lawsuits, { depth: 10, colors: true })

    assert.ok(true)
  })
})
