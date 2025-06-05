import { pgEnum } from "drizzle-orm/pg-core"

export const partRole = pgEnum("part_role", ["author", "defendant"])
export const entityType = pgEnum("part_type", ["individual", "legal_entity"])
export const genderType = pgEnum("gender_type", ["male", "female", "other"])
