"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useAuth } from "@/context/AuthContext"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { T } from "@/components/ui/T"
import { useMenuVisibility, MenuItemWithFlags } from "@/hooks/useMenuVisibility"
import { checkIsAdmin } from "@/lib/userService"

const MENU_ITEMS: MenuItemWithFlags[] = [
  { idml: "nav.about", defaultText: "Chi Siamo", href: "/chi-siamo", visible: true },
  { idml: "nav.events", defaultText: "Eventi", href: "/events", visible: true },
  {
    idml: "nav.dracon", defaultText: "DraCon Ischia", visible: true,
    children: [ 
      {
        idml: "nav.dracon.homePage", defaultText: "Home", href: "/draconischia", visible: true,
      },
      { idml: "nav.dracon.agenda", defaultText: "Programma", href: "/draconischia/agenda", visible: true},
      { idml: "nav.dracon.sessions", defaultText: "Sessioni GDR", href: "/draconischia/gdr-sessions", visible: true },
      { idml: "nav.dracon.mainEvents", defaultText: "Main Events", href: "/draconischia/main-events", visible: true },
      { idml: "nav.dracon.rules", defaultText: "Regolamenti & FAQ", href: "/draconischia/regulations", visible: true },
      { idml: "nav.dracon.manage", defaultText: "Gestisci Eventi", href: "/draconischia/manage-event", visible: false, forcedVisible: true },
      { idml: "nav.dracon.old", defaultText: "Edizioni Passate", href: "/draconischia/old-edition", visible: false, forcedVisible: true }
    ]
  },
  { idml: "nav.media", defaultText: "Media", href: "/media", visible: false, forcedVisible: false },
  {
    idml: "nav.support", defaultText: "Sostienici", visible: true,
    children: [
      { idml: "nav.support.5x1000", defaultText: "5×1000", href: "/support/5x1000", visible: true },
      { idml: "nav.support.donations", defaultText: "Donazioni", href: "/support/donation", visible: true },
      { idml: "nav.support.membership", defaultText: "Tesseramento", href: "/support/subscription", visible: true }
    ]
  },
  { idml: "nav.news", defaultText: "News", href: "/news", visible: true },
  { idml: "nav.contacts", defaultText: "Contatti", href: "/contatti", visible: true }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const menu = useMenuVisibility(MENU_ITEMS);
  const adminMode = checkIsAdmin(user);

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Titolo */}
        <Link href="/" className="flex items-center gap-3">
          {/* <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src="/logo-drago-verde-nero.png"
              alt="Logo Drago Verde Ischia"
              fill
              className="object-contain rounded-full"
              priority
              style={{ backgroundColor: "white" }}
            />
          </div> */}
          <span className="text-lg font-bold whitespace-nowrap">
            Drago Verde Ischia A.P.S.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {menu.map((item) =>
            item.children ? (
              <DropdownMenu.Root key={item.idml}>
                <DropdownMenu.Trigger
                  className={`hover:text-green-300 transition ${!item.visible && adminMode  ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  <T idml={item.idml} defaultText={item.defaultText} />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-white text-black shadow-lg rounded-md p-2 min-w-[180px]">
                  {item.children?.map((child) => (
                    <DropdownMenu.Item asChild key={child.idml}>
                      <Link
                        href={child.href ?? "#"}
                        className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                          !child.visible && adminMode ? "text-red-600 font-semibold" : ""
                        }`}
                      >
                        <T
                          idml={child.idml}
                          defaultText={child.defaultText}
                        />
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link
                key={item.idml}
                href={item.href ?? "#"}
                className={`hover:text-green-300 transition ${
                  !item.visible && adminMode ? "text-red-600 font-semibold" : ""
                }`}
              >
                <T idml={item.idml} defaultText={item.defaultText} />
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link href="/user/user-dashboard" className="hover:text-green-300">
                <T idml="nav.dashboard" defaultText="Dashboard" />
              </Link>
              <Link href="/user/user-profile" className="hover:text-green-300">
                <T idml="nav.profile" defaultText="Profilo" />
              </Link>
              <button
                onClick={logout}
                className="text-red-400 hover:text-red-300"
              >
                <T idml="nav.logout" defaultText="Logout" />
              </button>
            </>
          ) : (
            <>
              <Link href="/user/login" className="hover:text-green-300">
                <T idml="nav.login" defaultText="Login" />
              </Link>
              <Link
                href="/user/register"
                className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                <T idml="nav.join" defaultText="Unisciti a Noi" />
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-green-900 px-6 pb-6 space-y-3 animate-slide-down">
          {menu.map((item) =>
            item.children ? (
              <details key={item.idml} className="group">
                <summary
                  className={`cursor-pointer py-2 ${
                    !item.visible && adminMode  ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  <T idml={item.idml} defaultText={item.defaultText} />
                </summary>
                <div className="ml-4 flex flex-col gap-2 mt-1">
                  {item.children?.map((child) => (
                    <Link
                      key={child.idml}
                      href={child.href ?? "#"}
                      onClick={() => setIsOpen(false)}
                      className={`hover:text-green-300 ${
                        !child.visible && adminMode  ? "text-red-500 font-semibold" : ""
                      }`}
                    >
                      <T idml={child.idml} defaultText={child.defaultText} />
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.idml}
                href={item.href ?? "#"}
                onClick={() => setIsOpen(false)}
                className={`block py-2 hover:text-green-300 ${
                  !item.visible && adminMode  ? "text-red-500 font-semibold" : ""
                }`}
              >
                <T idml={item.idml} defaultText={item.defaultText} />
              </Link>
            )
          )}

          {/* Footer interno */}
          <div className="border-t border-green-700 pt-4 mt-6 text-sm space-y-2">
            {user ? (
              <>
                <Link href="/user/user-dashboard" onClick={() => setIsOpen(false)}>
                  <T idml="nav.dashboard" defaultText="Dashboard" />
                </Link>
                <Link href="/user/user-profile" onClick={() => setIsOpen(false)}>
                  <T idml="nav.profile" defaultText="Profilo" />
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="block text-left text-red-400 hover:text-red-300 w-full"
                >
                  <T idml="nav.logout" defaultText="Logout" />
                </button>
              </>
            ) : (
              <>
                <Link href="/user/login" onClick={() => setIsOpen(false)}>
                  <T idml="nav.login" defaultText="Login" />
                </Link>
                <Link
                  href="/user/register"
                  onClick={() => setIsOpen(false)}
                  className="block bg-white text-green-700 font-bold px-4 py-2 rounded-lg text-center hover:bg-gray-100"
                >
                  <T idml="nav.join" defaultText="Unisciti a Noi" />
                </Link>
              </>
            )}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
