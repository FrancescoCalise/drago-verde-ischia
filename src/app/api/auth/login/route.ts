import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"
import { verifyPassword } from "@/lib/authUtils"

const JWT_SECRET = process.env.JWT_SECRET!
const REFRESH_SECRET = process.env.REFRESH_SECRET!

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const user = await prisma.appUser.findUnique({ where: { username } })
    if (!user) {
      return errorResponse("auth.user_not_found", "Utente non trovato", 404)
    }

    const valid = await verifyPassword(password, user.password)
    if (!valid) {
      return errorResponse("auth.invalid_credentials", "Credenziali non valide", 401)
    }

    // Access token
    const accessToken = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    )

    // Refresh token
    const refreshToken = jwt.sign(
      { id: user.id },
      REFRESH_SECRET,
      { expiresIn: "7d" }
    )

    // Response uniforme
    const res = successResponse(
      { accessToken, user },
      "auth.login_success",
      "Login effettuato con successo",
      200
    )

    // Impostiamo cookie refresh
    res.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 giorni
    })

    return res
  } catch (err) {
    trackError(err, "POST /api/auth/login")
    return errorResponse("auth.login_error", "Errore durante il login", 500)
  }
}
