import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { verifyPassword } from "@/lib/auth"  // usa bcrypt.compare
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET;
export async function POST(req: Request) {
  const { username, password } = await req.json()
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables")
  }

  // recupero user
  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .limit(1)

  if (!users || users.length === 0) {
    return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
  }

  const user = users[0]

  // verifica password
  const valid = await verifyPassword(password, user.password)
  if (!valid) {
    return NextResponse.json({ error: "Credenziali non valide" }, { status: 401 })
  }

  // genera token
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  )

  // restituisco al client
  return NextResponse.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      name: user.name,
      surname: user.surname,
      email: user.email
    }
  })
}
