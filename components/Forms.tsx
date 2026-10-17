'use client';
import { useState } from 'react';

// Submissions go to Netlify Forms (free tier). Netlify detects the fields from the
// hidden copies in public/html-forms/, and email notifications are set in the Netlify dashboard.
type Status = 'idle' | 'sending' | 'sent' | 'error';

function useNetlifyForm(formName: 'investor-inquiry' | 'contact') {
  const [status, setStatus] = useState<Status>('idle');
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('form-name', formName);
    setStatus('sending');
    try {
      const file = formName === 'contact' ? 'contact' : 'investor';
      const res = await fetch(`/html-forms/_${file}-form.html`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };
  return { status, onSubmit };
}

function Result({ status }: { status: Status }) {
  if (status === 'sent') return <p className="form-msg ok">Thank you. Your message was received, and a principal will follow up directly.</p>;
  if (status === 'error') return <p className="form-msg">Something went wrong sending your message. Please email info@greysoncapitalgroup.com.</p>;
  return null;
}

const Honeypot = () => (
  <p hidden><label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
);

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
  const { status, onSubmit } = useNetlifyForm('investor-inquiry');
  return (
    <form className="form" name="investor-inquiry" onSubmit={onSubmit}>
      <Honeypot />
      <label>First name<input className="field" name="firstName" required autoComplete="given-name" /></label>
      <label>Last name<input className="field" name="lastName" required autoComplete="family-name" /></label>
      <label>Email<input className="field" type="email" name="email" required autoComplete="email" /></label>
      <label>Phone<input className="field" type="tel" name="phone" autoComplete="tel" /></label>
      <label className="full">Investor type<Choice name="investorType" options={['Individual', 'Family office', 'Institution', 'Advisor / RIA']} /></label>
      <label className="full">Typical commitment range<div className="radio-row"><span className="note note-justin">JUSTIN — commitment ranges</span></div></label>
      <label className="full">Anything we should know<textarea className="field tall" name="notes" /></label>
      <label className="full check"><input type="checkbox" name="accredited" required /> <span>I confirm I am an accredited investor as defined in Rule 501 of Regulation D. <span className="note note-counsel">COUNSEL — accreditation wording</span></span></label>
      <label className="full check"><input type="checkbox" name="notAnOffer" required /> <span>I understand this is not an offer to sell or a solicitation to buy any security.</span></label>
      <div className="full">
        <button type="submit" className="btn btn-silver" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit inquiry'}</button>
        <Result status={status} />
      </div>
    </form>
  );
}

export function ContactForm() {
  const { status, onSubmit } = useNetlifyForm('contact');
  return (
    <form className="form" name="contact" onSubmit={onSubmit}>
      <Honeypot />
      <label>Name<input className="field" name="name" required autoComplete="name" /></label>
      <label>Email<input className="field" type="email" name="email" required autoComplete="email" /></label>
      <label>Phone<input className="field" type="tel" name="phone" autoComplete="tel" /></label>
      <label>Company (optional)<input className="field" name="company" autoComplete="organization" /></label>
      <label className="full">Topic<Choice name="topic" options={['Schedule a call', 'Investor inquiry', 'Existing investor', 'Brokers / sellers', 'Media', 'General']} /></label>
      <label className="full">Message<textarea className="field tall" name="message" required /></label>
      <div className="full">
        <button type="submit" className="btn btn-dark" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        <Result status={status} />
      </div>
    </form>
  );
}
