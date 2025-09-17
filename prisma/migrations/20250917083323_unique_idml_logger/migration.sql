/*
  Warnings:

  - A unique constraint covering the columns `[IDML,language]` on the table `LoggerIDML` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LoggerIDML_IDML_language_key" ON "public"."LoggerIDML"("IDML", "language");



CREATE TRIGGER set_mainEvent_updated_at
BEFORE UPDATE ON IDMLLogger
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_mainEvent_updated_at
BEFORE UPDATE ON MainEvent
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_event_registration_updated_at
BEFORE UPDATE ON EventRegistration
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
