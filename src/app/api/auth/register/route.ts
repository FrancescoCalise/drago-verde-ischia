import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hashPassword } from "@/lib/auth"
import { sendWelcomeEmail } from "@/lib/mailer"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, surname, email, password, username, birthdate, phone_number } = body

  const hashedPassword = await hashPassword(password)

  const { data, error } = await supabase.from("users").insert([
    {
      username,
      password: hashedPassword,
      name,
      surname,
      birthdate,
      email,
      phone_number,
      role: "guest"
    }
  ]).select().single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  // Invia email di benvenuto
  try {
    await sendWelcomeEmail(email, username, name)
  } catch (mailErr) {
    console.error("Errore invio email:", mailErr)
  }

  return NextResponse.json({ message: "User registered successfully", username })
}
