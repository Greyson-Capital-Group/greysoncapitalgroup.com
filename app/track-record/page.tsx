import { PartCard, PortfolioHeader, SoldCard } from '@/components/Cards';
import FilterGrid from '@/components/FilterGrid';
import { Confirm, Gate, Tag } from '@/components/Flags';
import { capital, copy, deal, flags, fmtMonth, isVisible, metrics, n, soldDeals } from '@/lib/content';
import { SCHEDULE_URL } from '@/data/site';

export const metadata = { title: 'Track Record' };

export default function TrackRecordPage() {
  const sold = soldDeals.filter((d) => !d.flag);
  const fl3 = deal('fl3');
  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="crumbs">Home / Track Record</div><div className="eyebrow light">Portfolio · Track record</div>
        <h1>Track record.</h1>
        <p className="lede">What we bought, what we sold, and exactly how we count it.</p>
      </div></section>

      <section id="methodology"><div className="wrap split methodology">
        <div><div className="eyebrow">How we count</div><h2 style={{ marginTop: '14px' }}>{n(metrics.confirmed)} confirmed units.</h2><div className="rule"></div>
          <p className="lede small"><sup>¹</sup> {copy.methodology}</p>
          <Gate flag="lifetimeTotal"><p className="lede small" style={{ marginTop: '16px' }}>{copy.lifetimeMethodology}</p></Gate>
        </div>
        <table className="ledger"><tbody>
          <tr><th>Category</th><th>Communities</th><th className="num">Units</th></tr>
          <tr><td>Held today</td><td>Twin Oaks · Lakeville · Greyson Groves</td><td className="num">{n(metrics.held)}</td></tr>
          <tr><td>Sold</td><td>Clearbrook Village · Millington Oaks · Florida 3 Portfolio</td><td className="num">{n(metrics.sold)}</td></tr>
          <tr className="total"><td>Confirmed total</td><td></td><td className="num">{n(metrics.confirmed)}</td></tr>
          {isVisible('lifetimeTotal') && metrics.pendingDeals.map((d) => (
            <tr key={d.slug} className="sub gated-row"><td><span className="pending">Pending</span></td><td>{d.name} · {d.status === 'current' ? 'held' : d.status === 'sold' ? 'sold' : 'prior interest'}</td><td className="num">{n(d.units)}</td></tr>
          ))}
          {isVisible('lifetimeTotal') && <tr className="total gated-row"><td>Lifetime incl. pending</td><td>{!flags.lifetimeTotal && <Confirm>Hidden at launch until flag “lifetimeTotal” is on</Confirm>}</td><td className="num">{n(metrics.lifetime)}</td></tr>}
        </tbody></table>
      </div></section>

      <Gate flag="capitalTotals" label="Justin + counsel">
        <section className="paper"><div className="wrap split">
          <div><div className="eyebrow">Capital</div><h2 style={{ marginTop: '14px' }}>Lifetime capital.</h2><div className="rule"></div>
            <p className="lede small">Totals across every multifamily deal above, including pending items. <Confirm>Counsel: confirm presentation</Confirm></p></div>
          <table className="ledger"><tbody>
            <tr><td>{capital.equityRaised.label}</td><td className="num">{capital.equityRaised.display}</td></tr>
            {capital.equityRaised.detail && <tr className="sub"><td colSpan={2}>{capital.equityRaised.detail} exact</td></tr>}
            <tr><td>{capital.capitalDeployed.label}</td><td className="num">{capital.capitalDeployed.display}</td></tr>
            <tr className="sub"><td colSpan={2}>{capital.capitalDeployed.detail}</td></tr>
          </tbody></table>
        </div></section>
      </Gate>

      <section className="dark" id="sold"><div className="wrap">
        <div className="section-head"><div><div className="eyebrow">Sold</div><h2>Full cycle complete.</h2></div></div>
        <FilterGrid
          allLabel="All sold"
          chips={['Tennessee', 'Florida']}
          items={[
            { id: 'clearbrook', tags: ['Tennessee'], node: <SoldCard d={deal('clearbrook')} /> },
            { id: 'millington-oaks', tags: ['Tennessee'], node: <SoldCard d={deal('millington-oaks')} /> },
            { id: 'fl3-head', tags: ['Florida'], wide: true, node: <PortfolioHeader d={fl3} /> },
            ...fl3.parts!.map((p) => ({ id: p.slug ?? p.name, tags: ['Florida'], node: <PartCard p={p} group={fl3} /> })),
          ]}
        />
        <div className="small-print">
          <p>Bought and sold: Clearbrook Village {fmtMonth(deal('clearbrook').acquired)}–{fmtMonth(deal('clearbrook').sold)} · Millington Oaks {fmtMonth(deal('millington-oaks').acquired)}–{fmtMonth(deal('millington-oaks').sold)} · Florida 3 Portfolio {fmtMonth(fl3.acquired)}–{fmtMonth(fl3.sold)} ({fl3.parts!.map((p) => `${p.name} ${p.units}`).join(' + ')} = {fl3.units} units).</p>
          <Gate flag="irr" label="counsel review">
            <p>IRRs are shown only for these three full-cycle exits, and for Florida 3 at the portfolio level only. We do not publish a blended or average IRR, or IRRs for deals still held. Past results do not guarantee future results. <Tag kind="COUNSEL">IRR basis (net to investors?) and required disclosures</Tag></p>
          </Gate>
        </div>
      </div></section>

      {(isVisible('woodmere') || isVisible('ridgeway')) && <section id="pending"><div className="wrap">
        <div className="section-head"><div><div className="eyebrow">Other multifamily history</div><h2>Shown when confirmed.</h2></div></div>
        <div className="cards">
          <Gate flag="woodmere" label="Justin decides (recommended: show)"><SoldCard d={deal('woodmere')} showIrr={false} /></Gate>
          <Gate flag="ridgeway" label="hold until counsel OKs wording"><SoldCard d={deal('woods-at-ridgeway')} showIrr={false} /></Gate>
        </div>
      </div></section>}

      <section className="cta-band black damask"><div className="wrap">
        <div className="eyebrow light">Accredited investors</div><h2>Ask us about any deal on this page.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a><a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a></div>
      </div></section>
    </>
  );
}
