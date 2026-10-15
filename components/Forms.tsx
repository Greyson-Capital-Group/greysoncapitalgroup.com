'use client';
import { useState } from 'react';

// Forms are fully built but not yet connected to an inbox.
// Next step: point onSubmit at an API route (e.g. /api/inquiry) once the recipient inbox is confirmed.
function useNotConnected() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  return { sent, onSubmit };
}

function Choice({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="radio-row">
      {options.map((o) => (
        <label key={o} className="choice"><input type="radio" name={name} value={o} /> <span>{o}</span></label>
      ))}
    </div>
  );
}

export function InvestorForm() {
  const { sent, onSubmit } = useNotConnected();
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>First name<input className="field" name="firstName" required autoComplete="given-name" /></label>
      <label>Last name<input className="field" name="lastName" required autoComplete="family-name" /></label>
      <label>Email<input className="field" type="email" name="email" required autoComplete="email" /></label>
      <label>Phone<input className="field" type="tel" name="phone" autoComplete="tel" /></label>
      <label className="full">Investor type<Choice name="investorType" options={['Individual', 'Family office', 'Institution', 'Advisor / RIA']} /></label>
      <label className="full">Typical commitment range<div className="radio-row"><span className="note">Ranges — Justin to set</span></div></label>
      <label className="full">Anything we should know<textarea className="field tall" name="notes" /></label>
      <label className="full check"><input type="checkbox" name="accredited" required /> <span>I confirm I am an accredited investor as defined in Rule 501 of Regulation D. <span className="note">Counsel to finalize wording</span></span></label>
      <label className="full check"><input type="checkbox" name="notAnOffer" required /> <span>I understand this is not an offer to sell or a solicitation to buy any security.</span></label>
      <div className="full">
        <button type="submit" className="btn btn-silver">Submit inquiry</button>
        {sent && <p className="form-msg">Preview only: this form is not connected to an inbox yet.</p>}
      </div>
    </form>
  );
}

export function ContactForm() {
  const { sent, onSubmit } = useNotConnected();
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input className="field" name="name" required autoComplete="name" /></label>
      <label>Email<input className="field" type="email" name="email" required autoComplete="email" /></label>
      <label>Phone<input className="field" type="tel" name="phone" autoComplete="tel" /></label>
      <label>Company (optional)<input className="field" name="company" autoComplete="organization" /></label>
      <label className="full">Topic<Choice name="topic" options={['Investor inquiry', 'Existing investor', 'Brokers / sellers', 'Media', 'General']} /></label>
      <label className="full">Message<textarea className="field tall" name="message" required /></label>
      <div className="full">
        <button type="submit" className="btn btn-dark">Send message</button> <span className="note" style={{ marginLeft: 12 }}>Recipient inbox + spam protection — confirm</span>
        {sent && <p className="form-msg">Preview only: this form is not connected to an inbox yet.</p>}
      </div>
    </form>
  );
}
