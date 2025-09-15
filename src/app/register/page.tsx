"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import DatePicker from "react-datepicker"
import { format } from "date-fns"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"

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
  const [error, setError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
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
    setIsFormValid(allFilled && passwordsMatch)
  }, [form])

  // Gestione input generici
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Quando seleziono una data dal datepicker
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
    setError("")

    if (form.password !== form.confirmPassword) {
      setError("Le password non coincidono")
      return
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        birthdate: formatForDB(form.birthdate)
      })
    })

    const data = await res.json()
    if (data.error) {
      setError(data.error)
    } else {
      router.push("/login")
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Registrazione</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

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

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border w-full p-2" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border w-full p-2" />
        <input type="password" name="confirmPassword" placeholder="Conferma Password" value={form.confirmPassword} onChange={handleChange} className="border w-full p-2" />
        <input name="phone_number" placeholder="Telefono" value={form.phone_number} onChange={handleChange} className="border w-full p-2" />

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
