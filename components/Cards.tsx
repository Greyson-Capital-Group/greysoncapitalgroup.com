import { Confirm } from '@/components/Flags';
import { type Community, type Deal, flags, fmtMonth, isOn, isVisible, n, year } from '@/lib/content';

function Media({ photo, label, note, dark, badge, badgeClass }: { photo?: { src: string; alt: string }; label: string; note?: string; dark?: boolean; badge: string; badgeClass?: string }) {
  return (
    <div className="media">
      {photo ? (
        <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
      ) : (
        <div className={dark ? 'placeholder dark' : 'placeholder'}><span>Photo needed<br />{label}{note ? <><br /><small>{note}</small></> : null}</span></div>
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
        <p>{d.summary} {d.summaryConfirm && <Confirm>One-liner — confirm</Confirm>}</p>
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
        <div className="market">{c.neighborhood} · Memphis, TN <Confirm>Neighborhood</Confirm></div>
        <h3>{c.name}</h3>
        <p>{c.summary} <Confirm>One-liner — confirm</Confirm></p>
        {c.nameNote && <p><Confirm>{c.nameNote}</Confirm></p>}
        {c.photoNote && <p><Confirm>{c.photoNote}</Confirm></p>}
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
      <Media photo={d.photos[0]} label={d.name} note={d.photoNote ? 'Owned photo needed' : undefined} dark badge={badge} badgeClass="sold" />
      <div className="body">
        <div className="market">{d.market || <Confirm>Market — supply</Confirm>} {d.market && d.marketConfirm && <Confirm>confirm</Confirm>}</div>
        <h3>{d.name}</h3>
        {d.parts && (
          <div>{d.parts.map((p) => <span key={p.name} className="tag tag-dark">{p.name} {p.units}u</span>)} {d.partsNote && <Confirm>Names & split — confirm</Confirm>}</div>
        )}
        <p>
          {d.outcome ?? (d.flag ? <Confirm>Wording loads from private content</Confirm> : `Bought ${fmtMonth(d.acquired)}. Sold ${fmtMonth(d.sold)}. Full cycle complete.`)}{' '}
          {d.outcomeConfirm && <Confirm>Wording — confirm</Confirm>}
        </p>
        <div className="facts">
          <div><strong>{n(d.units)}</strong><span>Units</span></div>
          {d.sold && <div><strong>{year(d.sold)}</strong><span>Sold</span></div>}
          {irrVisible && (
            <div className={isOn('irr') ? '' : 'gated-fact'}>
              <strong>{d.irr!.toFixed(2)}%</strong>
              <span>IRR {!flags.irr && <Confirm>Counsel</Confirm>}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
