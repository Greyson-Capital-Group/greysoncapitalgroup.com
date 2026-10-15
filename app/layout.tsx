import type { Metadata } from 'next';
import '@fontsource/eb-garamond/500.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SHOW_REVIEW_NOTES } from '@/data/site';
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
        {SHOW_REVIEW_NOTES && <div className="preview-banner">Preview build · Not for publication · Yellow tags mark items to confirm</div>}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
