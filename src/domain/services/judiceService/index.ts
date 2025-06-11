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

  async getLawsuitById(id: number) {
    return await this.db.query.process.findFirst({
      where: (process, { eq }) => eq(process.fId, id),
      with: {},
    })
  }

  async getLawsuitByNumber(number: string) {
    return await this.db.query.process.findFirst({
      where: (process, { eq }) => eq(process.fCnjNumber, number),
      with: {},
    })
  }
}
