// src/interfaces/ApiResponse.ts
export interface ApiResponse<T = unknown> {
  success: boolean
  status: number
  idml: string            // chiave di traduzione (es. "auth.invalid_credentials")
  errorCode?: string           // campo error tecnico, se serve
  message?: string         // messaggio di fallback leggibile
  data?: T                 // payload opzionale
}
// -----------------------------------------------------------------------------