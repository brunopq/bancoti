import { Container } from "inversify"

import { RedisCacheService } from "./persistance/cache/redisCacheService.ts"
import { db } from "./persistance/db.ts"

const container = new Container({
  defaultScope: "Singleton",
  autobind: true,
})

container.bind("CacheService").to(RedisCacheService)
container.bind("db").toConstantValue(db)

export { container }