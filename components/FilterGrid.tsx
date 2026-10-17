'use client';
import { useState } from 'react';

export type FilterItem = { id: string; tags: string[]; node: React.ReactNode; wide?: boolean };

/** Card grid with filter chips. Chips come from the item tags, in the order given. */
export default function FilterGrid({ chips, items, allLabel = 'All' }: { chips: string[]; items: FilterItem[]; allLabel?: string }) {
  const [on, setOn] = useState<string | null>(null);
  const shown = on ? items.filter((i) => i.tags.includes(on)) : items;
  return (
    <>
      <div className="filters" role="group" aria-label="Filter communities">
        {[null, ...chips].map((c) => (
          <button key={c ?? 'all'} type="button" className={on === c ? 'on' : ''} aria-pressed={on === c} onClick={() => setOn(c)}>
            {c ?? allLabel}
          </button>
        ))}
      </div>
      <div className="cards">{shown.map((i) => <div key={i.id} className={i.wide ? 'card-cell wide' : 'card-cell'}>{i.node}</div>)}</div>
    </>
  );
}
