import Hero from '@/components/Hero';
import { CurrentCard, SoldCard } from '@/components/Cards';
import { Gate, Tag } from '@/components/Flags';
import { copy, deal, flags, fmtMonth, isVisible, metrics, n, soldDeals, type FlagName } from '@/lib/content';
import { JUNIPER_URL, SCHEDULE_ENABLED, SCHEDULE_URL, SHOW_REVIEW_NOTES } from '@/data/site';

export default function IndexPage() {
  const um5 = deal('um5');
  return (
    <>
      <Hero variant={flags.heroVariant} />

      <section className="proof"><div className="wrap">
        <div className="item"><strong>{n(metrics.held)}</strong><span>Units held today · {metrics.heldDeals} holdings in Memphis, TN</span></div>
        <div className="item"><strong>{n(metrics.sold)}</strong><span>Units sold · {metrics.exits} full-cycle exits 2021–2022, plus Woodmere 2025</span></div>
        <div className="item"><strong>{n(metrics.confirmed)}</strong><span>Lifetime multifamily units <a href="/track-record#methodology" className="fn">¹</a></span></div>
        <div className="item"><strong>Memphis</strong><span>Where we operate today</span></div>
      </div></section>

      <section><div className="wrap split">
        <div><div className="eyebrow">Our edge</div><h2 style={{ marginTop: '14px' }}>Operator-led.<br />Built one community at a time.</h2><div className="rule"></div>
          <p className="lede">{copy.edge.lede} <Tag kind={copy.edge.ledeTag} /></p>
          <div className="btn-row"><a className="btn btn-outline" href="/strategy">How we work</a></div></div>
        <ul className="pill-list">
          {copy.edge.items.map((e, i) => (
            <li key={e.title}><b>0{i + 1}</b><div><h3>{e.title}</h3><p className="lede small">{e.body} {i === 0 && <Tag kind={copy.edge.itemsTag} />}</p></div></li>
          ))}
        </ul>
      </div></section>

      <section className="paper"><div className="wrap">
        <div className="section-head"><div><div className="eyebrow">Current holdings</div><h2>What we own today.</h2></div><a className="link-arrow" href="/current-holdings">All current holdings →</a></div>
        <div className="cards">
          <CurrentCard d={deal('twin-oaks')} />
          <CurrentCard d={deal('lakeville')} />
          <CurrentCard d={deal('greyson-groves')} />
        </div>
        <Gate flag="um5Public" label="UM5 not yet approved for public view">
          <div className="um5-strip">
            <div><div className="eyebrow">Also held · acquired {fmtMonth(um5.acquired)}</div><h3>UM5 · five communities near the University of Memphis</h3>
              <p>{um5.communities!.map((c) => `${c.name} (${c.units})`).join(' · ')}</p></div>
            <div className="um5-total"><strong>{um5.units}</strong><span>Units</span></div>
            <a className="link-arrow" href="/current-holdings#um5">See the five communities →</a>
          </div>
        </Gate>
      </div></section>

      <section className="dark"><div className="wrap">
        <div className="section-head"><div><div className="eyebrow">Track record</div><h2>Full cycle. Three exits.</h2></div><a className="link-arrow" href="/track-record">Full track record →</a></div>
        <div className="cards">
          {soldDeals.filter((d) => !d.flag).map((d) => <SoldCard key={d.slug} d={d} />)}
        </div>
        <Gate flag="irr" label="counsel review"><p className="small-print">IRRs are shown for full-cycle exits only. <Tag kind="COUNSEL">IRR basis and required disclosures</Tag></p></Gate>
      </div></section>

      <Gate flag="latestNews">
        <section id="latest"><div className="wrap">
          <div className="section-head"><div><div className="eyebrow">Latest from Greyson</div><h2>Recent activity.</h2></div></div>
          <div className="news">
            {copy.news.map((item) => {
              const body = (
                <article className="news-item">
                  <div className="date">{fmtMonth(item.date)}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
              return 'flag' in item && item.flag ? <Gate key={item.title} flag={item.flag as FlagName}>{body}</Gate> : <div key={item.title}>{body}</div>;
            })}
          </div>
          <p style={{ marginTop: '24px' }}><Tag kind="JUSTIN">{copy.newsNote}</Tag></p>
        </div></section>
      </Gate>

      <section className="paper"><div className="wrap">
        <div className="eyebrow">Working with Greyson</div><h2 style={{ marginTop: '14px', maxWidth: '760px' }}>Built for investors who read the details.</h2>
        <div className="grid3" style={{ marginTop: '56px' }}>
          <div className="tile"><h4>Who we work with</h4><p>Accredited individuals, family offices and smaller institutions.</p></div>
          <div className="tile"><h4>How we report</h4><p>Monthly or quarterly updates, depending on the asset and where it is in the business plan, delivered through the Juniper Square investor portal.</p></div>
          <div className="tile"><h4>How we start</h4><p>A short inquiry, accreditation confirmation, then a call with the principals.</p></div>
        </div>
      </div></section>

      <section className="cta-band black damask"><div className="wrap">
        <img src="/img/logo_G_silver.png" alt="" style={{ width: '72px', margin: '0 auto' }} loading="lazy" />
        <div className="eyebrow light" style={{ marginTop: '28px' }}>Accredited investors</div>
        <h2>Start with a conversation.</h2>
        <p className="lede">Tell us about your investment goals. We will follow up directly.</p>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a>{SCHEDULE_ENABLED && <a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a>}</div>
        <p className="secondary-link"><a href={JUNIPER_URL}>Existing investor login →</a></p>
      </div></section>
    </>
  );
}
