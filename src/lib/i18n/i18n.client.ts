// i18n.client.ts
"use client"

import i18next, { i18n as I18nType } from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { i18nOptions } from "./options"

declare global {
  var __i18nClient: I18nType | undefined
  var __i18nClientReady: Promise<I18nType> | undefined
}

if (!globalThis.__i18nClient) {
  const instance = i18next.createInstance()
  globalThis.__i18nClientReady = instance
    .use(initReactI18next)
    .use(LanguageDetector)
    .init(i18nOptions)
    .then(() => instance)
  globalThis.__i18nClient = instance
}

const i18n = globalThis.__i18nClient!
export const i18nReady = globalThis.__i18nClientReady!
export default i18n
