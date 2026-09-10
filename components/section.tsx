import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('mono-label inline-flex items-center gap-2 text-primary', className)}>
      <span className="h-px w-6 bg-primary/50" aria-hidden />
      {children}
    </span>
  )
}

export function Section({
  children,
  className,
  id,
  as: Tag = 'section',
}: {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
}) {
  return (
    <Tag id={id} className={cn('py-20 md:py-28 lg:py-32', className)}>
      {children}
    </Tag>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className={cn('max-w-2xl text-pretty leading-relaxed text-muted-foreground', align === 'center' && 'mx-auto')}>
          {intro}
        </p>
      )}
    </div>
  )
}
