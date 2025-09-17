import i18n from "i18next"

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
    await fetch("/api/logger-idml", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idml, defaultText }),
    })
  } catch (err) {
    console.error("Errore log IDML:", err)
  }
}