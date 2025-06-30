ALTER TABLE "movements" ALTER COLUMN "lawsuit_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "movements" ADD COLUMN "lawsuit_cnj" text;--> statement-breakpoint
ALTER TABLE "movements" ADD CONSTRAINT "movements_lawsuit_id_lawsuits_id_fk" FOREIGN KEY ("lawsuit_id") REFERENCES "public"."lawsuits"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "lawsuit_cnj" ON "movements" USING btree ("lawsuit_cnj");