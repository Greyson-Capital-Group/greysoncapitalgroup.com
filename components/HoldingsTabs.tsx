import Link from 'next/link';

/** Sub-navigation for Current Holdings: Multifamily | Outdoor Hospitality. */
export default function HoldingsTabs({ active }: { active: 'multifamily' | 'hospitality' }) {
  return (
    <nav className="holdings-tabs" aria-label="Current holdings">
      <Link href="/current-holdings" className={active === 'multifamily' ? 'on' : ''} aria-current={active === 'multifamily' ? 'page' : undefined}>Multifamily</Link>
      <Link href="/current-holdings/outdoor-hospitality" className={active === 'hospitality' ? 'on' : ''} aria-current={active === 'hospitality' ? 'page' : undefined}>Outdoor Hospitality</Link>
    </nav>
  );
}
