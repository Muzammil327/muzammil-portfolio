/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "cdn.sanity.io", 
            "assets.website-files.com",
            "images.unsplash.com",
            "source.layoutflow.com"
        ],
      }
}

module.exports = nextConfig
