import i18n from "i18next"
import { httpFetch } from "../services/http/httpFetch"

export function translateClient(idml: string, defaultText?: string): string {
   
  if (!i18n.isInitialized) return defaultText || idml

  const translated = i18n.t(idml)

  if (!translated || translated === idml) {
    return defaultText || idml
  }

  return translated
}

export async function logMissingIdml(idml: string, defaultText?: string) {
  try {
    await httpFetch("/api/logger-idml","POST",JSON.stringify({ idml, defaultText }), false )
  } catch (err) {
    console.error("Errore log IDML:", err)
  }
}
