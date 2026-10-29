import { Tag } from '@/components/Flags';
import { currentDeals, isOn, metrics } from '@/lib/content';
import { SCHEDULE_ENABLED, SCHEDULE_URL } from '@/data/site';

export const metadata = { title: 'Strategy' };

// Copy follows the Fill List (S1–S6), drafted from the Greyson pitch deck (pp. 6–8, 12).
export default function StrategyPage() {
  // Community sizes across live holdings; portfolios count by community (Groves and UM5 are split).
  const sizes = currentDeals.filter((d) => isOn(d.flag)).flatMap((d) => (d.communities ?? d.parts)?.map((c) => c.units) ?? [d.units]);
  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="crumbs">Home / Strategy</div><div className="eyebrow light">Strategy</div>
        <h1>Acquire. Improve. Exit or hold.</h1>
        <p className="lede">A simple plan, run carefully. The work is in the execution.</p>
      </div></section>

      <section className="dark"><div className="wrap">
        <p style={{ marginBottom: '32px' }}><Tag kind="DRAFT">steps drafted from the pitch deck (pp. 6–8)</Tag></p>
        <div className="steps">
          <div className="step"><div className="n">01</div><h3>Acquire</h3><p>Find value where other owners are not looking.</p><ul>
            <li><b>Reveal:</b> hidden value in B/C assets others avoid</li>
            <li><b>Evaluate:</b> conservative underwriting from real cost-to-build judgment</li>
            <li><b>Verify:</b> logistics-driven markets: Memphis, Louisville, Jacksonville</li></ul></div>
          <div className="step"><div className="n">02</div><h3>Improve</h3><p>Fix the property hands-on.</p><ul>
            <li>Strategic renovations with hands-on oversight</li>
            <li>Contractor-led due diligence</li>
            <li>Renovation and operations run together</li></ul></div>
          <div className="step"><div className="n">03</div><h3>Exit or hold</h3><p>Let the improved property earn its next step.</p><ul>
            <li><b>Value through community:</b> safer workforce housing, lower turnover</li>
            <li>Higher NOI supports a refinance or an exit at a stronger valuation</li>
            <li>{metrics.exits} full-cycle exits, 2021–2022; {metrics.heldDeals} Memphis holdings today</li></ul></div>
        </div>
      </div></section>

      <section><div className="wrap split">
        <div><div className="eyebrow">Improve, shown</div><h2 style={{ marginTop: '14px' }}>What value-add looks like on the ground.</h2><div className="rule"></div>
          <p className="lede small">Photos from our communities. Not renderings.</p>
          <p style={{ marginTop: '18px' }}><Tag kind="JUSTIN">before/after photo pairs (optional)</Tag></p></div>
        <div className="gal">
          <div><img src="/img/um5-university-highlands-interior.jpg" alt="Renovated kitchen and living room at University Highlands" loading="lazy" /></div>
          <div><img src="/img/current_highpoint-greenline_pool_02.jpg" alt="Pool at Highpoint at the Greenline" loading="lazy" /></div>
          <div><img src="/img/current_twin-oaks_entry_02.jpg" alt="Brick entry at Twin Oaks Townhomes" loading="lazy" /></div>
          <div><img src="/img/current_chickasaw-greenline_exterior_01.jpg" alt="Chickasaw at the Greenline building exterior" loading="lazy" /></div>
        </div>
      </div></section>

      <section className="paper"><div className="wrap">
        <div className="eyebrow">What we look for</div><h2 style={{ marginTop: '14px' }}>Our buy box, in plain terms.</h2>
        <div className="grid4" style={{ marginTop: '56px' }}>
          <div className="tile"><h4>Asset type</h4><p>B/C multifamily and distressed workforce housing.</p></div>
          <div className="tile"><h4>Size</h4><p>
            Our communities today range from {Math.min(...sizes)} to {Math.max(...sizes)} units.
          </p></div>
          <div className="tile"><h4>Markets</h4><p>Logistics-driven markets: Memphis, Louisville, Jacksonville.</p></div>
          <div className="tile"><h4>Profile</h4><p>Value-add: buy at the right basis, improve, then refinance, sell or hold.</p></div>
        </div>
        <p style={{ marginTop: '32px' }}><Tag kind="DRAFT">qualitative buy box from the deck; no unit range or vintage in sources</Tag></p>
      </div></section>

      <section><div className="wrap">
        <div className="eyebrow">Discipline</div><h2 style={{ marginTop: '14px' }}>How we think about risk.</h2>
        <div className="grid4" style={{ marginTop: '56px' }}>
          <div className="tile"><h4>The right basis</h4><p>Direct bank relationships get us to the right entry price.</p></div>
          <div className="tile"><h4>Budgets with room</h4><p>Conservative renovation budgets with contingencies.</p></div>
          <div className="tile"><h4>Reserves</h4><p>Liquidity reserves held through execution.</p></div>
          <div className="tile"><h4>Stable markets</h4><p>Workforce housing in stable markets.</p></div>
        </div>
        <p style={{ marginTop: '32px' }}><Tag kind="DRAFT">from deck p. 12</Tag> <Tag kind="JUSTIN">add “weekly operating review” only if true</Tag></p>
      </div></section>

      <section className="cta-band black damask"><div className="wrap">
        <div className="eyebrow light">Accredited investors</div><h2>See the strategy in our holdings.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a>{SCHEDULE_ENABLED && <a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a>}</div>
        <p className="secondary-link"><a href="/current-holdings">See current holdings →</a></p>
      </div></section>
    </>
  );
}
