import { Tag } from '@/components/Flags';
import { SCHEDULE_ENABLED, SCHEDULE_URL } from '@/data/site';

export const metadata = { title: 'About' };

// Copy follows the Fill List (A1–A7). Sources: Sponsor Bio (Apr 2025), pitch deck, Justin's email signature.
export default function AboutPage() {
  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="crumbs">Home / About</div><div className="eyebrow light">About</div>
        <h1>A multifamily firm run by the people who own the decisions.</h1>
        <p className="lede">Small team. Direct access. Accountable for every unit.</p>
      </div></section>

      <section><div className="wrap split">
        <div><div className="eyebrow">The firm</div><h2 style={{ marginTop: '14px' }}>Our story.</h2><div className="rule"></div>
          <p className="lede small">Greyson Capital Group started with one 144-unit apartment community in Memphis, and it was built by people who had worked inside apartments, not just invested in them.</p>
          <p className="lede small" style={{ marginTop: '16px' }}>We grew by taking on the properties other owners avoided, distressed B/C workforce housing, and fixing them hands-on with conservative underwriting and our own construction and management teams.</p>
          <p className="lede small" style={{ marginTop: '16px' }}>What hasn't changed is how we work: buy at the right basis, protect investor capital, and tell investors the truth, good or bad.</p>
          <p style={{ marginTop: '16px' }}><Tag kind="DRAFT">Justin confirms the origin story</Tag></p>
          <p style={{ marginTop: '16px', color: 'var(--muted)' }}>Founded in 2016. Headquartered in Grand Haven, Michigan.</p></div>
        <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}><img src="/img/current_twin-oaks_sign_03.jpg" alt="Twin Oaks Townhomes monument sign" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
      </div></section>

      <section className="dark"><div className="wrap">
        <div className="eyebrow">Principles</div><h2 style={{ marginTop: '14px' }}>How we operate.</h2>
        <div className="grid4" style={{ marginTop: '56px' }}>
          <div className="tile"><h4>Operator first</h4><p>We stay close to the property and the numbers.</p></div>
          <div className="tile"><h4>Straight reporting</h4><p>We tell investors the truth, good or bad.</p></div>
          <div className="tile"><h4>Accountable</h4><p>We report what went wrong as plainly as what went right. <Tag kind="DRAFT" /></p></div>
          <div className="tile"><h4>Long view</h4><p>Relationships with investors span more than one deal.</p></div>
        </div>
      </div></section>

      <section className="paper"><div className="wrap split">
        <div><div className="eyebrow">Beyond multifamily</div><h2 style={{ marginTop: '14px' }}>Outdoor hospitality.</h2><div className="rule"></div>
          <p className="lede small">Greyson also asset-manages Alice Springs RV Park &amp; Resort, a 178-acre resort campground in Ionia, Michigan, acquired in August 2022 with our principals and investors in the ownership group. It is our pilot in outdoor hospitality: a way to learn the industry's operations from the inside before expanding acquisitions there, run with a similar playbook to our apartments.</p>
          <p style={{ marginTop: '14px' }}><Tag kind="DRAFT" /></p>
          <div className="btn-row"><a className="btn btn-outline" href="/current-holdings/outdoor-hospitality">The Alice Springs story</a></div></div>
        <div className="ph32"><img src="/img/alice-springs-sunrise-aerial.jpg" alt="Sunrise drone view over the lake and cabins at Alice Springs RV Park &amp; Resort" loading="lazy" /></div>
      </div></section>

      <section><div className="wrap">
        <div className="section-head"><div><div className="eyebrow">Leadership</div><h2>Our principal.</h2></div></div>
        <div className="team">
          <div className="person">
            <div className="ph" style={{ overflow: 'hidden' }}><img src="/img/justin-richards.jpg" alt="Justin Richards" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <h3>Justin Richards</h3><div className="role">Co-Founder &amp; Principal</div>
            <p>Justin Richards co-founded Greyson Capital Group in 2016 and leads the firm's investment strategy, acquisitions and asset management. Greyson buys value-add B and C workforce multifamily in Memphis and the Southeast, where operational execution, not market timing, decides the outcome.</p>
            <p style={{ marginTop: '12px' }}>Justin has more than a decade of multifamily operating experience, beginning in on-site management at a 328-unit community, with depth in leasing, collections and asset management. Earlier, he held progressively senior roles in commercial and residential construction and low-voltage systems, serving national retail and office clients. He holds a B.S. from Michigan State University.</p>
            <p style={{ marginTop: '12px' }}>That construction background is Greyson's edge: renovation underwritten from real cost-to-build knowledge, and work overseen directly. It showed at Twin Oaks, a distressed 253-unit Memphis townhome community Greyson acquired in 2019 and turned around. Over its history Greyson has been involved in more than 2,000 multifamily units, including three full-cycle exits.</p>
            <p style={{ marginTop: '12px' }}>He built Greyson so investors can work directly with the people doing the work, and always get a straight answer about their investment, good or bad.</p>
            <p style={{ marginTop: '10px' }}><Tag kind="DRAFT">bio: approved 10/28 except the last sentence (reworded)</Tag> <Tag kind="JUSTIN">confirm headshot</Tag></p>
          </div>
        </div>
      </div></section>

      {/* Multi-South named, with logo, with permission (Justin, 10/28). Logo from multi-south.com. Founding year: Multi-South company resume. */}
      <section className="paper"><div className="wrap split">
        <div><div className="eyebrow">Partners</div><h2 style={{ marginTop: '14px' }}>Who we work with.</h2><div className="rule"></div>
          <p className="lede small">The Multi-South Group is our property management partner in Memphis and manages Greyson Groves. Founded in 2001 by veterans of the Memphis multifamily industry, Multi-South brings in-house renovation and management experience across the Southeast.</p>
          <p style={{ marginTop: '14px' }}><Tag kind="DRAFT" /></p></div>
        <div className="partner-logo"><a href="https://www.multi-south.com/" target="_blank" rel="noopener noreferrer"><img src="/img/multi-south-logo.png" alt="The Multi-South Group" width={630} height={130} loading="lazy" /></a></div>
      </div></section>

      <section className="cta-band black damask"><div className="wrap">
        <img src="/img/logo_G_silver.png" alt="" style={{ width: '64px', margin: '0 auto' }} loading="lazy" /><h2>Talk to the principals.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a>{SCHEDULE_ENABLED && <a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a>}</div>
      </div></section>
    </>
  );
}
