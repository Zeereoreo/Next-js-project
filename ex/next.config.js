/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: 'https',
                hostname: 'www.notion.so',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            ],
        },

}

module.exports = nextConfig
