import { Gate, Tag } from '@/components/Flags';
import { type Community, type Deal, type Part, flags, fmtMonth, isVisible, n, year } from '@/lib/content';
import { SHOW_REVIEW_NOTES } from '@/data/site';

type P = { src: string; alt: string };

/**
 * Card image. With no owned photo: the preview shows a labeled "photo needed" block;
 * the launch build shows a plain brand block (no placeholder text in public).
 */
function Media({ photo, label, note, dark, badge, badgeClass }: { photo?: P; label: string; note?: string; dark?: boolean; badge: string; badgeClass?: string }) {
  return (
    <div className="media">
      {photo ? (
        <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
      ) : SHOW_REVIEW_NOTES ? (
        <div className={dark ? 'placeholder dark' : 'placeholder'}><span>Photo needed<br />{label}{note && note.replace(/^Photo needed[:.]?\s*/i, '') ? <><br /><small>{note.replace(/^Photo needed[:.]?\s*/i, '')}</small></> : null}</span></div>
      ) : (
        <div className="brand-block" role="img" aria-label={label}><img src="/img/logo_G_silver.png" alt="" /></div>
      )}
      <span className={`badge ${badgeClass ?? ''}`}>{badge}</span>
    </div>
  );
}

/** Card for a deal that Greyson holds today. */
export function CurrentCard({ d }: { d: Deal }) {
  return (
    <article className="card">
      {d.slug === 'greyson-groves' ? (
        <div className="media duo">
          <img src={d.photos[0].src} alt={d.photos[0].alt} loading="lazy" decoding="async" />
          <img src={d.photos[2].src} alt={d.photos[2].alt} loading="lazy" decoding="async" />
          <span className="badge">Current</span>
        </div>
      ) : (
        <Media photo={d.photos[0]} label={d.name} note={d.photoNote ? 'Owned / Multi-South photo' : undefined} badge="Current" />
      )}
      <div className="body">
        <div className="market">{d.market}</div>
        <h3>{d.name}</h3>
        {d.parts && <div>{d.parts.map((p) => <span key={p.name} className="tag">{p.name} · {p.units}u</span>)}</div>}
        <p>{d.summary} <Tag kind={d.summaryTag} /></p>
        <div className="facts">
          <div><strong>{n(d.units)}</strong><span>Units</span></div>
          <div><strong>{fmtMonth(d.acquired)}</strong><span>Acquired</span></div>
        </div>
      </div>
    </article>
  );
}

/** One of the five UM5 communities. */
export function CommunityCard({ c, acquired }: { c: Community; acquired?: string }) {
  return (
    <article className="card">
      <Media photo={c.photo} label={c.name} badge="UM5" />
      <div className="body">
        <div className="market">Near the University of Memphis · Memphis, TN</div>
        <h3>{c.name}</h3>
        <p>{c.summary} <Tag kind={c.summaryTag} /></p>
        {c.photoNote && <p><Tag kind="JUSTIN">{c.photoNote}</Tag></p>}
        <div className="facts">
          <div><strong>{n(c.units)}</strong><span>Units</span></div>
          <div><strong>{fmtMonth(acquired)}</strong><span>Acquired (UM5)</span></div>
        </div>
      </div>
    </article>
  );
}

/** Card for a sold or prior deal. IRR shows only for deals that carry one, and only when the irr flag allows. */
export function SoldCard({ d, showIrr = true }: { d: Deal; showIrr?: boolean }) {
  const irrVisible = showIrr && d.irr !== undefined && isVisible('irr');
  const badge = d.status === 'prior' ? 'Prior interest' : 'Sold';
  return (
    <article className="card light">
      <Media photo={d.photos[0]} label={d.name} note={d.photoNote} dark badge={badge} badgeClass="sold" />
      <div className="body">
        <div className="market">{d.market || <Tag kind="JUSTIN">Market</Tag>}</div>
        <h3>{d.name}</h3>
        {d.parts && <div>{d.parts.map((p) => <span key={p.name} className="tag tag-dark">{p.name} {p.units}u</span>)}</div>}
        <p>
          {d.outcome ?? (d.flag ? <Tag kind="CONFIRM">Wording loads from private content</Tag> : `Bought ${fmtMonth(d.acquired)}. Sold ${fmtMonth(d.sold)}. Full cycle complete.`)}{' '}
          <Tag kind={d.outcomeTag} />
        </p>
        {d.photoOwnershipConfirm && <p><Tag kind="CONFIRM">Photo from 2022 site: confirm Greyson owns it</Tag></p>}
        <div className="facts">
          <div><strong>{n(d.units)}</strong><span>Units</span></div>
          {d.sold && <div><strong>{year(d.sold)}</strong><span>Sold</span></div>}
          {irrVisible && (
            <div>
              <strong>{d.irr!.toFixed(2)}%</strong>
              <span>IRR {!flags.irr && <Tag kind="COUNSEL">basis</Tag>}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/** One property inside the Florida 3 Portfolio. Per-property price, equity and IRR are not shown. */
export function PartCard({ p, group }: { p: Part; group: Deal }) {
  return (
    <article className="card light">
      <Media photo={p.photo} label={p.name} note={p.photoNote} dark badge="Sold · FL3" badgeClass="sold" />
      <div className="body">
        <div className="market">{p.city}</div>
        <h3>{p.name}</h3>
        {p.nameNote && <p><Tag kind="CONFIRM">{p.nameNote}</Tag></p>}
        <p>Sold, part of the Florida 3 Portfolio. <Tag kind={group.partsDescriptionTag}>one-line description</Tag></p>
        {p.photoOwnershipConfirm && <p><Tag kind="CONFIRM">Photo from 2022 site: confirm Greyson owns it</Tag></p>}
        <div className="facts">
          <div><strong>{n(p.units)}</strong><span>Units</span></div>
          <div><strong>{year(group.acquired)}–{year(group.sold)}</strong><span>Held (portfolio dates) <Tag kind="CONFIRM">per-property dates</Tag></span></div>
        </div>
      </div>
    </article>
  );
}

/** Portfolio-level header for FL3. All money and return figures stay at this level. */
export function PortfolioHeader({ d }: { d: Deal }) {
  const pf = d.portfolio;
  return (
    <div className="portfolio-head">
      <div>
        <div className="eyebrow">Florida 3 Portfolio · {d.market}</div>
        <h3>Three communities, bought and sold together.</h3>
        <p>Bought {fmtMonth(d.acquired)}. Sold {fmtMonth(d.sold)}. Full cycle complete.</p>
      </div>
      <dl className="pf-facts">
        <div><dt>Communities</dt><dd>{d.parts?.length}</dd></div>
        <div><dt>Units</dt><dd>{n(d.units)}</dd></div>
        {d.irr !== undefined && isVisible('irr') && (
          <Gate flag="irr" label="counsel"><div><dt>Portfolio IRR</dt><dd>{d.irr.toFixed(2)}%</dd></div></Gate>
        )}
        {pf && isVisible('dealFinancials') && (
          <Gate flag="dealFinancials" label="counsel">
            <div><dt>Purchase price</dt><dd>{pf.purchasePrice}</dd></div>
            <div><dt>CapEx</dt><dd>{pf.capex}</dd></div>
            <div><dt>Equity</dt><dd>{pf.equity}</dd></div>
            <div><dt>Capital returned</dt><dd>{pf.capitalReturned} <Tag kind="COUNSEL">{pf.capitalReturnedTag}</Tag></dd></div>
          </Gate>
        )}
      </dl>
    </div>
  );
}
