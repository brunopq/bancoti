import { Container } from "inversify"

import { db } from "./persistance/db.ts"

export const container = new Container({
  defaultScope: "Singleton",
  autobind: true,
})

container.bind("db").toConstantValue(db)
