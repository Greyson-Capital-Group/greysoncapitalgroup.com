// Reads the structured content in /content and derives every number the site shows.
// Nothing here invents figures: all totals are sums of the locked deal list.
import portfolio from '@/content/portfolio.json';
import flagsJson from '@/content/flags.json';
import copyJson from '@/content/copy.json';
import { SHOW_REVIEW_NOTES } from '@/data/site';
import fs from 'node:fs';
import path from 'node:path';

// Figures not cleared for public view (IRRs, capital totals, Woodmere/Ridgeway wording) are kept
// out of the public repo. They load at build time from the GREYSON_PRIVATE_CONTENT env var
// (set in Netlify), or from a local, gitignored content/private.json.
type Money = { value: number; display: string; label: string; detail?: string; flag?: string };
type Private = { capital?: Record<'equityRaised' | 'capitalDeployed', Money>; deals?: Record<string, { irr?: number; outcome?: string }> };
function loadPrivate(): Private {
  try {
    if (process.env.GREYSON_PRIVATE_CONTENT) return JSON.parse(process.env.GREYSON_PRIVATE_CONTENT);
    const f = path.join(process.cwd(), 'content', 'private.json');
    if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, 'utf8'));
  } catch (e) {
    console.warn('Private content could not be read:', e);
  }
  return {};
}
const priv = loadPrivate();
export const hasPrivate = Boolean(priv.capital || priv.deals);

export type Photo = { src: string; alt: string };
export type Community = {
  slug: string; name: string; units: number; neighborhood: string; summary: string;
  photo?: Photo; photo2?: Photo; photoNote?: string; nameNote?: string;
};
export type Deal = {
  slug: string; name: string; status: 'current' | 'sold' | 'prior'; units: number;
  acquired?: string; sold?: string; irr?: number; market: string; marketConfirm?: boolean;
  neighborhood?: string; summary?: string; summaryConfirm?: boolean; flag?: FlagName;
  parts?: { name: string; units: number; confirm?: boolean }[]; partsNote?: string;
  photos: Photo[]; photoNote?: string; outcome?: string; outcomeConfirm?: boolean;
  capitalReturnedConfirm?: boolean; communities?: Community[];
};
export type FlagName = 'um5Public' | 'lifetimeTotal' | 'capitalTotals' | 'irr' | 'woodmere' | 'ridgeway' | 'aliceSprings' | 'latestNews';

export const flags = flagsJson as Record<FlagName, boolean> & { heroVariant: 'A' | 'B' };
export const copy = copyJson;
const missing = (label: string): Money => ({ value: 0, display: '—', label, detail: 'Private figure not loaded on this build' });
export const capital = {
  equityRaised: priv.capital?.equityRaised ?? missing('Lifetime equity raised'),
  capitalDeployed: priv.capital?.capitalDeployed ?? missing('Lifetime capital deployed (purchase + CapEx)'),
};
export const aliceSprings = portfolio.aliceSprings;
export const deals = (portfolio.deals as Deal[]).map((d) => ({ ...d, ...(priv.deals?.[d.slug] ?? {}) }));

/** true when the item is live on the public site. */
export const isOn = (f?: FlagName) => !f || flags[f] === true;
/** true when the item should render at all (live, or preview build for review). */
export const isVisible = (f?: FlagName) => isOn(f) || SHOW_REVIEW_NOTES;

export const deal = (slug: string) => deals.find((d) => d.slug === slug)!;
export const currentDeals = deals.filter((d) => d.status === 'current');
export const soldDeals = deals.filter((d) => d.status === 'sold');

const sum = (xs: Deal[]) => xs.reduce((a, d) => a + d.units, 0);

// Confirmed = no pending flag on the deal.
export const metrics = (() => {
  const heldConfirmed = currentDeals.filter((d) => !d.flag);
  const soldConfirmed = soldDeals.filter((d) => !d.flag);
  const held = sum(heldConfirmed);
  const sold = sum(soldConfirmed);
  const heldAll = sum(currentDeals);
  const lifetime = sum(deals);
  return {
    held, sold, confirmed: held + sold,
    heldDeals: heldConfirmed.length, soldDeals: soldConfirmed.length,
    heldAll, heldDealsAll: currentDeals.length,
    lifetime, pending: lifetime - held - sold,
    pendingDeals: deals.filter((d) => d.flag),
  };
})();

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const fmtMonth = (ym?: string) => {
  if (!ym) return '';
  const [y, m] = ym.split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
};
export const year = (ym?: string) => (ym ? ym.slice(0, 4) : '');
export const n = (x: number) => x.toLocaleString('en-US');
