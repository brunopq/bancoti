CREATE TYPE "public"."court_area" AS ENUM('civil', 'criminal', 'labor', 'family', 'public_finance', 'small_claims', 'electoral', 'military', 'juvenile', 'environmental', 'corporate', 'penal_execution');--> statement-breakpoint
CREATE TABLE "districts" (
	"id" char(16) PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"municipalities" text[] NOT NULL,
	"state" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "forums" (
	"id" char(16) PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"district_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "lawsuits" ALTER COLUMN "court_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ADD COLUMN "forum_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "courts" ADD COLUMN "area" "court_area" NOT NULL;--> statement-breakpoint
ALTER TABLE "forums" ADD CONSTRAINT "forums_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courts" ADD CONSTRAINT "courts_forum_id_forums_id_fk" FOREIGN KEY ("forum_id") REFERENCES "public"."forums"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courts" DROP COLUMN "district";--> statement-breakpoint
ALTER TABLE "courts" DROP COLUMN "type";