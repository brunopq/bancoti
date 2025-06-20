ALTER TABLE "judging_units" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "judging_units" CASCADE;--> statement-breakpoint
ALTER TABLE "clients" ALTER COLUMN "type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ALTER COLUMN "abbreviation" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ALTER COLUMN "district" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ALTER COLUMN "type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ALTER COLUMN "cnj" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ALTER COLUMN "status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ALTER COLUMN "area" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "movements" ALTER COLUMN "lawsuit_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "movements" ALTER COLUMN "type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "movements" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "movements" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ADD COLUMN "court_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ADD CONSTRAINT "lawsuits_court_id_courts_id_fk" FOREIGN KEY ("court_id") REFERENCES "public"."courts"("id") ON DELETE no action ON UPDATE no action;