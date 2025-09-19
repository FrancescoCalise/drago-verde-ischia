import { toast as sonner } from "sonner"

// Successo (verde)
export const showSuccess = (message: string) =>{
  dismissAll();
  sonner.success(message, {
    style: { background: "#16a34a", color: "white" },
  })
}

// Errore (rosso)
export const showError = (message: string) => {
  dismissAll();
  sonner.error(message, {
    style: { background: "#dc2626", color: "white" },
  })
}

// Warning (arancione)
export const showWarning = (message: string) => {
  dismissAll();
  sonner.warning(message, {
    icon: "⚠️",
    style: { background: "#f59e0b", color: "white" },
  })
}

// Info (grigio)
export const showInfo = (message: string) => {
  dismissAll();
  sonner.info(message, {
    icon: "ℹ️",
    style: { background: "#374151", color: "white" },
  })
}
// Loading (blu)
export const showLoading = (message: string) => {
  dismissAll();
  sonner.loading(message, {
    style: { background: "#2563eb", color: "white" },
  })
}

// Dismiss di tutti i toast attivi
export const dismissAll = () => sonner.dismiss()

// Export centralizzato
export const toast = {
  success: showSuccess,
  error: showError,
  warning: showWarning,
  info: showInfo,
  loading: showLoading,
  dismiss: dismissAll,
}
