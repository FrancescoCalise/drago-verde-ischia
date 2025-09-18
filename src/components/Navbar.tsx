"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User } from "lucide-react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useAuth } from "@/context/AuthContext"
import { UserRole } from "@/interfaces/UserRole"
import { LanguageSwitcher } from "./LanguageSwitcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/logo-drago-verde-bianco.png"
              alt="Logo Drago Verde Ischia"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold whitespace-nowrap">
            Drago Verde Ischia A.P.S.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/chi-siamo" className="hover:underline">Chi Siamo</Link>
          <Link href="/eventi" className="hover:underline">Eventi</Link>

          {/* DraCon Ischia dropdown */}
          <NavigationMenu.Root>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger asChild>
                  <Link href="/draconischia" className="hover:underline">
                    DraCon Ischia
                  </Link>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute bg-white text-black rounded-md shadow-lg mt-2 p-2">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <Link href="/draconischia/agenda" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Programma
                      </Link>
                    </li>
                    <li>
                      <Link href="/draconischia/gdr-sessions" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Sessioni GDR
                      </Link>
                    </li>
                    <li>
                      <Link href="/draconischia/main-events" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Main Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/draconischia/regolamenti" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Regolamenti & FAQ
                      </Link>
                    </li>
                    {user?.role === UserRole.ADMIN && (
                      <li>
                        <Link
                          href="/draconischia/manage-event"
                          className="block px-3 py-2 hover:bg-gray-100 rounded text-red-600 font-semibold"
                        >
                          Gestisci Eventi
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link href="/draconischia/old-edition" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Edizioni Passate
                      </Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <Link href="/media" className="hover:underline">Media</Link>

          {/* Sostienici dropdown */}
          <NavigationMenu.Root>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="hover:underline">
                  Sostienici
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute bg-white text-black rounded-md shadow-lg mt-2 p-2">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <Link
                        href="/sostienici/5x1000"
                        className="block px-3 py-2 hover:bg-gray-100 rounded"
                      >
                        5×1000{" "}
                        <span className="ml-2 inline-block text-xs rounded-full px-2 py-0.5 bg-green-100 text-green-800">
                          Novità
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sostienici/donazioni" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Donazioni
                      </Link>
                    </li>
                    <li>
                      <Link href="/sostienici/tesseramento" className="block px-3 py-2 hover:bg-gray-100 rounded">
                        Tesseramento
                      </Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <Link href="/news" className="hover:underline">News</Link>
          <Link href="/contatti" className="hover:underline">Contatti</Link>
        </nav>

        {/* User / CTA */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-2 cursor-pointer">
                <User className="w-6 h-6" />
                <span>{user.username}</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="bg-white text-black shadow-lg rounded-md p-2">
                <DropdownMenu.Item asChild>
                  <Link href="/user-dashboard" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Dashboard
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link href="/user-profile" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Profilo
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
                <DropdownMenu.Item
                  onClick={logout}
                  className="px-3 py-2 text-red-600 hover:bg-gray-100 rounded cursor-pointer"
                >
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          ) : (
            <>
              <Link href="/login" className="hover:underline">Login</Link>
              <Link
                href="/register"
                className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Unisciti a Noi
              </Link>
            </>
          )}
        </div>

        <LanguageSwitcher />
        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col md:hidden bg-green-800 px-4 pb-4 space-y-2">
          <Link href="/chi-siamo" onClick={() => setIsOpen(false)}>Chi Siamo</Link>
          <Link href="/eventi" onClick={() => setIsOpen(false)}>Eventi</Link>

          {/* DraCon Ischia accordion */}
          <details className="group">
            <summary className="cursor-pointer">DraCon Ischia</summary>
            <div className="ml-4 flex flex-col gap-2 mt-1">
              <Link href="/draconischia/agenda" onClick={() => setIsOpen(false)}>Programma</Link>
              <Link href="/draconischia/gdr-sessions" onClick={() => setIsOpen(false)}>Sessioni GDR</Link>
              <Link href="/draconischia/main-events" onClick={() => setIsOpen(false)}>Main Events</Link>
              <Link href="/draconischia/regolamenti" onClick={() => setIsOpen(false)}>Regolamenti & FAQ</Link>
              {user?.role === UserRole.ADMIN && (
                <Link href="/draconischia/manage-event" onClick={() => setIsOpen(false)}>Gestisci Eventi</Link>
              )}
              <Link href="/draconischia/old-edition" onClick={() => setIsOpen(false)}>Edizioni Passate</Link>
            </div>
          </details>

          <Link href="/media" onClick={() => setIsOpen(false)}>Media</Link>

          {/* Sostienici accordion */}
          <details className="group">
            <summary className="cursor-pointer">Sostienici</summary>
            <div className="ml-4 flex flex-col gap-2 mt-1">
              <Link href="/sostienici/5x1000" onClick={() => setIsOpen(false)}>5×1000</Link>
              <Link href="/sostienici/donazioni" onClick={() => setIsOpen(false)}>Donazioni</Link>
              <Link href="/sostienici/tesseramento" onClick={() => setIsOpen(false)}>Tesseramento</Link>
            </div>
          </details>

          <Link href="/news" onClick={() => setIsOpen(false)}>News</Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link>

          {user ? (
            <>
              <Link href="/user-dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <Link href="/user-profile" onClick={() => setIsOpen(false)}>Profilo</Link>
              <button
                onClick={() => { logout(); setIsOpen(false) }}
                className="text-left text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg text-center"
              >
                Unisciti a Noi
              </Link>
            </>
          )}
          
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  )
}
