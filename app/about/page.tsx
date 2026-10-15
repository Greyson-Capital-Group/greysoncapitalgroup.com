export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
<section className="page-hero damask"><div className="wrap">
  <div className="crumbs">Home / About</div><div className="eyebrow light">About</div>
  <h1>A multifamily firm run by the people who own the decisions.</h1>
  <p className="lede">Small team. Direct access. Accountable for every unit.</p>
</div></section>

<section><div className="wrap split">
  <div><div className="eyebrow">The firm</div><h2 style={{marginTop:'14px'}}>Our story.</h2><div className="rule"></div>
  <p className="lede" style={{fontSize:'17px'}}>Greyson Capital Group invests in and manages multifamily communities. <span className="note">Founding year, origin and HQ city — Justin to supply</span></p>
  <p className="lede" style={{fontSize:'17px',marginTop:'16px'}}><span className="note">2–3 short paragraphs: why the firm exists, how it has grown, what has not changed</span></p></div>
  <div style={{aspectRatio:'4/3',overflow:'hidden'}}><img src="/img/current_twin-oaks_sign_03.jpg" alt="Twin Oaks Townhomes sign" /></div>
</div></section>

<section className="dark"><div className="wrap">
  <div className="eyebrow">Principles</div><h2 style={{marginTop:'14px'}}>How we operate.</h2>
  <div className="grid4" style={{marginTop:'56px'}}>
    <div className="tile"><h4>Operator first</h4><p>We stay close to the property and the numbers.</p></div>
    <div className="tile"><h4>Straight reporting</h4><p>Clear updates. No spin.</p></div>
    <div className="tile"><h4>Aligned</h4><p><span className="note">GP co-invest / alignment statement — confirm before use</span></p></div>
    <div className="tile"><h4>Long view</h4><p>Relationships with investors span more than one deal.</p></div>
  </div>
</div></section>

<section><div className="wrap">
  <div className="section-head"><div><div className="eyebrow">Leadership</div><h2>The team.</h2></div></div>
  <div className="team">
    <div className="person"><div className="ph" style={{overflow:'hidden'}}><img src="/img/justin-richards.jpg" alt="Justin Richards" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div><h3>Justin Richards</h3><div className="role"><span className="note">Title — supply</span></div><p><span className="note">Bio — client-supplied only (80–120 words)</span></p></div>
    <div className="person"><div className="ph placeholder ">Headshot placeholder<br />Team member 2</div><h3><span className="note">Name — supply</span></h3><div className="role"><span className="note">Title</span></div><p><span className="note">Bio — supply</span></p></div>
    <div className="person"><div className="ph placeholder ">Headshot placeholder<br />Team member 3</div><h3><span className="note">Name — supply</span></h3><div className="role"><span className="note">Title</span></div><p><span className="note">Bio — supply</span></p></div>
  </div>
</div></section>

<section className="paper"><div className="wrap split">
  <div><div className="eyebrow">Partners</div><h2 style={{marginTop:'14px'}}>Who we work with.</h2><div className="rule"></div><p className="lede" style={{fontSize:'17px'}}>Property management, lending and legal partners. <span className="note">Names and permission to list — confirm (e.g., Multi-South Management)</span></p></div>
  <div className="grid3"><div style={{height:'120px'}} className="placeholder ">Partner logo<br />placeholder</div><div style={{height:'120px'}} className="placeholder ">Partner logo<br />placeholder</div><div style={{height:'120px'}} className="placeholder ">Partner logo<br />placeholder</div></div>
</div></section>

<section className="cta-band black damask"><div className="wrap">
  <img src="/img/logo_G_silver.png" alt="" style={{width:'64px',margin:'0 auto'}} /><h2>Talk to the principals.</h2>
  <div className="btn-row"><a className="btn btn-silver" href="/investors">Accredited investor inquiry</a><a className="btn btn-ghost" href="/contact">General contact</a></div>
</div></section>
    </>
  );
}
