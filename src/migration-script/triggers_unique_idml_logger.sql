-- Funzione per aggiornare updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language 'plpgsql';


CREATE TRIGGER set_mainEvent_updated_at
BEFORE UPDATE ON IDMLLogger
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
