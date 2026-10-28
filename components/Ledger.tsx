import { deal, isOn, isVisible, metrics, n, type Deal } from '@/lib/content';
import { SHOW_REVIEW_NOTES } from '@/data/site';

/**
 * Track Record unit ledger. Every community is its own row, grouped by status.
 * Portfolios (Greyson Groves, UM5, Florida 3) show their communities underneath.
 * Rows behind a switch in flags.json appear only in the preview, marked "Hidden at launch",
 * and are left out of the totals until the switch is on.
 */
type Row = { name: string; units: number; detail?: string; sub?: boolean; d: Deal };

function rowsFor(d: Deal): Row[] {
  const kids = d.communities ?? d.parts;
  if (!kids) return [{ name: d.name, units: d.units, d }];
  return [
    { name: d.name, units: d.units, detail: `${kids.length} communities`, d },
    ...kids.map((k) => ({ name: k.name, units: k.units, sub: true, d })),
  ];
}

function Group({ label, slugs }: { label: string; slugs: string[] }) {
  const items = slugs.map(deal).filter((d) => isVisible(d.flag));
  if (!items.length) return null;
  const live = items.filter((d) => isOn(d.flag));
  const subtotal = live.reduce((a, d) => a + d.units, 0);
  return (
    <>
      <tr className="group-row"><th colSpan={2}>{label}</th><th className="num">{live.length ? n(subtotal) : '—'}</th></tr>
      {items.flatMap(rowsFor).map((r) => {
        const hidden = !isOn(r.d.flag);
        return (
          <tr key={r.d.slug + r.name} className={[r.sub ? 'sub' : '', hidden ? 'gated-row' : ''].join(' ')}>
            <td className={r.sub ? 'indent' : ''}>{r.name}</td>
            <td>{r.detail} {!r.sub && hidden && SHOW_REVIEW_NOTES && <span className="pending">Hidden at launch</span>}</td>
            <td className="num">{n(r.units)}</td>
          </tr>
        );
      })}
    </>
  );
}

export default function Ledger() {
  return (
    <table className="ledger ledger-assets"><tbody>
      <tr><th>Community</th><th></th><th className="num">Units</th></tr>
      <Group label="Held today" slugs={['twin-oaks', 'lakeville', 'greyson-groves', 'um5']} />
      <Group label="Sold" slugs={['clearbrook', 'millington-oaks', 'fl3', 'woodmere']} />
      <Group label="Prior interest" slugs={['woods-at-ridgeway']} />
      <tr className="total"><td>Total</td><td></td><td className="num">{n(metrics.confirmed)}</td></tr>
    </tbody></table>
  );
}
