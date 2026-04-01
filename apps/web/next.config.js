/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3004/api/:path*',
            },
            {
                source: '/uploads/:path*',
                destination: 'http://localhost:3004/uploads/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
