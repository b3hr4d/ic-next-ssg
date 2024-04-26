/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 100,
}

export default nextConfig
