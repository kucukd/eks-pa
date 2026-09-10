import Link from 'next/link'
import { Eyebrow } from '@/components/section'
import { cn } from '@/lib/utils'

export interface Crumb {
  name: string
  href: string
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: React.ReactNode
  crumbs?: Crumb[]
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden pt-28 md:pt-36 lg:pt-40', className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[110px]" />
      </div>
      <div className="container-page relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span className="opacity-40">/</span>}
                  {i === crumbs.length - 1 ? (
                    <span className="text-foreground">{c.name}</span>
                  ) : (
                    <Link href={c.href} className="transition-colors hover:text-foreground">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <div className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {intro}
            </div>
          )}
        </div>

        {children}
      </div>
    </section>
  )
}
