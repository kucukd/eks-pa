"use client"

import { useActionState } from "react"
import { submitContact, type ContactState } from "@/app/iletisim/actions"
import { track } from "@/lib/analytics"
import { getDictionary } from "@/lib/dictionary"
import { route, type Locale } from "@/lib/i18n"

const initialState: ContactState = { ok: false, message: "" }

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm text-destructive" role="alert">
      {message}
    </p>
  )
}

export function ContactForm({ locale }: { locale: Locale }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const t = getDictionary(locale).form

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary/15">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-primary" aria-hidden="true">
            <path
              d="m5 13 4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
          {t.successTitle}
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const inputBase =
    "w-full rounded-xl border border-border bg-ink-950/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"

  return (
    <form
      action={formAction}
      onSubmit={() => track("contact_submit_attempt")}
      className="grid gap-5"
      noValidate
    >
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.name} <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputBase}
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "err-name" : undefined}
            placeholder={t.namePlaceholder}
          />
          <FieldError id="err-name" message={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.email} <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputBase}
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? "err-email" : undefined}
            placeholder={t.emailPlaceholder}
          />
          <FieldError id="err-email" message={state.errors?.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputBase}
            placeholder={t.companyPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputBase}
            placeholder="+90 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-foreground">
          {t.topic} <span className="text-primary">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className={inputBase + " appearance-none"}
          aria-invalid={!!state.errors?.topic}
          aria-describedby={state.errors?.topic ? "err-topic" : undefined}
        >
          <option value="" disabled>
            {t.topicPlaceholder}
          </option>
          {t.topics.map((tp) => (
            <option key={tp} value={tp}>
              {tp}
            </option>
          ))}
        </select>
        <FieldError id="err-topic" message={state.errors?.topic} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          {t.message} <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputBase + " resize-y"}
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? "err-message" : undefined}
          placeholder={t.messagePlaceholder}
        />
        <FieldError id="err-message" message={state.errors?.message} />
      </div>

      <div>
        <label htmlFor="kvkk" className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            id="kvkk"
            name="kvkk"
            type="checkbox"
            value="on"
            required
            className="mt-0.5 size-4 shrink-0 rounded border-border bg-ink-950 text-primary focus:ring-primary/40"
            aria-invalid={!!state.errors?.kvkk}
            aria-describedby={state.errors?.kvkk ? "err-kvkk" : undefined}
          />
          <span>
            {t.kvkkBefore}{" "}
            <a
              href={route(locale, "kvkk")}
              className="text-primary underline underline-offset-2 hover:opacity-80"
            >
              {t.kvkkLink}
            </a>{" "}
            {t.kvkkAfter} <span className="text-primary">*</span>
          </span>
        </label>
        <FieldError id="err-kvkk" message={state.errors?.kvkk} />
      </div>

      {!state.ok && state.message ? (
        <p className="text-sm text-destructive" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? t.submitting : t.submit}
      </button>
    </form>
  )
}
