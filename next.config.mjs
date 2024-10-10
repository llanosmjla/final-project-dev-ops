/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'crests.football-data.org',
                port: '',
                pathname: '/**',
            },
        ],
    },
    env: {
        URL_API: process.env.URL_API,
        VERSION: process.env.VERSION,
        API_KEY: process.env.API_KEY,
    },
};

export default nextConfig;
