ALTER TYPE "public"."court_area" ADD VALUE 'unknown';--> statement-breakpoint
ALTER TYPE "public"."lawsuit_area" ADD VALUE 'unknown';--> statement-breakpoint
CREATE TABLE "subjects" (
	"id" char(16) PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "subjects_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "tribunals" (
	"id" char(16) PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"abbreviation" text NOT NULL,
	"area" "court_area" NOT NULL
);
--> statement-breakpoint
ALTER TABLE "lawsuits" DROP CONSTRAINT "lawsuits_court_id_courts_id_fk";
--> statement-breakpoint
ALTER TABLE "courts" ALTER COLUMN "forum_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "parties" ALTER COLUMN "entity_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "parties" ALTER COLUMN "type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "parties" ALTER COLUMN "lawsuit_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "parties" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ADD COLUMN "tribunal_id" text;--> statement-breakpoint
ALTER TABLE "lawsuits" ADD COLUMN "courts_ids" text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "lawsuits" ADD COLUMN "subjects_ids" text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "movements" ADD COLUMN "dispatch_date" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ADD CONSTRAINT "courts_tribunal_id_tribunals_id_fk" FOREIGN KEY ("tribunal_id") REFERENCES "public"."tribunals"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courts" DROP COLUMN "abbreviation";--> statement-breakpoint
ALTER TABLE "lawsuits" DROP COLUMN "court_id";--> statement-breakpoint
ALTER TABLE "courts" ADD CONSTRAINT "courts_name_unique" UNIQUE("name");