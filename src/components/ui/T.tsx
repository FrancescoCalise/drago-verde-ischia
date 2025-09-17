"use client"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { logMissingIdml } from "@/lib/translationService"

export function T({ idml, defaultText }: { idml: string; defaultText?: string }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    console.log("i18n language:", i18n.language, "initialized:", i18n.isInitialized, idml, defaultText);
    if (i18n.isInitialized && i18n.options?.saveMissing) {
      const translated = t(idml, { defaultValue: defaultText ?? idml })
      if (!translated || translated === idml) {
        logMissingIdml(idml, defaultText)
      }
    }
  }, [i18n.isInitialized, i18n.language, idml, defaultText, t, i18n.options?.saveMissing])

  if (!i18n.isInitialized) return <>{defaultText ?? idml}</>
  return <>{t(idml, { defaultValue: defaultText ?? idml })}</>
}
