import { Confirm, Gate } from '@/components/Flags';
import { capital, copy, metrics, n } from '@/lib/content';
import { JUNIPER_URL, SCHEDULE_URL } from '@/data/site';

/** Homepage hero. `variant` picks headline A or B from content/copy.json. */
export default function Hero({ variant, label }: { variant: 'A' | 'B'; label?: string }) {
  const h = copy.hero[variant];
  return (
    <section className="hero damask"><div className="wrap">
      <div>
        <div className="eyebrow light">Greyson Capital Group · Multifamily {label && <Confirm>{label}</Confirm>}</div>
        <h1 className="headline">{h.headline}</h1>
        <p className="hero-sub">{copy.hero.sub}</p>
        <div className="hero-metrics">
          <div><strong>{n(metrics.confirmed)}</strong><span>Multifamily units held and sold · {n(metrics.held)} held, {n(metrics.sold)} sold <a href="/track-record#methodology" className="fn">¹</a></span></div>
          <Gate flag="lifetimeTotal" label="pending items">
            <div><strong>~2,000+</strong><span>Lifetime multifamily doors ({n(metrics.lifetime)}) <a href="/track-record#methodology" className="fn">¹</a></span></div>
          </Gate>
          <Gate flag="capitalTotals" label="Justin + counsel">
            <div><strong>{capital.capitalDeployed.display}</strong><span>{capital.capitalDeployed.label}</span></div>
          </Gate>
        </div>
        <div className="btn-row">
          <a className="btn btn-silver" href="/investors#inquiry">Accredited Investor Inquiry</a>
          <a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a>
        </div>
        <p className="secondary-link"><a href={JUNIPER_URL}>Existing investors: log in to Juniper Square →</a></p>
      </div>
      <div className="hero-photo"><img src="/img/current_twin-oaks_exterior_01.jpg" alt="Twin Oaks Townhomes, East Memphis" fetchPriority="high" /><div className="cap">Twin Oaks Townhomes · East Memphis · 253 units</div></div>
    </div></section>
  );
}
