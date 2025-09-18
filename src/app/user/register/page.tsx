"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import DatePicker from "react-datepicker"
import { format } from "date-fns"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"
import { toast } from "@/lib/toast"
import { httpFetchPublic } from "@/lib/http"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"
import { ResponsiveCard } from "@/components/ui/custom/ResponsiveCard"

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isFormValid, setIsFormValid] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (form.name && form.surname) {
      const generatedUsername = `${form.name.toLowerCase()}.${form.surname.toLowerCase()}`.replace(/\s+/g, "_")
      setForm((prev) => ({ ...prev, username: generatedUsername }))
    }
  }, [form.name, form.surname])

  useEffect(() => {
    const allFilled = Object.values(form).every((value) => value.trim() !== "")
    const passwordsMatch = form.password === form.confirmPassword
    const emailValid = !emailError
    const phoneValid = !phoneError
    setIsFormValid(allFilled && passwordsMatch && emailValid && phoneValid)
  }, [form, emailError, phoneError])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setEmailError(emailRegex.test(value) ? "" : "Email non valida")
    }

    if (name === "phone_number") {
      const phoneRegex = /^[0-9]*$/
      setPhoneError(phoneRegex.test(value) ? "" : "Il numero deve contenere solo cifre")
    }
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    if (date) {
      const formatted = format(date, "dd-MM-yyyy")
      setForm((prev) => ({ ...prev, birthdate: formatted }))
    }
  }

  const formatForDB = (date: string) => {
    const parts = date.split("-")
    if (parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`
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
      const res = await httpFetchPublic("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          birthdate: formatForDB(form.birthdate),
        }),
      })

      toast.dismiss()
      const data = await res.json()

      if (res.ok && !data.error) {
        toast.success("✅ Registrazione completata! Ora puoi accedere.")
        router.push("/user/login")
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
    <ResponsiveCard>
      <ResponsiveCard.Header className="text-center">
        <ResponsiveCard.Title className="text-2xl font-bold text-gray-800">
          <T idml="register.title" defaultText="Registrazione" />
        </ResponsiveCard.Title>
      </ResponsiveCard.Header>
      <ResponsiveCard.Content>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">
              <T idml="register.name" defaultText="Nome" />
            </Label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Mario"
            />
          </div>

          {/* Cognome */}
          <div className="space-y-2">
            <Label htmlFor="surname">
              <T idml="register.surname" defaultText="Cognome" />
            </Label>
            <Input
              name="surname"
              value={form.surname}
              onChange={handleChange}
              placeholder="Rossi"
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">
              <T idml="register.username" defaultText="Username" />
            </Label>
            <Input
              name="username"
              value={form.username}
              readOnly
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Data di nascita */}
          <div className="space-y-2">
            <Label htmlFor="birthdate">
              <T idml="register.birthdate" defaultText="Data di nascita" />
            </Label>
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
              className="w-full border rounded-md p-2"
              wrapperClassName="w-full"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              <T idml="register.email" defaultText="Email" />
            </Label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={emailError ? "border-red-500" : ""}
            />
            {emailError && (
              <p className="text-red-600 text-sm">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">
              <T idml="register.password" defaultText="Password" />
            </Label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* Conferma password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              <T
                idml="register.confirmPassword"
                defaultText="Conferma Password"
              />
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className={
                form.confirmPassword && form.password !== form.confirmPassword
                  ? "border-red-500"
                  : ""
              }
            />
            {form.confirmPassword &&
              form.password !== form.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">
                  <T
                    idml="register.passwordMismatch"
                    defaultText="Le password non coincidono"
                  />
                </p>
              )}
          </div>

          {/* Telefono */}
          <div className="space-y-2">
            <Label htmlFor="phone_number">
              <T idml="register.phone" defaultText="Telefono" />
            </Label>
            <Input
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              className={phoneError ? "border-red-500" : ""}
            />
            {phoneError && (
              <p className="text-red-600 text-sm">{phoneError}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!isFormValid}
            variant={isFormValid ? "default" : "secondary"}
          >
            <T idml="register.submit" defaultText="Registrati" />
          </Button>
        </form>
      </ResponsiveCard.Content>
    </ResponsiveCard>
)

}
