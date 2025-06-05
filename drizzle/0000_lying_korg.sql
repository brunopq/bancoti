CREATE TYPE "public"."part_type" AS ENUM('individual', 'legal_entity');--> statement-breakpoint
CREATE TYPE "public"."gender_type" AS ENUM('male', 'female', 'other');--> statement-breakpoint
CREATE TYPE "public"."part_role" AS ENUM('author', 'defendant');--> statement-breakpoint
CREATE TABLE "clients" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"entity_id" text,
	"type" "part_type"
);
--> statement-breakpoint
CREATE TABLE "client_documents" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"client_id" text,
	"type" text,
	"date" timestamp,
	"description" text,
	"file_url" text
);
--> statement-breakpoint
CREATE TABLE "courts" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text,
	"abbreviation" text,
	"district" text,
	"type" text
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"lawsuit_id" text,
	"type" text,
	"title" text,
	"description" text,
	"date" timestamp
);
--> statement-breakpoint
CREATE TABLE "lawsuits" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"cnj" text,
	"status" text
);
--> statement-breakpoint
CREATE TABLE "judging_units" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"court_id" text,
	"name" text,
	"address" text
);
--> statement-breakpoint
CREATE TABLE "movements" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"lawsuit_id" text,
	"type" text,
	"title" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "witnesses" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"part_id" text,
	"individual_id" text
);
--> statement-breakpoint
CREATE TABLE "parties" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"entity_id" text,
	"type" "part_type",
	"lawsuit_id" text,
	"role" "part_role"
);
--> statement-breakpoint
CREATE TABLE "individuals" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"cpf" text NOT NULL,
	"birth_date" timestamp NOT NULL,
	"gender" "gender_type",
	"phones" text[],
	"email" text
);
--> statement-breakpoint
CREATE TABLE "legal_entities" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"corporate_name" text,
	"cnpj" text
);
--> statement-breakpoint
CREATE TABLE "lawsuit_documents" (
	"id" char PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"lawsuit_id" text,
	"movementation_id" text,
	"type" text,
	"date" timestamp,
	"description" text,
	"file_url" text
);
