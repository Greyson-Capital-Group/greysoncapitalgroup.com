import { PartCard, PortfolioHeader, SoldCard } from '@/components/Cards';
import FilterGrid from '@/components/FilterGrid';
import { Confirm, Gate, Tag } from '@/components/Flags';
import { capital, copy, deal, flags, fmtMonth, isVisible, metrics, n, soldDeals } from '@/lib/content';
import { SCHEDULE_ENABLED, SCHEDULE_URL, SHOW_REVIEW_NOTES } from '@/data/site';
import Ledger from '@/components/Ledger';

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
        <div><div className="eyebrow">Portfolio summary</div><h2 style={{ marginTop: '14px' }}>{n(metrics.confirmed)} multifamily units.</h2><div className="rule"></div>
          <p className="lede small"><sup>¹</sup> {copy.methodology}</p>
          {SHOW_REVIEW_NOTES && metrics.pending > 0 && (
            <p style={{ marginTop: '16px' }}><Tag kind="JUSTIN">Striped rows are hidden at launch and left out of the total. With every row approved the total is {n(metrics.lifetime)}.</Tag></p>
          )}
        </div>
        <Ledger />
      </div></section>

      <Gate flag="capitalTotals">
        <section className="paper"><div className="wrap split">
          <div><div className="eyebrow">Capital</div><h2 style={{ marginTop: '14px' }}>Lifetime capital.</h2><div className="rule"></div>
            <p className="lede small">Totals across every multifamily deal on this page.</p></div>
          <table className="ledger"><tbody>
            <tr><td>{capital.equityRaised.label}</td><td className="num">{capital.equityRaised.display}</td></tr>
            {capital.equityRaised.detail && <tr className="sub"><td colSpan={2}>{capital.equityRaised.detail}</td></tr>}
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
        <div className="section-head"><div><div className="eyebrow">Other multifamily history</div><h2>The rest of our history.</h2></div></div>
        <div className="cards">
          <Gate flag="woodmere" label="Justin decides (recommended: show)"><SoldCard d={deal('woodmere')} showIrr={false} /></Gate>
          <Gate flag="ridgeway" label="hold until counsel OKs wording"><SoldCard d={deal('woods-at-ridgeway')} showIrr={false} /></Gate>
        </div>
      </div></section>}

      <section className="cta-band black damask"><div className="wrap">
        <div className="eyebrow light">Accredited investors</div><h2>Ask us about any deal on this page.</h2>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a>{SCHEDULE_ENABLED && <a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a>}</div>
      </div></section>
    </>
  );
}
