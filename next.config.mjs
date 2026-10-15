// Old URLs from the 2022 site forward to the new pages (permanent 301s).
const current = ['chicksaw-at-the-greenline', 'highpoint-at-the-greenline', 'twin-oaks-apartments'];
const sold = ['clearbrook-village-apartments', 'millington-oaks-apartments', 'kings-trees-apartments', 'park-place-apartments', 'villas-at-cedar-creek', 'hickory-grove-apartments', 'woodmere-reserve'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/about-greyson', destination: '/about', permanent: true },
      { source: '/membership', destination: '/investors', permanent: true },
      { source: '/properties', destination: '/current-holdings', permanent: true },
      ...current.map((s) => ({ source: `/properties/${s}`, destination: '/current-holdings', permanent: true })),
      ...sold.map((s) => ({ source: `/properties/${s}`, destination: '/track-record', permanent: true })),
      { source: '/properties/:slug', destination: '/current-holdings', permanent: true },
      { source: '/terms-of-use', destination: '/privacy-policy', permanent: false },
      { source: '/latest-news', destination: '/about', permanent: true },
      { source: '/latest-news/:slug', destination: '/about', permanent: true },
    ];
  },
};
export default nextConfig;
