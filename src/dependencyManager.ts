import { Container } from "inversify"

import { RedisCacheService } from "./persistance/cache/redisCacheService.ts"

const container = new Container({
  defaultScope: "Singleton",
  autobind: true,
})

container.bind("CacheService").to(RedisCacheService)

export { container }