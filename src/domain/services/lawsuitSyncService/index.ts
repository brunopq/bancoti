import { injectable, inject } from "inversify"

import type { Lawsuit } from "../../entities/lawsuit.ts"

import { jAreaMapper } from "@/persistance/external/judice/mappers/jAreaMapper.ts"
import { jCourtAreaMapper } from "@/persistance/external/judice/mappers/jCourtAreaMapper.ts"

import { JudiceService } from "@/persistance/external/judice/judiceService.ts"
import { LawsuitRepository } from "@/persistance/repositories/LawsuitRepository.ts"
import { CourtRepository } from "@/persistance/repositories/CourtRepository.ts"
import { DistrictRepository } from "@/persistance/repositories/DistrictRepository.ts"
import { ForumRepository } from "@/persistance/repositories/ForumRepository.ts"
import { SubjectRepository } from "@/persistance/repositories/SubjectRepository.ts"

@injectable()
export class LawsuitSyncService {
  constructor(
    @inject(JudiceService) private readonly judiceService: JudiceService,
    @inject(LawsuitRepository)
    private readonly lawsuitRepository: LawsuitRepository,
    @inject(CourtRepository)
    private readonly courtRepository: CourtRepository,
    @inject(DistrictRepository)
    private readonly districtRepository: DistrictRepository,
    @inject(ForumRepository)
    private readonly forumRepository: ForumRepository,
    @inject(SubjectRepository)
    private readonly subjectRepository: SubjectRepository,
  ) {}

  /**
   * This method expects the lawsuit to be present in the judice API.
   *
   * @param cnj
   */
  async syncLawsuitByCNJ(cnj: string): Promise<Lawsuit> {
    const lawsuit = await this.judiceService.getLawsuitByCNJ(cnj)

    if (!lawsuit) {
      throw new Error(`Lawsuit with CNJ ${cnj} not found in judice API`)
    }

    const dbLawsuit = await this.lawsuitRepository.findByCnj(cnj)

    if (dbLawsuit) {
      // biome-ignore lint/style/noNonNullAssertion: if we have the lawsuit this should not be null
      const updated = (await this.lawsuitRepository.update(dbLawsuit.id, {
        area: jAreaMapper.toDomain(lawsuit.area.nome),
        status: lawsuit.fase_processual.nome,
      }))!

      const subjects = await this.subjectRepository.findByIds(
        updated?.subjectsIds || [],
      )

      return {
        ...updated,
        subjects: subjects.map((s) => s.name),
      }
    }

    let courtId: string | null = null

    // this whole if is to get the court and create the stuff if it doesn't exist
    if (lawsuit.forum.nome) {
      console.log("Creating or finding district, forum, and court...")
      let district = await this.districtRepository.findByName(
        lawsuit.comarca.nome,
      )

      if (!district) {
        district = await this.districtRepository.create({
          name: lawsuit.comarca.nome,
          state: lawsuit.comarca.uf,
          municipalities: [],
        })
      }

      console.log("District found or created:", district.name)

      let forum = await this.forumRepository.findByName(lawsuit.forum.nome)

      if (!forum) {
        forum = await this.forumRepository.create({
          name: lawsuit.forum.nome,
          districtId: district.id,
        })
      }

      console.log("Forum found or created:", forum.name)

      let court = await this.courtRepository.findByNameAndForum(
        lawsuit.cartorio.nome,
        forum.id,
      )

      if (!court) {
        court = await this.courtRepository.create({
          name: lawsuit.cartorio.nome,
          forumId: forum.id,
          area: jCourtAreaMapper.toDomain(lawsuit.area.nome),
        })
      }

      console.log("Court found or created:", court.name)

      courtId = court.id
    }

    const createdLawsuit = await this.lawsuitRepository.create({
      cnj: lawsuit.cnj,
      instance: "first", // TODO: judice does not provide instance, so we default to 'first'
      subjectsIds: [],
      area: jAreaMapper.toDomain(lawsuit.area.nome),
      status: lawsuit.fase_processual.nome,
      courtsIds: courtId ? [courtId] : [],
    })

    return {
      ...createdLawsuit,
      subjects: [],
    }
  }
}
