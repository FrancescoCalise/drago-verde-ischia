import { jwtDecode } from "jwt-decode"

let accessToken: string | null = null

export const setAccessToken = (token: string | null) => {
  accessToken = token
  if (token) {
    localStorage.setItem("accessToken", token)
  } else {
    localStorage.removeItem("accessToken")
  }
}

export const getAccessToken = () => accessToken

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<{ exp: number }>(token)
    return decoded.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

export const refreshToken = async (): Promise<string | null> => {
  try {
    const res = await fetch("/api/auth/refresh", { method: "POST" })
    if (!res.ok) return null
    const data = await res.json()
    if (data.accessToken) {
      setAccessToken(data.accessToken)
      return data.accessToken
    }
  } catch {
    return null
  }
  return null
}

export const getValidToken = async (): Promise<string | null> => {
  if (!accessToken) {
    accessToken = localStorage.getItem("accessToken")
    if (!accessToken) return null
  }
  if (isTokenExpired(accessToken)) {
    return await refreshToken()
  }
  return accessToken
}
