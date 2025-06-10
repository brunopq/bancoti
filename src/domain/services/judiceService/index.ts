import { inject, injectable } from "inversify"

import { judb } from "./database.ts"

@injectable()
export class JudiceService {
  constructor(private readonly db: typeof judb = judb) {}

  async getLawsuits() {
    return await this.db.query.process.findMany({
      limit: 20,
      with: {},
    })
  }
}
