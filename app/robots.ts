import type { MetadataRoute } from "next"
import { company } from "@/lib/company-config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${company.baseUrl}/sitemap.xml`,
    host: company.baseUrl,
  }
}
