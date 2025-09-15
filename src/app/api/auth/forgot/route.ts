import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import jwt from "jsonwebtoken"
import { sendResetPasswordEmail } from "@/lib/mailer"

const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: Request) {
  const { username, email } = await req.json()

  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("email", email)
    .limit(1)

  if (!users || users.length === 0) {
    return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
  }

  const user = users[0]

  // Token valido 15 minuti
  const resetToken = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "15m" }
  )

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`

  try {
    await sendResetPasswordEmail(user.email, user.name, resetUrl)
  } catch (err) {
    console.error("Errore invio email reset:", err)
  }

  return NextResponse.json({ message: "Email di reset inviata" })
}
