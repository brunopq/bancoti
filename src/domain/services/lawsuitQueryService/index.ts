import type {
  LawsuitQueryOptions,
  LawsuitQuery,
  LawsuitQueryWithResult,
} from "@/domain/entities/lawsuitQuery.ts"

import { LawsuitQueryRepository } from "@/persistance/repositories/LawsuitQueryRepository.ts"

import { inject, injectable } from "inversify"
import { LawsuitService } from "../lawsuitService/index.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"
import { RabbitMQMessageQueue } from "@/persistance/messaging/RabbitMQMessageQueue.ts"
import type { LawsuitWith } from "@/domain/entities/lawsuit.ts"

@injectable()
export class LawsuitQueryService {
  constructor(
    @inject(LawsuitQueryRepository)
    private readonly lawsuitQueryRepository: LawsuitQueryRepository,
    @inject(LawsuitService)
    private readonly lawsuitService: LawsuitService,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
    @inject(RabbitMQMessageQueue)
    private readonly mq: RabbitMQMessageQueue,
  ) {}

  async createLawsuitQuery(
    options: LawsuitQueryOptions,
  ): Promise<LawsuitQuery> {
    const lawsuitCnjs: string[] = []
    if (options.cnj) {
      lawsuitCnjs.push(options.cnj)
    } else if (options.clientId) {
      const lawsuits = await this.lawsuitService.index({
        clientId: options.clientId,
      })

      lawsuitCnjs.push(...lawsuits.map((l) => l.cnj))
    }

    const query = await this.lawsuitQueryRepository.create({
      status: "pending",
      options,
      lawsuitCnjs,
    })

    this.mq.publish("lawsuit_query_queue", {
      queryId: query.id,
    })

    return {
      ...query,
      options: query.options as LawsuitQueryOptions,
    }
  }

  async getQuery(
    queryId: string,
  ): Promise<LawsuitQuery | LawsuitQueryWithResult | null> {
    const query = await this.lawsuitQueryRepository.findById(queryId)

    if (!query) {
      return null
    }

    const options: LawsuitQueryOptions = query.options as LawsuitQueryOptions

    if (query.status !== "completed")
      return {
        ...query,
        options,
      }

    const lawsuits: LawsuitWith<"movements" | "courts" | "parties">[] = []

    for (const cnj of query.lawsuitCnjs) {
      console.log(`Fetching lawsuit with CNJ ${cnj} for query ${queryId}`)
      const lawsuit = await this.lawsuitService.getByCnjNoSync(cnj)

      if (lawsuit) {
        console.log(`Lawsuit with CNJ ${cnj} found for query ${queryId}`)
        lawsuits.push(lawsuit)
        continue
      }

      console.log("paia")
    }

    return {
      ...query,
      options,
      completedAt: query.updatedAt,
      result: lawsuits,
    }
  }
}
