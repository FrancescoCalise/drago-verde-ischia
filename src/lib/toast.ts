import hotToast from "react-hot-toast"

export const showSuccess = (message: string) =>
  hotToast.success(message, {
    style: { background: "#16a34a", color: "white" }, // verde
  })

export const showError = (message: string) =>
  hotToast.error(message, {
    style: { background: "#dc2626", color: "white" }, // rosso
  })

export const showWarning = (message: string) =>
  hotToast(message, {
    icon: "⚠️",
    style: { background: "#f59e0b", color: "white" }, // arancione
  })

export const showInfo = (message: string) =>
  hotToast(message, {
    icon: "ℹ️",
    style: { background: "#374151", color: "white" }, // grigio
  })

export const showLoading = (message: string) =>
  hotToast.loading(message, {
    style: { background: "#2563eb", color: "white" }, // blu
  })

export const dismissAll = () => hotToast.dismiss()

// 🔑 Export centralizzato
export const toast = {
  success: showSuccess,
  error: showError,
  warning: showWarning,
  info: showInfo,
  loading: showLoading,
  dismiss: dismissAll,
}
