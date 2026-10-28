import { notFound } from 'next/navigation';
import HoldingsTabs from '@/components/HoldingsTabs';
import { Tag } from '@/components/Flags';
import { aliceSprings as a, fmtMonth, isVisible } from '@/lib/content';
import { SCHEDULE_URL, SHOW_REVIEW_NOTES } from '@/data/site';

export const metadata = {
  title: 'Current Holdings · Outdoor Hospitality',
  description: 'Alice Springs RV Park & Resort in Ionia, Michigan: Greyson’s pilot in outdoor hospitality.',
};

// Sources: Alice Springs project record (Oct 2026), alicespringsrvpark.com, Campspot listing. Story framing: Justin, 2026-10-28.
// Deliberately excluded: revenue, occupancy, debt, rates, expansion plans (performance / forward-looking).
export default function OutdoorHospitalityPage() {
  if (!isVisible('aliceSprings')) notFound();
  const [aerial, pool, lodge, entrance, jump, store] = a.photos as { src: string; alt: string }[];
  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="crumbs">Home / Current Holdings / Outdoor Hospitality</div><div className="eyebrow light">Portfolio · Current</div>
        <h1>Current holdings.</h1>
        <HoldingsTabs active="hospitality" />
        <p className="lede">{a.name}. {a.location}. Acquired {fmtMonth(a.acquired)}.</p>
      </div></section>

      <section className="oh-hero"><img src={aerial.src} alt={aerial.alt} fetchPriority="high" /></section>

      <section className="proof"><div className="wrap">
        <div className="item"><strong>{a.acres}</strong><span>Acres</span></div>
        <div className="item"><strong>{a.rvSitesLabel}</strong><span>Full-hookup RV sites</span></div>
        <div className="item"><strong>Cabins</strong><span>{a.cabinsLabel}, including waterfront</span></div>
        <div className="item"><strong>Ionia, MI</strong><span>{a.access}</span></div>
      </div></section>
      {SHOW_REVIEW_NOTES && (
        <div className="review-strip"><div className="wrap" style={{ display: 'grid', gap: 6 }}>
          <span><Tag kind="CONFIRM">{a.rvSitesNote}</Tag></span>
          <span><Tag kind="COUNSEL">{a.ownershipNote}</Tag></span>
          <span><Tag kind="JUSTIN">{a.photoNote}</Tag></span>
        </div></div>
      )}

      <section><div className="wrap split">
        <div>
          <div className="eyebrow">Why we own it</div><h2 style={{ marginTop: '14px' }}>Our pilot in outdoor hospitality.</h2><div className="rule"></div>
          <p className="lede small">We bought Alice Springs in August 2022 as a pilot. Before expanding acquisitions in outdoor hospitality, we wanted to understand the industry from the inside: how a resort-style RV park earns its revenue, runs its seasons and staffs its operations.</p>
          <p className="lede small" style={{ marginTop: '16px' }}>So we operate it ourselves, with an approach similar to the one we use at our apartment communities: improve the property, build systems, and protect the asset.</p>
          <p style={{ marginTop: '16px' }}><Tag kind="DRAFT" /> <Tag kind="COUNSEL">“before expanding acquisitions” is forward-looking</Tag></p>
        </div>
        <div className="ph32"><img src={entrance.src} alt={entrance.alt} loading="lazy" /></div>
      </div></section>

      <section className="dark"><div className="wrap">
        <div className="eyebrow">What we have done</div><h2 style={{ marginTop: '14px' }}>Improve the property. Build the systems.</h2>
        <div className="steps" style={{ marginTop: '48px' }}>
          <div className="step"><div className="n">01</div><h3>The property</h3><ul>
            <li>New brand, website and virtual tour</li>
            <li>Added a jump pad, gem mining sluice and pickleball</li>
            <li>Golf-cart trails and rentals across the 178 acres</li>
            <li>Themed weekends from spring through Halloween</li></ul></div>
          <div className="step"><div className="n">02</div><h3>The infrastructure</h3><ul>
            <li>Park-wide Wi-Fi network</li>
            <li>Fiber conduit backbone for future gate and technology</li>
            <li>Utility submetering for RV sites</li>
            <li>Year-round water system compliance</li></ul></div>
          <div className="step"><div className="n">03</div><h3>The operation</h3><ul>
            <li>Reservations, point of sale and accounting on one connected platform</li>
            <li>Salaried park manager with clear annual objectives</li>
            <li>Departments, procedures and monthly financial reporting</li>
            <li>On-site dining and bar run under a licensed operating company</li></ul></div>
        </div>
        <p style={{ marginTop: '32px' }}><Tag kind="DRAFT">drawn from the Alice Springs project record; confirm each line</Tag></p>
      </div></section>

      <section><div className="wrap">
        <div className="eyebrow">What we are learning</div><h2 style={{ marginTop: '14px', maxWidth: 760 }}>Hospitality is a different business from rent, and that is the point.</h2>
        <div className="grid3" style={{ marginTop: '48px' }}>
          <div className="tile"><h4>Many revenue streams</h4><p>Nightly, weekly and seasonal stays, cabins, events, food, drink and retail, each managed on its own.</p></div>
          <div className="tile"><h4>A seasonal calendar</h4><p>Open spring through fall; the off-season goes to maintenance, budgeting and next year’s plan.</p></div>
          <div className="tile"><h4>Guest experience</h4><p>Reviews and repeat visits drive the business, so cleanliness, safety and service are measured.</p></div>
        </div>
        <p style={{ marginTop: '24px' }}><Tag kind="DRAFT" /></p>
      </div></section>

      <section className="paper"><div className="wrap">
        <div className="gal gal3">
          {[pool, lodge, jump, store].map((p) => <div key={p.src}><img src={p.src} alt={p.alt} loading="lazy" decoding="async" /></div>)}
        </div>
      </div></section>

      <section><div className="wrap split">
        <div><div className="eyebrow">The park</div><h2 style={{ marginTop: '14px' }}>What guests find.</h2><div className="rule"></div>
          <p className="lede small">A family campground on 178 acres, built around a private catch-and-release lake, between Grand Rapids and Lansing.</p>
          <p style={{ marginTop: '24px' }}><a className="btn btn-outline" href={a.website} target="_blank" rel="noopener noreferrer">Visit alicespringsrvpark.com</a></p>
        </div>
        <ul className="amenity-list">{(a.amenities as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
      </div></section>

      <section className="cta-band black damask"><div className="wrap">
        <div className="eyebrow light">Accredited investors</div><h2>Talk to us about what comes next.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a><a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a></div>
        <p className="secondary-link"><a href="/current-holdings">See our multifamily holdings →</a></p>
      </div></section>
    </>
  );
}
