/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel's build finalizer expects the standard Next.js output.
  // Railway's Docker build opts into standalone through NEXT_STANDALONE.
  ...(process.env.NEXT_STANDALONE === 'true' ? { output: 'standalone' } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
