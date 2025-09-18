/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as string

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET mancante in .env")
}

export type DecodedUser = {
  id: string
  username: string
  role: string
}

export async function requireAuth(req: Request, roles?: string[]) {
  const auth = req.headers.get("authorization") || ""
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null

  if (!token) {
    return { ok: false, response: NextResponse.json({ error: "Non autorizzato" }, { status: 401 }) }
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedUser

    if (roles && !roles.includes(decoded.role || "")) {
      return { ok: false, response: NextResponse.json({ error: "Permesso negato" }, { status: 403 }) }
    }

    return { ok: true, user: decoded }
  } catch (err: any) {
    return { ok: false, response: NextResponse.json({ error: err.message }, { status: 401 }) }
  }
}
