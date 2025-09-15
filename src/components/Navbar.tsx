"use client"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="flex justify-between items-center p-4 bg-green-700 text-white">
      <Link href="/" className="font-bold">Drago Verde Ischia</Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        ) : (
          <Link href="/login" className="bg-blue-500 px-3 py-1 rounded">Login</Link>
        )}
      </div>
    </nav>
  )
}
