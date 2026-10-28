import { Gate, Tag } from '@/components/Flags';
import { SCHEDULE_URL } from '@/data/site';

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
          <p style={{ marginTop: '16px', color: 'var(--muted)' }}>Headquartered in Grand Haven, Michigan. <Tag kind="JUSTIN">founding year</Tag></p></div>
        <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}><img src="/img/current_twin-oaks_sign_03.jpg" alt="Twin Oaks Townhomes monument sign" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
      </div></section>

      <section className="dark"><div className="wrap">
        <div className="eyebrow">Principles</div><h2 style={{ marginTop: '14px' }}>How we operate.</h2>
        <div className="grid4" style={{ marginTop: '56px' }}>
          <div className="tile"><h4>Operator first</h4><p>We stay close to the property and the numbers.</p></div>
          <div className="tile"><h4>Straight reporting</h4><p>We tell investors the truth, good or bad.</p></div>
          <div className="tile"><h4>Aligned</h4><p><Tag kind="JUSTIN + COUNSEL">GP co-invest statement</Tag></p></div>
          <div className="tile"><h4>Long view</h4><p>Relationships with investors span more than one deal.</p></div>
        </div>
      </div></section>

      <section className="paper"><div className="wrap split">
        <div><div className="eyebrow">Beyond multifamily</div><h2 style={{ marginTop: '14px' }}>Outdoor hospitality.</h2><div className="rule"></div>
          <p className="lede small">Greyson also asset-manages Alice Springs RV Park &amp; Resort, a 178-acre resort campground in Ionia, Michigan, acquired in 2022 with our principals and investors in the ownership group. It is our pilot in outdoor hospitality: a way to learn the industry's operations from the inside before expanding acquisitions there, run with a similar playbook to our apartments.</p>
          <p style={{ marginTop: '14px' }}><Tag kind="DRAFT" /></p>
          <div className="btn-row"><a className="btn btn-outline" href="/current-holdings/outdoor-hospitality">The Alice Springs story</a></div></div>
        <div className="ph32"><img src="/img/alice-springs-aerial-lake.jpg" alt="Aerial view of the lake and waterfront cabins at Alice Springs RV Park & Resort" loading="lazy" /></div>
      </div></section>

      <section><div className="wrap">
        <div className="section-head"><div><div className="eyebrow">Leadership</div><h2>The team.</h2></div></div>
        <div className="team">
          <div className="person">
            <div className="ph" style={{ overflow: 'hidden' }}><img src="/img/justin-richards.jpg" alt="Justin Richards" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <h3>Justin Richards</h3><div className="role">Co-Founder &amp; Principal</div>
            <p>Justin Richards is Co-Founder and Principal of Greyson Capital Group. He has more than a decade of hands-on multifamily experience, starting as an assistant manager at a 328-unit community, with depth in asset management, leasing, resident relations and collections. Before real estate he worked in commercial and residential construction and in low-voltage electrical work, rising from technician to upper management for national retail and office clients. He holds a B.S. from Michigan State University. Justin focuses Greyson on B/C value-add communities other owners avoid, pairing conservative underwriting with construction know-how. He led the turnaround of Twin Oaks in Memphis.</p>
            <p style={{ marginTop: '10px' }}><Tag kind="DRAFT">bio</Tag> <Tag kind="JUSTIN">confirm headshot</Tag></p>
          </div>
          <Gate flag="davidShores" label="needs David's permission + headshot">
            <div className="person">
              <div className="ph placeholder"><span>Headshot needed<br />David Shores</span></div>
              <h3>David Shores</h3><div className="role">Property Management Partner · Multi-South Management</div>
              <p>David Shores has more than 30 years in multifamily management, renovation and ownership across Memphis and the Southeast. As President and CEO of Ledic Management Group he grew the company from 2,000 to more than 40,000 units, and in 2001 he founded Multi-South Management, which has overseen more than $300 million in apartment renovations. He is a CPA and spent six years at Arthur Young specializing in real estate and construction tax.</p>
              <p style={{ marginTop: '10px' }}><Tag kind="DRAFT">from Sponsor Bio + deck p. 4</Tag></p>
            </div>
          </Gate>
          {/* Third slot is preview-only until Justin names the person. */}
          <div className="person review-only">
            <div className="ph placeholder"><span>Headshot needed<br />Team member 3</span></div>
            <h3><Tag kind="JUSTIN">name</Tag></h3><div className="role"><Tag kind="JUSTIN">title</Tag></div>
            <p><Tag kind="JUSTIN">The 2025 Sponsor Bio lists Scott Pollmann (Acquisitions) and Dirk DeJonge (Investor Relations). Confirm whether either is still on the team.</Tag></p>
          </div>
        </div>
      </div></section>

      <section className="paper review-only"><div className="wrap split">
        <div><div className="eyebrow">Partners</div><h2 style={{ marginTop: '14px' }}>Who we work with.</h2><div className="rule"></div>
          <p className="lede small">Multi-South Management, our property management partner in Memphis. <Tag kind="JUSTIN">permission to name + logo</Tag></p></div>
        <div className="grid3"><div style={{ height: '120px' }} className="placeholder"><span>Multi-South<br />logo needed</span></div></div>
      </div></section>

      <section className="cta-band black damask"><div className="wrap">
        <img src="/img/logo_G_silver.png" alt="" style={{ width: '64px', margin: '0 auto' }} loading="lazy" /><h2>Talk to the principals.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a><a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a></div>
      </div></section>
    </>
  );
}
