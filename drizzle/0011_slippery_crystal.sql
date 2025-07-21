ALTER TABLE "courts" ALTER COLUMN "area" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "tribunals" ALTER COLUMN "area" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."court_area";--> statement-breakpoint
CREATE TYPE "public"."court_area" AS ENUM('civil', 'criminal', 'administrative', 'legal_compliance', 'social_security', 'family', 'labor', 'tax', 'unknown');--> statement-breakpoint
ALTER TABLE "courts" ALTER COLUMN "area" SET DATA TYPE "public"."court_area" USING "area"::"public"."court_area";--> statement-breakpoint
ALTER TABLE "tribunals" ALTER COLUMN "area" SET DATA TYPE "public"."court_area" USING "area"::"public"."court_area";--> statement-breakpoint
ALTER TABLE "lawsuits" ADD COLUMN "jid" integer;