import { company, verified } from '@/lib/company-config'

/** Renders a JSON-LD script tag. Server component, no client JS. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, server-generated structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  const email = verified(company.email)
  const sameAs = verified(company.social.linkedin)

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    alternateName: company.name,
    url: company.baseUrl,
    foundingDate: String(company.founded),
    description: company.valueProposition,
    slogan: company.brandLine,
    ...(email ? { email } : {}),
    ...(sameAs ? { sameAs: [sameAs] } : {}),
  }

  return <JsonLd data={data} />
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  if (items.length === 0) return null
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return <JsonLd data={data} />
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${company.baseUrl}${item.href}`,
    })),
  }
  return <JsonLd data={data} />
}
