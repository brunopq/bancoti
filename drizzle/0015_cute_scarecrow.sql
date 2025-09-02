CREATE TYPE "public"."lawsuit_query_status" AS ENUM('pending', 'completed', 'failed');--> statement-breakpoint
CREATE TABLE "lawsuit_queries" (
	"id" char(16) PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"status" "lawsuit_query_status" NOT NULL,
	"options" jsonb NOT NULL
);
