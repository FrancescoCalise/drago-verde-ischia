// src/lib/apiResponse.ts
import { NextResponse } from "next/server"
import type { ApiResponse } from "@/interfaces/ApiResponse"

export function successResponse<T>(
  data: T,
  idml: string,
  message = "Operazione completata",
  status = 200
) {
  const body: ApiResponse<T> = { success: true, status, idml, message, data }
  return NextResponse.json(body, { status })
}

export function errorResponse(
  idml: string,
  message: string,
  status = 500,
  data?: unknown
) {
  const body: ApiResponse = { success: false, status, idml, message, data }
  body.errorCode = getNewId();
  
  return NextResponse.json(body, { status })
}

function getNewId() {
  return crypto.randomUUID()
}

