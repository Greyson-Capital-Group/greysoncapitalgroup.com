import { CommunityCard, CurrentCard } from '@/components/Cards';
import FilterGrid, { type FilterItem } from '@/components/FilterGrid';
import { Gate, Tag } from '@/components/Flags';
import { aliceSprings, deal, flags, fmtMonth, isVisible, metrics, n, type Deal } from '@/lib/content';
import { SCHEDULE_URL, SHOW_REVIEW_NOTES } from '@/data/site';

export const metadata = { title: 'Current Holdings' };

function Detail({ d, children }: { d: Deal; children?: React.ReactNode }) {
  return (
    <div id={d.slug} className="detail">
      <div>
        <div className="eyebrow">{d.market}</div><h2 style={{ marginTop: '14px' }}>{d.name}</h2><div className="rule"></div>
        <p className="lede small">{d.description ?? d.summary} <Tag kind={d.descriptionTag ?? d.summaryTag} /></p>
        {d.descriptionNote && <p style={{ marginTop: '10px' }}><Tag kind="JUSTIN">{d.descriptionNote}</Tag></p>}
        <table className="ledger" style={{ marginTop: '28px' }}><tbody>
          <tr><td>Units</td><td className="num">{n(d.units)}</td></tr>
          <tr><td>Status</td><td className="right">Current</td></tr>
          <tr><td>Acquired</td><td className="right">{fmtMonth(d.acquired)}</td></tr>
          {d.parts?.map((p) => <tr key={p.name} className="sub"><td>{p.name}</td><td className="num">{p.units}</td></tr>)}
          {children}
        </tbody></table>
      </div>
      <div className="gal">
        {d.photos.length
          ? d.photos.map((p) => <div key={p.src} className="ph32"><img src={p.src} alt={p.alt} loading="lazy" decoding="async" /></div>)
          : SHOW_REVIEW_NOTES
            ? ['Exterior hero', 'Street / entry', 'Amenity', 'Interior'].map((l) => <div key={l} className="ph32"><div className="placeholder"><span>Photo needed<br />{l}</span></div></div>)
            : <div className="ph32" style={{ position: 'relative' }}><div className="brand-block" role="img" aria-label={d.name}><img src="/img/logo_G_silver.png" alt="" /></div></div>}
      </div>
      {d.photoNote && <p className="detail-note"><Tag kind="JUSTIN">{d.photoNote}</Tag></p>}
    </div>
  );
}

export default function CurrentHoldingsPage() {
  const um5 = deal('um5');
  const showUm5 = isVisible('um5Public');
  const items: FilterItem[] = [
    { id: 'twin-oaks', tags: ['Southeast Memphis'], node: <CurrentCard d={deal('twin-oaks')} /> },
    { id: 'lakeville', tags: ['Whitehaven'], node: <CurrentCard d={deal('lakeville')} /> },
    { id: 'greyson-groves', tags: ['Greenline'], node: <CurrentCard d={deal('greyson-groves')} /> },
    ...(showUm5
      ? um5.communities!.map((c) => ({
          id: c.slug,
          tags: [c.neighborhood, 'Pending confirmation'],
          node: <Gate flag="um5Public" label="UM5">{<CommunityCard c={c} acquired={um5.acquired} />}</Gate>,
        }))
      : []),
  ];
  const chips = ['Southeast Memphis', 'Whitehaven', 'Greenline', ...(showUm5 ? ['University of Memphis area', ...(flags.um5Public ? [] : ['Pending confirmation'])] : [])];

  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="crumbs">Home / Current Holdings</div><div className="eyebrow light">Portfolio · Current</div>
        <h1>Current holdings.</h1>
        <p className="lede">{metrics.heldDeals} holdings. {n(metrics.held)} units. All in Memphis, Tennessee.</p>
      </div></section>

      <section className="proof"><div className="wrap">
        <div className="item"><strong>{n(metrics.held)}</strong><span>Units held today</span></div>
        <div className="item"><strong>{metrics.heldDeals}</strong><span>Holdings (Greyson Groves counts as one)</span></div>
        <div className="item"><strong>Memphis</strong><span>Southeast Memphis · Whitehaven · Greenline</span></div>
        <div className="item"><Gate flag="um5Public" label="UM5"><strong>{n(metrics.heldAll)}</strong><span>Units held incl. UM5 ({um5.units})</span></Gate></div>
      </div></section>

      <section><div className="wrap">
        <FilterGrid chips={chips} items={items} allLabel="All current" />
      </div></section>

      <section className="paper" style={{ paddingTop: '24px' }}><div className="wrap">
        <Detail d={deal('twin-oaks')} />
        <Detail d={deal('lakeville')} />
        <Detail d={deal('greyson-groves')} />
      </div></section>

      <Gate flag="um5Public" label="UM5 not yet approved for public view">
        <section id="um5"><div className="wrap">
          <div className="detail">
            <div>
              <div className="eyebrow">Near the University of Memphis · Memphis, TN</div><h2 style={{ marginTop: '14px' }}>UM5</h2><div className="rule"></div>
              <p className="lede small">{um5.summary} <Tag kind={um5.summaryTag} /></p>
              <p style={{ marginTop: '10px' }}><Tag kind="CONFIRM">{um5.unitSplitNote}</Tag></p>
              <table className="ledger" style={{ marginTop: '28px' }}><tbody>
                {um5.communities!.map((c) => <tr key={c.slug} className="sub"><td>{c.name}</td><td className="num">{c.units}</td></tr>)}
                <tr className="total"><td>Total units</td><td className="num">{um5.units}</td></tr>
                <tr><td>Acquired</td><td className="right">{fmtMonth(um5.acquired)}</td></tr>
                <tr><td>Leased as</td><td className="right">University Crossing</td></tr>
              </tbody></table>
            </div>
            <div className="gal">
              {um5.communities!.filter((c) => c.photo2).slice(0, 4).map((c) => (
                <div key={c.slug} className="ph32"><img src={c.photo2!.src} alt={c.photo2!.alt} loading="lazy" decoding="async" /></div>
              ))}
            </div>
          </div>
        </div></section>
      </Gate>

      <Gate flag="aliceSprings" label="Justin decides (recommended: keep hidden)">
        <section className="dark" id="hospitality"><div className="wrap split">
          <div>
            <div className="eyebrow">Campground & hospitality</div><h2 style={{ marginTop: '14px' }}>{aliceSprings.name}</h2><div className="rule"></div>
            <p className="lede small">{aliceSprings.summary} <Tag kind={aliceSprings.summaryTag} /></p>
            <table className="ledger on-dark" style={{ marginTop: '28px' }}><tbody>
              <tr><td>Type</td><td className="right">RV park and campground</td></tr>
              <tr><td>Location</td><td className="right">{aliceSprings.location}</td></tr>
              <tr><td>Sites</td><td className="right"><Tag kind="JUSTIN">site count</Tag></td></tr>
              <tr><td>Counted in unit totals</td><td className="right">No</td></tr>
            </tbody></table>
          </div>
          <div className="ph32"><div className="placeholder dark"><span>Photo needed<br />Alice Springs RV Park &amp; Resort</span></div></div>
        </div></section>
      </Gate>

      <section className="cta-band black damask"><div className="wrap">
        <div className="eyebrow light">Accredited investors</div><h2>Want the operating detail?</h2>
        <p className="lede">Property-level reporting is shared with investors through the portal, not on this site.</p>
        <div className="btn-row"><a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a><a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a></div>
      </div></section>
    </>
  );
}
