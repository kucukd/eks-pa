import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Official EKS-PA logo (sourced from eks-pa.com.tr).
 * - variant "light" renders a white monochrome version for dark surfaces
 *   (header/footer on the navy theme).
 * - variant "color" renders the original blue/black brand mark for light surfaces.
 */
export function Logo({
  className,
  variant = 'light',
  href = '/',
}: {
  className?: string
  variant?: 'light' | 'color'
  href?: string
}) {
  return (
    <Link
      href={href}
      aria-label="EKS-PA"
      className={cn('group inline-flex items-center outline-none', className)}
    >
      <Image
        src="/images/ekspa-logo.png"
        alt="EKS-PA Sistem Entegratörü"
        width={1530}
        height={330}
        priority
        className={cn(
          'h-9 w-auto transition-opacity duration-300 group-hover:opacity-90',
          variant === 'light' && '[filter:brightness(0)_invert(1)]',
        )}
      />
    </Link>
  )
}
