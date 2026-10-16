import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import { SHOW_REVIEW_NOTES } from '@/data/site';

export const metadata = { title: 'Hero options (review)', robots: { index: false, follow: false } };

// Review-only page: both homepage hero options, stacked. Not built on the launch site.
export default function HeroOptionsPage() {
  if (!SHOW_REVIEW_NOTES) notFound();
  return (
    <>
      <div className="review-strip"><div className="wrap"><span className="note">Option A</span> To pick one, set <code>heroVariant</code> in content/flags.json.</div></div>
      <Hero variant="A" label="Option A" />
      <div className="review-strip"><div className="wrap"><span className="note">Option B</span></div></div>
      <Hero variant="B" label="Option B" />
    </>
  );
}
