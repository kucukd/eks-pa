import Link from "next/link"
import { CtaLink } from "@/components/ui/cta"

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center border-b border-ink-900 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand-400">404</p>
        <h1 className="mt-4 text-balance font-serif text-4xl text-ink-50 sm:text-5xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-ink-300">
          Bağlantı taşınmış veya kaldırılmış olabilir. Ana sayfaya dönebilir ya da çözümlerimizi
          inceleyebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href="/">Ana sayfaya dön</CtaLink>
          <Link
            href="/cozumler"
            className="text-sm font-medium text-ink-200 underline underline-offset-4 hover:text-ink-50"
          >
            Çözümleri keşfet
          </Link>
        </div>
      </div>
    </section>
  )
}
