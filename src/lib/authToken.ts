import { jwtDecode } from "jwt-decode"
import { httpFetchPublic } from "./http"

let accessToken: string | null = null
let refreshPromise: Promise<string | null> | null = null

export function setAccessToken(token: string | null) {
  accessToken = token
  if (token) {
    localStorage.setItem("accessToken", token)
  } else {
    localStorage.removeItem("accessToken")
  }
}

export const getAccessToken = () => accessToken

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<{ exp: number }>(token)
    return decoded.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

const refreshToken = async (): Promise<string | null> => {
  try {
    const res = await httpFetchPublic("/api/auth/refresh", { method: "POST" })
    if (!res.ok) return null
    const data = await res.json()

    if (data.accessToken) {
      setAccessToken(data.accessToken) // salva in memoria e localStorage
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
    if (!refreshPromise) {
      refreshPromise = refreshToken().finally(() => {
        refreshPromise = null
      })
    }
    return await refreshPromise
  }

  return accessToken
}