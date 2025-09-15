-- Funzione per aggiornare updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language 'plpgsql';

-- Trigger per la tabella user
create trigger update_user_updated_at
before update on User
for each row
execute function update_updated_at_column();

-- Trigger per la tabella gdr_sessions
CREATE TRIGGER set_gdr_sessions_updated_at
BEFORE UPDATE ON GdrSession
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Trigger per la tabella bookings
CREATE TRIGGER set_bookings_updated_at
BEFORE UPDATE ON Booking
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();