import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AuthProvider } from "@/context/AuthContext"
import { ModalProvider } from "@/components/ModalProvider"
import GlobalSpinner from "@/components/GolbalSpinner"
import I18nProvider from "@/providers/I18nProvider"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Drago Verde Ischia A.P.S.",
  description: "Associazione ludica di promozione sociale a Ischia. Giochi da tavolo, di ruolo e molto altro.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="flex flex-col min-h-screen">
        <I18nProvider>
        <AuthProvider>
          <ModalProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Toaster richColors position="bottom-center" />
            <Footer />
          <GlobalSpinner />
          </ModalProvider>
        </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
