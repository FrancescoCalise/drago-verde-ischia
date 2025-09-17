"use client"

import { I18nextProvider } from "react-i18next"
import i18n, { i18nReady } from "@/lib/i18n/i18n.client"
import { useEffect, useState, ReactNode } from "react"

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(i18n.isInitialized)

  useEffect(() => {
    if (!ready) {
      i18nReady.then(() => setReady(true))
    }
  }, [ready])

  if (!ready) return null

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
