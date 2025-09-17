import i18n from "i18next"
import prisma from "@/lib/prisma"

/**
 * Prova a tradurre l'IDML con i18next.
 * Se non esiste, salva nel DB e mostra il testo di fallback.
 */
export async function translate(
  idml: string,
  defaultText?: string
): Promise<string> {
  if (!i18n.isInitialized) {
    return defaultText || idml
  }

  const translated = i18n.t(idml)

  // Se non esiste la traduzione
  if (!translated || translated === idml) {
    const language = i18n.language || "it" // 🔹 recupero lingua corrente

    // 🔹 Salviamo in tabella LoggerIDML se non già presente
    try {
      await prisma.loggerIDML.upsert({
        where: { IDML_language: { IDML: idml, language } },
        update: {},
        create: {
          IDML: idml,
          description: defaultText || idml,
          language,
        },
      })
    } catch (err) {
      console.error("Errore salvataggio LoggerIDML:", err)
    }

    return `${defaultText || idml} (${idml})`
  }

  return translated
}
