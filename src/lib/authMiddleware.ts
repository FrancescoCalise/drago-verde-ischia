import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as string

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET mancante in .env")
}

export type DecodedUser = {
  id: string
  username: string
  role?: string
}

export async function requireAuth(req: Request, roles?: string[]) {
  const auth = req.headers.get("authorization") || ""
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null
  console.log(req.headers);
  console.log(token);
  if (!token) {
    return { error: NextResponse.json({ error: "Non autorizzato" }, { status: 401 }) }
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedUser

    if (roles && !roles.includes(decoded.role || "")) {
      return { error: NextResponse.json({ error: "Permesso negato" }, { status: 403 }) }
    }

    return { user: decoded }
  } catch (err) {
    return { error: NextResponse.json({ error: "Token non valido" }, { status: 401 }) }
  }
}
