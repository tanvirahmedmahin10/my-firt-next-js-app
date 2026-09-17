/** @type {import('next').NextConfig} */
const nextConfig = {
  //"https://content.screen.nsw.gov.au/assets/Uploads/Past-productions/valorant.webp"
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
       {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
