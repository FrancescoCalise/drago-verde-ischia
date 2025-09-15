import { supabase } from './supabaseClient'

// Ottenere tutti i soci
export async function getSoci() {
  const { data, error } = await supabase.from('soci').select('*')
  if (error) throw error
  return data
}

// Aggiungere un socio
export async function addSocio(name: string, surname: string, email: string, endSubDate: string) {
  const { data, error } = await supabase.from('soci').insert([
    { name, surname, email, end_sub_date: endSubDate }
  ])
  if (error) throw error
  return data
}

// Aggiornare la data di rinnovo
export async function updateSocio(id: string, newEndDate: string) {
  const { data, error } = await supabase.from('soci')
    .update({ end_sub_date: newEndDate })
    .eq('id', id)
  if (error) throw error
  return data
}
