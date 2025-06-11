CREATE TYPE "public"."lawsuit_area" AS ENUM('civil', 'criminal', 'administrative', 'labor', 'tax');--> statement-breakpoint
CREATE TYPE "public"."lawsuit_status" AS ENUM('draft', 'active', 'closed', 'archived', 'cancelled');--> statement-breakpoint
ALTER TABLE "clients" ALTER COLUMN "entity_id" SET DATA TYPE char;--> statement-breakpoint
ALTER TABLE "clients" ALTER COLUMN "entity_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "individuals" ALTER COLUMN "birth_date" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "legal_entities" ALTER COLUMN "corporate_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "legal_entities" ALTER COLUMN "cnpj" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ADD COLUMN "area" "lawsuit_area";