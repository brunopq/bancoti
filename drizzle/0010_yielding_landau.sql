ALTER TABLE "clients" ADD COLUMN "jid" integer;--> statement-breakpoint
CREATE INDEX "judice_id_index" ON "clients" USING btree ("jid");