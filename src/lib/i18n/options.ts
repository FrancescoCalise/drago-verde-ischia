import it from "@/locales/it.json"
import en from "@/locales/en.json"

export const i18nOptions = {
  fallbackLng: "it",
  supportedLngs: ["it",  "cimode"], //"en"
  resources: {
    it: { translation: it },
    en: { translation: en },
  },
  interpolation: { escapeValue: false },
  saveMissing: true,
  detection: {
    order: ["localStorage", "cookie", "navigator"],
    caches: ["localStorage"]
  },
}
