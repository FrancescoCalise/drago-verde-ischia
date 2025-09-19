import { errorResponse, successResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export async function POST() {
  try {
    const res = successResponse(null, "auth.logout_success", "Logout effettuato", 200)

    // Cancella refreshToken
    res.cookies.set("refreshToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0), // scadenza passata → elimina cookie
    })

    return res
  } catch (err) {
    trackError(err, "POST /api/auth/logout")
    return errorResponse("auth.logout_error", "Errore durante il logout", 500)
  }
}
