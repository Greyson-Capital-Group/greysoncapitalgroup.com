// Reads the structured content in /content and derives every number the site shows.
// Nothing here invents figures: all totals are sums of the locked deal list.
import portfolio from '@/content/portfolio.json';
import flagsJson from '@/content/flags.json';
import copyJson from '@/content/copy.json';
import { SHOW_REVIEW_NOTES } from '@/data/site';
import fs from 'node:fs';
import path from 'node:path';

// Figures not cleared for public view (IRRs, deal financials, hospitality revenue) are kept
// out of the public repo. They load at build time from the GREYSON_PRIVATE_CONTENT env var
// (set in Netlify), or from a local, gitignored content/private.json.
type Money = { value: number; display: string; label: string; detail?: string; flag?: string };
export type Portfolio = { purchasePrice: string; capex: string; equity: string; capitalReturned: string; capitalReturnedTag?: string };
type Private = { aliceSprings?: { revenueHeadline?: string; revenueClaim?: string; revenueNote?: string }; capital?: Record<'equityRaised' | 'capitalDeployed', Money>; deals?: Record<string, { irr?: number; outcome?: string; portfolio?: Portfolio }> };
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
  slug: string; name: string; units: number; neighborhood: string; summary: string; summaryTag?: string;
  photo?: Photo; photo2?: Photo; photoNote?: string; nameNote?: string;
};
export type Part = {
  slug?: string; name: string; units: number; city?: string; confirm?: boolean; nameNote?: string;
  photo?: Photo; photoNote?: string; photoOwnershipConfirm?: boolean;
};
export type Deal = {
  slug: string; name: string; status: 'current' | 'sold' | 'prior'; units: number;
  acquired?: string; sold?: string; irr?: number; market: string; marketConfirm?: boolean;
  neighborhood?: string; summary?: string; summaryTag?: string; flag?: FlagName;
  description?: string; descriptionTag?: string; descriptionNote?: string;
  parts?: Part[]; partsDescriptionTag?: string; unitSplitNote?: string;
  photos: Photo[]; photoNote?: string; photoOwnershipConfirm?: boolean; outcome?: string; outcomeTag?: string;
  capitalReturnedConfirm?: boolean; communities?: Community[]; portfolio?: Portfolio;
};
export type FlagName = 'um5Public' | 'lifetimeTotal' | 'capitalTotals' | 'irr' | 'woodmere' | 'ridgeway' | 'aliceSprings' | 'latestNews' | 'dealFinancials' | 'davidShores' | 'hospitalityRevenue';

export const flags = flagsJson as Record<FlagName, boolean> & { heroVariant: 'A' | 'B' };
export const copy = copyJson;
const missing = (label: string): Money => ({ value: 0, display: '—', label, detail: 'Private figure not loaded on this build' });
// Capital totals are public (approved by Justin 2026-10-28); returns stay private.
const pubCapital = (portfolio as { capital?: Record<'equityRaised' | 'capitalDeployed', Money> }).capital;
export const capital = {
  equityRaised: pubCapital?.equityRaised ?? priv.capital?.equityRaised ?? missing('Lifetime equity raised'),
  capitalDeployed: pubCapital?.capitalDeployed ?? priv.capital?.capitalDeployed ?? missing('Lifetime capital deployed (purchase + CapEx)'),
};
export const aliceSprings = { ...portfolio.aliceSprings, ...(priv.aliceSprings ?? {}) } as typeof portfolio.aliceSprings & { revenueHeadline?: string; revenueClaim?: string; revenueNote?: string };
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
// Totals count every deal that is live on the public site: deals with no switch, plus deals whose
// switch in flags.json is on. Approving UM5, Woodmere or Ridgeway raises the totals automatically.
export const metrics = (() => {
  const heldLive = currentDeals.filter((d) => isOn(d.flag));
  const soldLive = soldDeals.filter((d) => isOn(d.flag));
  const priorLive = deals.filter((d) => d.status === 'prior' && isOn(d.flag));
  const held = sum(heldLive);
  const sold = sum(soldLive);
  const prior = sum(priorLive);
  const heldAll = sum(currentDeals);
  const lifetime = sum(deals);
  return {
    held, sold, prior, confirmed: held + sold + prior,
    heldDeals: heldLive.length, soldDeals: soldLive.length,
    // Full-cycle exits 2021–2022 (Clearbrook, Millington, Florida 3); Woodmere is reported separately.
    exits: soldDeals.filter((d) => !d.flag).length,
    heldAll, heldDealsAll: currentDeals.length,
    lifetime, pending: lifetime - held - sold - prior,
    pendingDeals: deals.filter((d) => !isOn(d.flag)),
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
