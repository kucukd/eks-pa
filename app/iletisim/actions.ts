"use server"

import { z } from "zod"
import { company } from "@/lib/company-config"

type Locale = "tr" | "en"

const messages = {
  tr: {
    name: "Lütfen adınızı girin.",
    email: "Geçerli bir e-posta adresi girin.",
    topic: "Lütfen bir konu seçin.",
    message: "Mesajınız en az 10 karakter olmalı.",
    kvkk: "Devam etmek için KVKK metnini onaylayın.",
    formError: "Formu gönderemedik. Lütfen işaretli alanları düzeltin.",
    honeypotOk: "Teşekkürler. Talebiniz alındı.",
    success: (first: string) =>
      `Teşekkürler, ${first}. Talebiniz ekibimize iletildi; en kısa sürede dönüş yapacağız.`,
  },
  en: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    topic: "Please select a topic.",
    message: "Your message must be at least 10 characters.",
    kvkk: "Please accept the data protection notice to continue.",
    formError: "We couldn't submit the form. Please correct the highlighted fields.",
    honeypotOk: "Thank you. Your request has been received.",
    success: (first: string) =>
      `Thank you, ${first}. Your request has reached our team and we'll get back to you shortly.`,
  },
} as const

function buildSchema(m: (typeof messages)[Locale]) {
  return z.object({
    name: z.string().min(2, m.name).max(120),
    email: z.string().email(m.email),
    company: z.string().max(160).optional().or(z.literal("")),
    phone: z.string().max(40).optional().or(z.literal("")),
    topic: z.string().min(1, m.topic),
    message: z.string().min(10, m.message).max(4000),
    kvkk: z.literal("on", { message: m.kvkk }),
    // Honeypot — must stay empty
    website: z.string().max(0).optional().or(z.literal("")),
  })
}

export type ContactState = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const locale: Locale = formData.get("locale") === "en" ? "en" : "tr"
  const m = messages[locale]

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    message: String(formData.get("message") ?? ""),
    kvkk: String(formData.get("kvkk") ?? ""),
    website: String(formData.get("website") ?? ""),
  }

  const parsed = buildSchema(m).safeParse(raw)

  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]
      if (typeof key === "string" && !errors[key]) errors[key] = issue.message
    }
    return {
      ok: false,
      message: m.formError,
      errors,
    }
  }

  // Honeypot triggered — silently accept without processing.
  if (parsed.data.website) {
    return { ok: true, message: m.honeypotOk }
  }

  // No email integration was requested; record the submission on the server.
  // Swap this block for an email/CRM integration when available.
  console.log("[v0] Contact submission:", {
    to: company.email,
    locale,
    ...parsed.data,
    website: undefined,
    receivedAt: new Date().toISOString(),
  })

  return {
    ok: true,
    message: m.success(parsed.data.name.split(" ")[0]),
  }
}
