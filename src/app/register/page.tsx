"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import DatePicker from "react-datepicker"
import { format } from "date-fns"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"
import { toast } from "@/lib/toast"

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: ""
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isFormValid, setIsFormValid] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const router = useRouter()

  // Genera automaticamente lo username
  useEffect(() => {
    if (form.name && form.surname) {
      const generatedUsername = `${form.name.toLowerCase()}.${form.surname.toLowerCase()}`
        .replace(/\s+/g, "_")
      setForm((prev) => ({ ...prev, username: generatedUsername }))
    }
  }, [form.name, form.surname])

  // Validazione form
  useEffect(() => {
    const allFilled = Object.values(form).every((value) => value.trim() !== "")
    const passwordsMatch = form.password === form.confirmPassword
    const emailValid = !emailError
    const phoneValid = !phoneError
    setIsFormValid(allFilled && passwordsMatch && emailValid && phoneValid)
  }, [form, emailError, phoneError])

  // Gestione input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    // Validazione email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        setEmailError("Email non valida")
      } else {
        setEmailError("")
      }
    }

    // Validazione telefono (solo numeri)
    if (name === "phone_number") {
      const phoneRegex = /^[0-9]*$/
      if (!phoneRegex.test(value)) {
        setPhoneError("Il numero di telefono deve contenere solo cifre")
      } else {
        setPhoneError("")
      }
    }
  }

  // Quando seleziono una data
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    if (date) {
      const formatted = format(date, "dd-MM-yyyy")
      setForm((prev) => ({ ...prev, birthdate: formatted }))
    }
  }

  // Conversione per DB (aaaa-mm-gg)
  const formatForDB = (date: string) => {
    const parts = date.split("-")
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
    return date
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      toast.error("❌ Le password non coincidono")
      return
    }

    toast.loading("Registrazione in corso...")

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          birthdate: formatForDB(form.birthdate)
        })
      })

      toast.dismiss()
      const data = await res.json()

      if (res.ok && !data.error) {
        toast.success("✅ Registrazione completata! Ora puoi accedere.")
        router.push("/login")
      } else {
        toast.error(data.error || "❌ Errore durante la registrazione")
      }
    } catch (err) {
      toast.dismiss()
      console.error("Errore registrazione:", err)
      toast.error("❌ Errore di connessione al server")
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Registrazione</h1>

      <form onSubmit={handleRegister} className="space-y-4">
        <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} className="border w-full p-2" />
        <input name="surname" placeholder="Cognome" value={form.surname} onChange={handleChange} className="border w-full p-2" />
        <input name="username" placeholder="Username" value={form.username} readOnly className="border w-full p-2 bg-gray-100 cursor-not-allowed" />

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          locale={it}
          placeholderText="gg-mm-aaaa"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          className="border w-full p-2"
          wrapperClassName="w-full"
        />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`border w-full p-2 ${emailError ? "border-red-500" : ""}`}
          />
          {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
        </div>

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border w-full p-2" />
        <input type="password" name="confirmPassword" placeholder="Conferma Password" value={form.confirmPassword} onChange={handleChange} className="border w-full p-2" />

        <div>
          <input
            name="phone_number"
            placeholder="Telefono"
            value={form.phone_number}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
            className={`border w-full p-2 ${phoneError ? "border-red-500" : ""}`}
          />
          {phoneError && <p className="text-red-600 text-sm mt-1">{phoneError}</p>}
        </div>

        <button
          className={`px-4 py-2 rounded w-full text-white ${isFormValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={!isFormValid}
        >
          Registrati
        </button>
      </form>
    </div>
  )
}
