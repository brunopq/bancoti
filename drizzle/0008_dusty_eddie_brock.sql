CREATE TYPE "public"."lawsuit_instance" AS ENUM('first', 'second', 'special');--> statement-breakpoint
ALTER TABLE "lawsuits" ADD COLUMN "instance" "lawsuit_instance" NOT NULL;