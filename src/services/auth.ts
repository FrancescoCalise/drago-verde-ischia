import { jwtDecode } from "jwt-decode"
import { httpFetch } from "@/services/http/httpFetch"

let accessToken: string | null = null
let refreshPromise: Promise<string | null> | null = null

// ---- Token ----
export function setAccessToken(token: string | null) {
  accessToken = token
  if (token) {
    localStorage.setItem("accessToken", token)
  } else {
    localStorage.removeItem("accessToken")
  }
}

export function getAccessToken(): string | null {
  return accessToken ?? localStorage.getItem("accessToken")
}

function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<{ exp: number }>(token)
    return decoded.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

// ---- Refresh ----
async function refreshToken(): Promise<string | null> {
  try {
    const res = await httpFetch<{ accessToken?: string }>("/api/auth/refresh","POST", null,  false );
    if(res.success && res.data){
      const data = res.data
    if (data.accessToken) {
      setAccessToken(data.accessToken)
      return data.accessToken
    }
  }
  } catch {
    return null
  }

  return null
}

// ---- Valid token ----
export async function getValidToken(): Promise<string | null> {
  if (!accessToken) {
    accessToken = localStorage.getItem("accessToken")
    if (!accessToken) return null
  }

  if (isTokenExpired(accessToken)) {
    if (!refreshPromise) {
      refreshPromise = refreshToken().finally(() => {
        refreshPromise = null
      })
    }
    return await refreshPromise
  }

  return accessToken
}

// ---- Logout ----
export async function logoutService() {
  try {
    await httpFetch("/api/auth/logout", "POST", null, false)
  } finally {
    setAccessToken(null)
    localStorage.removeItem("user")
  }
}
