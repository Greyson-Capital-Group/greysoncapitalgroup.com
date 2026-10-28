// Old URLs from the 2022 site forward to the new pages (permanent 301s).
const current = ['chicksaw-at-the-greenline', 'highpoint-at-the-greenline', 'twin-oaks-apartments'];
const sold = ['clearbrook-village-apartments', 'millington-oaks-apartments', 'kings-trees-apartments', 'park-place-apartments', 'villas-at-cedar-creek', 'hickory-grove-apartments', 'woodmere-reserve'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  // The site uses plain <img> tags with pre-compressed files, so the server-side image
  // optimizer is switched off. That removes the /_next/image endpoint, the part of Next.js
  // behind most 2025–2026 critical advisories.
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/about-greyson', destination: '/about', permanent: true },
      { source: '/membership', destination: '/investors', permanent: true },
      { source: '/properties', destination: '/current-holdings', permanent: true },
      ...current.map((s) => ({ source: `/properties/${s}`, destination: '/current-holdings', permanent: true })),
      ...sold.map((s) => ({ source: `/properties/${s}`, destination: '/track-record', permanent: true })),
      { source: '/properties/:slug', destination: '/current-holdings', permanent: true },
      { source: '/terms-of-use', destination: '/privacy-policy', permanent: false },
      { source: '/latest-news', destination: '/#latest', permanent: true },
      { source: '/latest-news/:slug', destination: '/#latest', permanent: true },
    ];
  },
};
export default nextConfig;
