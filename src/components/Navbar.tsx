"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  return (
    <header className="bg-green-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo + Nome associazione */}
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

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/chi-siamo" className="hover:underline">Chi Siamo</Link>
          <Link href="/draconischia" className="hover:underline">DraCon Ischia</Link>
          <Link href="/eventi" className="hover:underline">Eventi</Link>
          <Link href="/contatti" className="hover:underline">Contatti</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
        {user ? (
          <>
            <Link href="/user-dashboard" className="font-medium hover:underline">
              👋 Ciao, {user.username}
            </Link>
            {user.role === "guest" && (
              <Link
                href="/register"
                className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Unisciti a Noi
              </Link>
            )}
            <button
              onClick={logout}
              className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Unisciti a Noi
            </Link>
          </>
        )}
      </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="flex flex-col md:hidden bg-green-800 px-4 pb-4 space-y-2">
          <Link href="/chi-siamo" onClick={() => setIsOpen(false)}>Chi Siamo</Link>
          <Link href="/eventi" onClick={() => setIsOpen(false)}>Eventi</Link>
          <Link href="/draconischia" onClick={() => setIsOpen(false)}>DraCon Ischia</Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg text-center"
          >
            Unisciti a Noi
          </Link>
        </nav>
      )}
    </header>
  )
}
