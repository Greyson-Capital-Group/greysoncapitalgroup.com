export const metadata = { title: 'Track Record' };

export default function TrackRecordPage() {
  return (
    <>
<section className="page-hero damask"><div className="wrap">
  <div className="crumbs">Home / Track Record</div><div className="eyebrow light">Portfolio · Track record</div>
  <h1>Track record.</h1>
  <p className="lede">What we bought, what we sold, and the lifetime scale behind ~2,000+ doors.</p>
</div></section>

<section id="lifetime-units"><div className="wrap split" style={{gridTemplateColumns:'1fr 1.3fr'}}>
  <div><div className="eyebrow">Lifetime units</div><h2 style={{marginTop:'14px'}}>How we count ~2,000+ doors.</h2><div className="rule"></div>
  <p className="lede" style={{fontSize:'17px'}}>Every multifamily unit Greyson has bought, held or sold. Counted once. Outdoor hospitality is not included.</p>
  <p style={{marginTop:'20px'}}><span className="note">Methodology note: total reaches ~2,000+ only once pending items are confirmed</span></p></div>
  <table className="ledger">
    <tr><th>Category</th><th>Communities</th><th className="num">Units</th></tr>
    <tr><td>Current holdings</td><td>Twin Oaks · Lakeville · Greyson Groves</td><td className="num">571</td></tr>
    <tr><td>Sold</td><td>Clearbrook · Millington Oaks · Kings Tree · Park Place · Villas at Cedar Creek</td><td className="num">567</td></tr>
    <tr className="sub"><td><b>Confirmed subtotal</b></td><td></td><td className="num">1,138</td></tr>
    <tr className="sub"><td><span className="pending">Pending</span></td><td>UM5 (156) · Woodmere (200) · Woods at Ridgeway (568)</td><td className="num">924</td></tr>
    <tr className="total"><td>Lifetime, incl. pending</td><td></td><td className="num">2,062</td></tr>
  </table>
</div></section>

<section className="dark" id="sold"><div className="wrap">
  <div className="section-head"><div><div className="eyebrow">Sold</div><h2>Full cycle complete.</h2></div><div className="filters" style={{margin:'0'}}><span className="on" style={{background:'#fff',color:'#111'}}>All sold</span><span style={{color:'#cfd1d4',borderColor:'#55585e'}}>FL3</span></div></div>
  <div className="cards">
    <article className="card light"><div className="media"><img src="/img/clearbrook-village-01.jpg" alt="Clearbrook Village, Memphis" /><span className="badge sold">Sold</span></div>
<div className="body"><div className="market">Memphis, TN</div><h3>Clearbrook Village</h3><p>Exited 2021. Full cycle complete. </p>
<div className="facts"><div><strong>144</strong><span>Units</span></div><div><strong>2021</strong><span>Exit</span></div></div></div></article>
    <article className="card light"><div className="media"><div className="placeholder dark">Photo placeholder<br />Millington Oaks<br />Source: listing broker OM — rights TBD</div><span className="badge sold">Sold</span></div>
<div className="body"><div className="market">Millington, TN <span className="note">confirm</span></div><h3>Millington Oaks</h3><p>Exited Apr 2022. Full cycle complete. </p>
<div className="facts"><div><strong>172</strong><span>Units</span></div><div><strong>Apr 2022</strong><span>Exit</span></div></div></div></article>
    <article className="card light"><div className="media"><div className="placeholder dark">Photo placeholder<br />Kings Tree<br />Source: listing broker OM — rights TBD</div><span className="badge sold">Sold</span></div>
<div className="body"><div className="market">Orange Park, FL</div><h3>Kings Tree</h3><div><span className="tag" style={{color:'#cfd1d4'}}>FL3</span></div><p>Exited 2022. Full cycle complete. </p>
<div className="facts"><div><strong>63</strong><span>Units</span></div><div><strong>2022</strong><span>Exit</span></div></div></div></article>
    <article className="card light"><div className="media"><div className="placeholder dark">Photo placeholder<br />Park Place<br />Source: listing broker OM — rights TBD</div><span className="badge sold">Sold</span></div>
<div className="body"><div className="market">Jacksonville area, FL <span className="note">confirm city</span></div><h3>Park Place</h3><div><span className="tag" style={{color:'#cfd1d4'}}>FL3</span></div><p>Exited 2022. Full cycle complete. </p>
<div className="facts"><div><strong>70</strong><span>Units</span></div><div><strong>2022</strong><span>Exit</span></div></div></div></article>
    <article className="card light"><div className="media"><img src="/img/villas-at-cedar-creek-01.jpg" alt="Villas at Cedar Creek" /><span className="badge sold">Sold</span></div>
<div className="body"><div className="market">Jacksonville area, FL <span className="note">confirm city</span></div><h3>Villas at Cedar Creek</h3><div><span className="tag" style={{color:'#cfd1d4'}}>FL3</span></div><p>Exited 2022. Full cycle complete. </p>
<div className="facts"><div><strong>118</strong><span>Units</span></div><div><strong>2022</strong><span>Exit</span></div></div></div></article>
    <article className="card light" style={{justifyContent:'center',padding:'40px',background:'transparent',border:'1px solid #3a3c40'}}><div className="eyebrow">FL3 Portfolio</div><h3 style={{margin:'14px 0 10px'}}>Three Florida communities. 251 units. Sold 2022.</h3><p>Kings Tree, Park Place and Villas at Cedar Creek were held and sold together.</p></article>
  </div>
  <p style={{marginTop:'40px',color:'#9a9da3',fontSize:'14px'}}>Deal-level performance is not published on this site. Purchase and sale years shown where confirmed. <span className="note">Acquisition years — supply</span></p>
</div></section>

<section id="pending"><div className="wrap">
  <div className="section-head"><div><div className="eyebrow">Pending confirmation</div><h2>Held back until confirmed.</h2></div></div>
  <div className="cards">
    <article className="card pending-card light"><div className="media"><img src="/img/woodmere-reserve-01.jpg" alt="Woodmere Reserve" /><span className="badge" style={{background:'#2a2b2e',color:'#f0d27a',borderColor:'#f0d27a'}}>Pending confirmation</span></div>
<div className="body"><div className="market"><span className="note">Market — confirm</span></div><h3>Woodmere</h3><div><span className="pending">Pending confirmation</span></div><p>Status, card type and public wording pending confirmation.</p>
<div className="facts"><div><strong>200</strong><span>Units (pending)</span></div><div><strong>—</strong><span>Status TBC</span></div></div></div></article>
    <article className="card pending-card light"><div className="media"><div className="placeholder ">Photo placeholder<br />Woods at Ridgeway</div><span className="badge" style={{background:'#2a2b2e',color:'#f0d27a',borderColor:'#f0d27a'}}>Pending confirmation</span></div>
<div className="body"><div className="market">Memphis, TN</div><h3>Woods at Ridgeway</h3><div><span className="pending">Pending confirmation</span></div><p>Prior interest. Status and public wording pending confirmation.</p>
<div className="facts"><div><strong>568</strong><span>Units (pending)</span></div><div><strong>—</strong><span>Status TBC</span></div></div></div></article>
    <article className="card pending-card light"><div className="media"><img src="/img/pending_um5_exterior_02.jpg" alt="UM5 building courtyard" /><span className="badge" style={{background:'#2a2b2e',color:'#f0d27a',borderColor:'#f0d27a'}}>Pending confirmation</span></div>
<div className="body"><div className="market">Memphis, TN</div><h3>UM5 Portfolio</h3><div><span className="pending">Pending confirmation</span></div><p>Listed under Current Holdings as pending.</p>
<div className="facts"><div><strong>156</strong><span>Units (pending)</span></div><div><strong>—</strong><span>Status TBC</span></div></div></div></article>
  </div>
</div></section>

<section className="cta-band black damask"><div className="wrap">
  <div className="eyebrow light">Accredited investors</div><h2>Ask us about any deal on this page.</h2>
  <div className="btn-row"><a className="btn btn-silver" href="/investors">Accredited investor inquiry</a><a className="btn btn-ghost" href="/contact">Contact</a></div>
</div></section>
    </>
  );
}
