CREATE SCHEMA "judit_api";
--> statement-breakpoint
CREATE TABLE "judit_api"."api_call" (
	"id" serial PRIMARY KEY NOT NULL,
	"called_at" timestamp NOT NULL,
	"responded_at" timestamp,
	"endpoint" text NOT NULL,
	"method" text NOT NULL,
	"status" integer,
	"request" jsonb NOT NULL,
	"request_headers" jsonb NOT NULL,
	"response" jsonb,
	"response_headers" jsonb,
	"validation_error" jsonb
);
