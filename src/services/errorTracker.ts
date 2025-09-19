// src/services/errorTracker.ts

export function trackError(error: unknown, context?: string) {
  let message = "Errore sconosciuto"
  let errObj: Error | undefined

  if (error instanceof Error) {
    message = error.message
    errObj = error
  } else if (typeof error === "string") {
    message = error
  } else {
    message = JSON.stringify(error)
  }

  // Log in console (per ora)
  console.error(`[ErrorTracker] ${context ?? "Unhandled"}:`, message, errObj?.stack)

}


