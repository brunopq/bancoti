import { describe, it, before, beforeEach } from "node:test"
import assert from "node:assert"
import { instance, mock, when, reset, verify } from "ts-mockito"

type Dep = {
  callMe(): number
}

class DoShit {
  dep: Dep

  constructor(private readonly value: number = 69) {
    this.dep = {
      callMe() {
        return value
      },
    }
  }

  getValue() {
    console.log("CALLLLLLLED")
    return this.value
  }
}

describe("teste de teste", (t) => {
  const clientMock = mock<DoShit>() satisfies DoShit

  const client = instance(clientMock)

  beforeEach(() => {
    reset(clientMock)
  })

  //   it("should be defined", (i) => {
  //     when(clientMock.dep).thenReturn({ callMe: () => -1 })
  //     when(clientMock.dep.callMe()).thenReturn(69)

  //     assert(client)
  //     assert(client.dep)
  //     assert(client.dep.callMe)
  //   })

  it("should've been called once", () => {
    when(clientMock.dep).thenReturn({ callMe: () => -1 })
    const val = client.dep.callMe()

    console.log("val: ", val)

    verify(clientMock.dep.callMe()).once()
  })

  it("should return 69", () => {
    when(clientMock.getValue()).thenReturn(69)

    const val = client.getValue()

    console.log("val: ", val)

    assert.strictEqual(val, 69)
  })

  it("should've been called once", () => {
    const val = client.getValue()

    console.log("val: ", val)

    verify(clientMock.getValue()).once()
  })
})

