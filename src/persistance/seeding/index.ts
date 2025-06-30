import { container } from "../../dependencyManager.ts"

import { ClientRepository } from "../repositories/ClientRepository.ts"
import { CourtRepository } from "../repositories/CourtRepository.ts"
import { DistrictRepository } from "../repositories/DistrictRepository.ts"
import { ForumRepository } from "../repositories/ForumRepository.ts"
import { IndividualRepository } from "../repositories/IndividualRepository.ts"
import { LawsuitRepository } from "../repositories/LawsuitRepository.ts"
import { LegalEntityRepository } from "../repositories/LegalEntityRepository.ts"
import { PartyRepository } from "../repositories/PartyRepository.ts"

async function seed() {
  const courtRepo = container.get(CourtRepository)
  const lawsuitRepo = container.get(LawsuitRepository)
  const clientRepo = container.get(ClientRepository)
  const partyRepo = container.get(PartyRepository)
  const individualRepo = container.get(IndividualRepository)
  const legalEntityRepo = container.get(LegalEntityRepository)
  const districtRepo = container.get(DistrictRepository)
  const forumRepo = container.get(ForumRepository)

  const district = await districtRepo.create({
    name: "Comarca de Bagé",
    state: "RS",
    municipalities: ["Bagé", "Candiota", "Aceguá", "Hulha Negra"],
  })

  const forum = await forumRepo.create({
    name: "Forum de Bagé",
    districtId: district.id,
  })

  const court = await courtRepo.create({
    name: "3ª Vara Cível",
    forumId: forum.id,
    abbreviation: "3ª VC",
    area: "civil",
  })

  const lawsuit = await lawsuitRepo.create({
    area: "labor",
    cnj: "0000000-00.0000.0.00.0000",
    status: "active",
    courtId: court.id,
  })

  const legalEntity = await legalEntityRepo.create({
    corporateName: "Empresa Exemplo Ltda",
    cnpj: "12.345.678/0001-90",
  })

  const defendant = partyRepo.create({
    role: "defendant",
    entity_id: legalEntity.id,
    type: "legal_entity",
    lawsuit_id: lawsuit.id,
  })

  const individual = await individualRepo.create({
    name: "João da Silva",
    cpf: "123.456.789-00",
    email: "joao@email.com",
    birthDate: new Date("1990-01-01"),
    gender: "male",
    phones: [],
  })

  const plaintiff = await partyRepo.create({
    role: "author",
    entity_id: individual.id,
    type: "individual",
    lawsuit_id: lawsuit.id,
  })

  const client = await clientRepo.create({
    type: "individual",
    entityId: individual.id,
  })
}

seed()
