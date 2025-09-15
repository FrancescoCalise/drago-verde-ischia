import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!

export function verifyAuth(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization")
    if (!authHeader) {
      return { valid: false, error: "Missing Authorization header" }
    }

    const token = authHeader.split(" ")[1]
    if (!token) {
      return { valid: false, error: "Token not found" }
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    return { valid: true, decoded }
  } catch (err) {
    return { valid: false, error: "Invalid or expired token" }
  }
}
