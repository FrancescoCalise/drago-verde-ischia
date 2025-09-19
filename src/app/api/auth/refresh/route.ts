import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

const JWT_SECRET = process.env.JWT_SECRET!
const REFRESH_SECRET = process.env.REFRESH_SECRET!

export async function POST(req: Request) {
  try {
    // Leggo i cookie
    const cookieHeader = req.headers.get("cookie")
    const cookies: Record<string, string> = {}
    cookieHeader?.split(";").forEach((cookie) => {
      const [name, ...rest] = cookie.trim().split("=")
      cookies[name] = decodeURIComponent(rest.join("="))
    })

    const refreshToken = cookies["refreshToken"]
    if (!refreshToken) {
      return errorResponse("auth.refresh_missing", "Refresh token mancante", 401)
    }

    // Verifico refresh token
    let payload: { id: string }
    try {
      payload = jwt.verify(refreshToken, REFRESH_SECRET) as { id: string }
    } catch (err) {
      const message = (err as Error).message
      return errorResponse("auth.refresh_invalid", message, 403)
    }

    // Recupero utente dal DB
    const user = await prisma.appUser.findUnique({
      where: { id: payload.id },
      include: {
        GdrSessionRegistrations: { include: { session: true } },
        mainEventRegistrations: { include: { event: true } },
      },
    })

    if (!user) {
      return errorResponse("auth.user_not_found", "Utente non trovato", 404)
    }

    // Creo nuovo access token
    const accessToken = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    )

    return successResponse(
      { accessToken, user },
      "auth.refresh_success",
      "Refresh token valido, nuovo access token generato",
      200
    )
  } catch (err) {
    trackError(err, "POST /api/auth/refresh")
    return errorResponse("auth.refresh_error", "Errore durante il refresh del token", 500)
  }
}
