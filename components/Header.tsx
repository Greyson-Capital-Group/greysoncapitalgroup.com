'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { JUNIPER_URL, NAV } from '@/data/site';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <img src="/img/logo_horizontal_white.png" alt="Greyson Capital Group" />
        </Link>
        <button className="nav-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <a className="login" href={JUNIPER_URL}>Investor Login</a>
        </nav>
      </div>
    </header>
  );
}
