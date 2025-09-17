"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Globe } from "lucide-react"
import i18n from "@/lib/i18n/i18n.client"
import { i18nOptions } from "@/lib/i18n/options"
import { useAuth } from "@/context/AuthContext"
import { UserRole } from "@/interfaces/UserRole"
import { useTranslation } from "react-i18next"

const flags: Record<string, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
  de: "🇩🇪",
  cimode: "CM", // debug mode
}

export function LanguageSwitcher() {
  const { user } = useAuth()
  const { i18n: i18nInstance } = useTranslation() // 👈 hook che forza rerender al cambio lingua

  const rawLang = i18nInstance.language
  const currentLng = i18nOptions.supportedLngs.includes(rawLang)
    ? rawLang
    : i18nOptions.fallbackLng

  const visibleLangs = i18nOptions.supportedLngs.filter((lng) => {
    if (lng === "cimode" && user?.role !== UserRole.ADMIN) return false
    return true
  })

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 cursor-pointer">
        <span>{flags[currentLng] || "🌐"}</span>
        <Globe className="w-4 h-4" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white text-black shadow-lg rounded-md p-2">
        {visibleLangs.map((lng) => (
          <DropdownMenu.Item
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            className="px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 cursor-pointer"
          >
            <span>{flags[lng]}</span>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
