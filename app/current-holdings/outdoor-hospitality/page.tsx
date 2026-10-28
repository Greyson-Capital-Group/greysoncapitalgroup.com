import { notFound } from 'next/navigation';
import HoldingsTabs from '@/components/HoldingsTabs';
import { Tag } from '@/components/Flags';
import { aliceSprings as a, isVisible } from '@/lib/content';
import { SCHEDULE_URL, SHOW_REVIEW_NOTES } from '@/data/site';

export const metadata = {
  title: 'Current Holdings · Outdoor Hospitality',
  description: 'Alice Springs RV Park & Resort in Ionia, Michigan: our pilot in outdoor hospitality.',
};

// Facts: park listing (Campspot) and Pure Michigan listing, Oct 2026. Story: Justin, 2026-10-28.
export default function OutdoorHospitalityPage() {
  if (!isVisible('aliceSprings')) notFound();
  const photoSlots = ['Lake and beach', 'RV sites', 'Pool and jumping pillow', 'Cabins'];
  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="crumbs">Home / Current Holdings / Outdoor Hospitality</div><div className="eyebrow light">Portfolio · Current</div>
        <h1>Current holdings.</h1>
        <HoldingsTabs active="hospitality" />
        <p className="lede">{a.name}. {a.location}.</p>
      </div></section>

      <section className="proof"><div className="wrap">
        <div className="item"><strong>{a.rvSites}</strong><span>RV sites</span></div>
        <div className="item"><strong>{a.cabins}</strong><span>Cabins</span></div>
        <div className="item"><strong>5-acre</strong><span>Lake at the center of the park</span></div>
        <div className="item"><strong>Ionia, MI</strong><span>{a.access}</span></div>
      </div></section>
      {SHOW_REVIEW_NOTES && (
        <div className="review-strip"><div className="wrap">
          <Tag kind="CONFIRM">{a.sitesSource}</Tag> <Tag kind="JUSTIN">{a.ownershipNote}</Tag>
        </div></div>
      )}

      <section><div className="wrap split">
        <div>
          <div className="eyebrow">Why we own it</div><h2 style={{ marginTop: '14px' }}>Our pilot in outdoor hospitality.</h2><div className="rule"></div>
          <p className="lede small">Alice Springs is our pilot program in outdoor hospitality. Before expanding acquisitions in the industry, we wanted to understand it from the inside: how a resort-style RV park earns its revenue, runs its seasons and staffs its operations.</p>
          <p className="lede small" style={{ marginTop: '16px' }}>So we bought one and run it ourselves, with the same approach we use at our apartment communities: improve the property, build systems, and protect the asset.</p>
          <p style={{ marginTop: '16px' }}><Tag kind="DRAFT">story from Justin, 10/28</Tag> <Tag kind="COUNSEL">“before expanding acquisitions” is a forward-looking statement</Tag></p>
        </div>
        <div className="gal">
          {a.photos.length
            ? a.photos.map((p: { src: string; alt: string }) => <div key={p.src}><img src={p.src} alt={p.alt} loading="lazy" /></div>)
            : photoSlots.map((l) => (
                <div key={l} className="ph32" style={{ position: 'relative' }}>
                  {SHOW_REVIEW_NOTES
                    ? <div className="placeholder"><span>Photo needed<br />{l}</span></div>
                    : <div className="brand-block" role="img" aria-label={l}><img src="/img/logo_G_silver.png" alt="" /></div>}
                </div>
              ))}
        </div>
      </div></section>

      <section className="dark"><div className="wrap">
        <div className="eyebrow">What we are learning</div><h2 style={{ marginTop: '14px' }}>Operating a resort, season by season.</h2>
        <div className="steps" style={{ marginTop: '48px' }}>
          <div className="step"><div className="n">01</div><h3>The guest business</h3><p>Nightly, weekly and seasonal stays, cabins, events and on-site food and drink: a business that earns revenue many ways, unlike rent.</p></div>
          <div className="step"><div className="n">02</div><h3>The seasons</h3><p>An open season from spring through fall, and an off-season used for maintenance, budgeting and planning the next year.</p></div>
          <div className="step"><div className="n">03</div><h3>The operation</h3><p>Departments, staffing, procedures and reporting built so the park runs on systems, not on any one person.</p></div>
        </div>
        <p style={{ marginTop: '32px' }}><Tag kind="DRAFT">drafted from your operating notes; confirm each line</Tag> <Tag kind="JUSTIN">year acquired; what you found at purchase; key improvements made</Tag></p>
      </div></section>

      <section className="paper"><div className="wrap split">
        <div><div className="eyebrow">The park</div><h2 style={{ marginTop: '14px' }}>What guests find.</h2><div className="rule"></div>
          <p className="lede small">{a.rvSites} RV sites and {a.cabins} cabins around a 5-acre lake, near I-96 and M-66 between Grand Rapids and Lansing.</p>
          <p style={{ marginTop: '24px' }}><a className="btn btn-outline" href={a.website} target="_blank" rel="noopener noreferrer">Visit alicespringsrvpark.com</a></p>
        </div>
        <ul className="amenity-list">{a.amenities.map((x: string) => <li key={x}>{x}</li>)}</ul>
      </div></section>

      <section className="cta-band black damask"><div className="wrap">
        <div className="eyebrow light">Accredited investors</div><h2>Talk to us about what comes next.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a><a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a></div>
        <p className="secondary-link"><a href="/current-holdings">See our multifamily holdings →</a></p>
      </div></section>
    </>
  );
}
