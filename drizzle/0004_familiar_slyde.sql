ALTER TYPE "public"."lawsuit_area" ADD VALUE 'legal_compliance' BEFORE 'labor';--> statement-breakpoint
ALTER TYPE "public"."lawsuit_area" ADD VALUE 'social_security' BEFORE 'labor';--> statement-breakpoint
ALTER TYPE "public"."lawsuit_area" ADD VALUE 'family' BEFORE 'labor';--> statement-breakpoint
ALTER TABLE "movements" ADD COLUMN "judice_id" bigint;--> statement-breakpoint
CREATE INDEX "judice_id" ON "movements" USING btree ("judice_id" DESC NULLS LAST);--> statement-breakpoint
ALTER TABLE "movements" ADD CONSTRAINT "movements__judiceId_unique" UNIQUE("judice_id");