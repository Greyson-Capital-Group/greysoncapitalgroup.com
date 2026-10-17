import type { Metadata } from 'next';
import '@fontsource/eb-garamond/500.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GA_ID, SHOW_REVIEW_NOTES } from '@/data/site';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://www.greysoncapitalgroup.com'),
  title: { default: 'Greyson Capital Group', template: '%s · Greyson Capital Group' },
  description: 'Greyson Capital Group acquires, improves and operates multifamily communities.',
  openGraph: { images: ['/img/logo_lockup_black.png'] },
  robots: SHOW_REVIEW_NOTES ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={SHOW_REVIEW_NOTES ? '' : 'launch'}>
        {SHOW_REVIEW_NOTES && <div className="preview-banner">Preview build · Not for publication · Tags: blue = draft for Justin to read · yellow = Justin · red = counsel</div>}
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics (same property as the 2022 site). Only loads on the launched site, not in preview. */}
        {!SHOW_REVIEW_NOTES && GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
