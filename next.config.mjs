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
};

export default nextConfig;
