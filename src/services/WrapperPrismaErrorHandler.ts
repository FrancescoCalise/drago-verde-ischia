// src/services/WrapperPrismaErrorHandler.ts
import { Prisma } from "@prisma/client"
import { errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

/**
 * Mappa gli errori Prisma in errorResponse uniformi
 */
export function mapPrismaError(err: unknown, context?: string) {
  if ((err as Error).name === "PrismaClientKnownRequestError") {
    const prismaErr = err as Prisma.PrismaClientKnownRequestError

    switch (prismaErr.code) {
      case "P2002":
         // Vincolo unico duplicato
      const target = (prismaErr.meta?.target ?? []) as string[]  // può essere string[] o string
      let fields: string[]
      if (Array.isArray(target)) {
        fields = target
      } else {
        // se target è singolo string, trasformalo in array
        fields = [String(target)]
      }

      // costruisci messaggio dipendente
      const idml = "db.unique_violation"
      const defaultMessage = `${fields.join(", ")}, già in uso`

      return errorResponse(
        idml,
        defaultMessage,
        409,
        { fields } // se vuoi includere i campi nel campo `data` o `extra`
      )
    
      case "P2025":
        // Record not found
        return errorResponse(
          "db.record_not_found",
          "Record non trovato",
          404
        )
      default:
        return errorResponse(
          "db.known_error",
          `Errore Prisma: ${prismaErr.code}`,
          500
        )
    }
  }

  trackError(err, context)
  return errorResponse(
    "db.unknown_error",
    "Errore database sconosciuto",
    500
  )
}
