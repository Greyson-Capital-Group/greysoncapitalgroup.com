import { InvestorForm } from '@/components/Forms';
import { JUNIPER_URL, SCHEDULE_ENABLED, SCHEDULE_URL } from '@/data/site';
export const metadata = { title: 'Investors' };

export default function InvestorsPage() {
  return (
    <>
<section className="page-hero damask"><div className="wrap">
  <div className="crumbs">Home / Investors</div><div className="eyebrow light">For accredited investors</div>
  <h1>Invest with an operator.</h1>
  <p className="lede">We work with accredited individuals, family offices and smaller institutions. Start with a short inquiry.</p>
  <div className="btn-row"><a className="btn btn-silver" href="#inquiry">Accredited Investor Inquiry</a>{SCHEDULE_ENABLED && <a className="btn btn-ghost" href={SCHEDULE_URL}>Schedule a Call</a>}</div>
  <p className="secondary-link"><a href={JUNIPER_URL}>Existing investors: log in to Juniper Square →</a></p>
</div></section>

<section><div className="wrap">
  <div className="eyebrow">Who we work with</div><h2 style={{marginTop:'14px'}}>Three kinds of partners.</h2>
  <div className="grid3" style={{marginTop:'56px'}}>
    <div className="tile"><h4>Accredited individuals</h4><p>High-net-worth investors who want direct access to the principals.</p></div>
    <div className="tile"><h4>Family offices</h4><p>Offices seeking multifamily exposure with a hands-on sponsor.</p></div>
    <div className="tile"><h4>Smaller institutions</h4><p>Allocators who need clear reporting and a responsive team.</p></div>
  </div>
</div></section>

<section className="paper"><div className="wrap">
  <div className="eyebrow">The process</div><h2 style={{marginTop:'14px'}}>How it works.</h2>
  <div className="steps four" style={{marginTop:'48px'}}>
    <div className="step"><div className="n">01</div><h3>Inquire</h3><p>Submit the short form below.</p></div>
    <div className="step"><div className="n">02</div><h3>Confirm</h3><p>We confirm accredited status before sharing details.</p></div>
    <div className="step"><div className="n">03</div><h3>Talk</h3><p>We follow up to set a call with the principals about fit and goals.</p></div>
    <div className="step"><div className="n">04</div><h3>Review</h3><p>When an opportunity is available, materials are shared in the investor portal.</p></div>
  </div>
</div></section>

<section className="dark" id="inquiry"><div className="wrap">
  <div className="gate">
    <div className="pane">
      <div className="eyebrow">Accredited investor inquiry</div><h2 style={{marginTop:'14px'}}>Request a conversation.</h2>
      <p className="lede" style={{fontSize:'16px',marginTop:'16px'}}>This is an inquiry, not an offer. Nothing here is an offer to sell securities.</p>
      <InvestorForm />
    </div>
    <div className="pane">
      <div className="eyebrow">Already invested</div><h3 style={{margin:'14px 0 12px'}}>Investor portal</h3>
      <p style={{color:'#b5b8be'}}>Statements, K-1s and updates live in Juniper Square.</p>
      <div className="btn-row" style={{marginTop:'24px'}}><a className="btn btn-ghost" href={JUNIPER_URL}>Log in to Juniper Square</a></div>
      <div style={{marginTop:'56px',paddingTop:'32px',borderTop:'1px solid #3a3c40'}}>
        <div className="eyebrow">What you get</div>
        <ul className="pill-list" style={{marginTop:'6px'}}>
          <li style={{borderColor:'#3a3c40'}}><b>—</b><span style={{color:'#cfd1d4'}}>Direct access to the principals</span></li>
          <li style={{borderColor:'#3a3c40'}}><b>—</b><span style={{color:'#cfd1d4'}}>Portal-based documents and updates</span></li>
          <li style={{borderColor:'#3a3c40'}}><b>—</b><span style={{color:'#cfd1d4'}}>Monthly or quarterly updates, by asset</span></li>
        </ul>
      </div>
    </div>
  </div>
</div></section>

<section><div className="wrap">
  <div className="eyebrow">Questions</div><h2 style={{marginTop:'14px',marginBottom:'40px'}}>Investor FAQ.</h2>
  <div className="faq">
    <div><h4>Who can invest?</h4><p>Accredited investors only. We confirm status before sharing offering details.</p></div>
    <div><h4>Is there an offering open now?</h4><p>We do not post offerings on this site. Submit an inquiry and we will tell you directly.</p></div>
    <div><h4>Where are returns reported?</h4><p>In the investor portal, to investors. We do not publish performance for communities we still hold.</p></div>
    <div><h4>How often do you report?</h4><p>Monthly or quarterly updates, depending on the asset and where it is in the business plan. Properties under heavy renovation report monthly until they stabilize.</p></div>
  </div>
</div></section>
    </>
  );
}
