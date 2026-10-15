import Link from 'next/link';
import { CONTACT_EMAIL, JUNIPER_URL } from '@/data/site';

export default function Footer() {
  return (
    <footer className="site-footer"><div className="wrap">
      <div className="top">
        <div><img src="/img/logo_lockup_white.png" alt="Greyson Capital Group" /><p style={{ marginTop: 18, maxWidth: 300 }}>Multifamily investment and asset management.</p></div>
        <div><h5>Portfolio</h5><ul><li><Link href="/current-holdings">Current Holdings</Link></li><li><Link href="/track-record">Track Record</Link></li><li><Link href="/strategy">Strategy</Link></li></ul></div>
        <div><h5>Firm</h5><ul><li><Link href="/about">About</Link></li><li><Link href="/investors">Investors</Link></li><li><Link href="/contact">Contact</Link></li><li><a href={JUNIPER_URL}>Investor Login</a></li></ul></div>
        <div><h5>Contact</h5><ul><li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li><li><span className="note">Phone — confirm</span></li><li><span className="note">Mailing address — confirm</span></li></ul></div>
      </div>
      <p className="legal">© {new Date().getFullYear()} Greyson Capital Group, LLC. This website is for informational purposes only and is not an offer to sell, or a solicitation of an offer to buy, any security. Any offering is made only to qualified, accredited investors through definitive offering documents. Past results do not guarantee future results. Unit counts are approximate. <span className="note">Final disclaimer language — securities counsel to supply</span></p>
    </div></footer>
  );
}
