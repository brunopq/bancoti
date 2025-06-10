import { pgEnum } from "drizzle-orm/pg-core"

export const partRole = pgEnum("part_role", ["author", "defendant"])
export const entityType = pgEnum("part_type", ["individual", "legal_entity"])
export const genderType = pgEnum("gender_type", ["male", "female", "other"])
export const lawsuitStatus = pgEnum("lawsuit_status", [
  "draft",
  "active",
  "closed",
  "archived",
  "cancelled",
])
export const lawsuitArea = pgEnum("lawsuit_area", [
  "civil",
  "criminal",
  "administrative",
  "labor",
  "tax",
])

export type PartyRole = (typeof partRole.enumValues)[number]
export type EntityType = (typeof entityType.enumValues)[number]
export type GenderType = (typeof genderType.enumValues)[number]
export type LawsuitStatus = (typeof lawsuitStatus.enumValues)[number]
export type LawsuitArea = (typeof lawsuitArea.enumValues)[number]
