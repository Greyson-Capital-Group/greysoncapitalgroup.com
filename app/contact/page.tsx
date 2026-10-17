import { ContactForm } from '@/components/Forms';
import { JUNIPER_URL } from '@/data/site';
export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
<section className="page-hero damask"><div className="wrap">
  <div className="crumbs">Home / Contact</div><div className="eyebrow light">Contact</div>
  <h1>Contact Greyson.</h1>
  <p className="lede">A person reads every message. Tell us what you need and we will route it.</p>
</div></section>

<section id="schedule"><div className="wrap split" style={{gridTemplateColumns:'1.3fr 1fr'}}>
  <div>
    <div className="eyebrow">Send a message or schedule a call</div>
    <p style={{margin:'12px 0 0'}}>To set up a call with the principals, choose “Schedule a call” and tell us a few times that work. <span className="note note-justin">JUSTIN — calendar booking link</span></p>
    <div className="light-form"><ContactForm /></div>
  </div>
  <div>
    <div className="tile" style={{marginBottom:'36px'}}><h4>General</h4><p style={{fontSize:'18px',color:'var(--ink)'}}>info@greysoncapitalgroup.com</p></div>
    <div className="tile" style={{marginBottom:'36px'}}><h4>Investor relations</h4><p><a href="/investors" style={{borderBottom:'1px solid'}}>Accredited investor inquiry →</a><br /><a href={JUNIPER_URL} style={{borderBottom:'1px solid'}}>Investor portal login →</a></p></div>
    <div className="tile" style={{marginBottom:'36px'}}><h4>Phone</h4><p style={{fontSize:'18px',color:'var(--ink)'}}><a href="tel:+12318816554">231.881.6554</a></p></div>
    <div className="tile" style={{marginBottom:'36px'}}><h4>Mailing address</h4><p style={{color:'var(--ink)'}}>101 Washington Ave, PMB #144<br />Grand Haven, MI 49417</p></div>
    <div className="tile"><h4>Justin Richards, direct</h4><p><a href="mailto:jrichards@greysoncapitalgroup.com" style={{borderBottom:'1px solid'}}>jrichards@greysoncapitalgroup.com</a></p></div>
  </div>
</div></section>

<section className="black damask" style={{padding:'0'}}><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:'360px'}}>
  <div style={{overflow:'hidden'}}><img src="/img/current_highpoint-greenline_exterior_01.jpg" alt="Highpoint at the Greenline" loading="lazy" /></div>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'64px'}}><img src="/img/logo_G_silver.png" alt="" style={{width:'60px'}} /><h2 style={{marginTop:'24px'}}>Memphis communities.<br />Direct lines to the principals.</h2></div>
</div></section>
    </>
  );
}
