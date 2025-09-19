import { NextResponse } from "next/server"

export async function POST() {
  const res = NextResponse.json({ message: "Logout effettuato" })
  res.cookies.set("refreshToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0), // scadenza passata → elimina cookie
  })
  return res
}
