import { Tag } from '@/components/Flags';
import { CONTACT_EMAIL } from '@/data/site';

export const metadata = { title: 'Privacy Policy' };

// Plain-language policy written to match what this site actually does (Netlify Forms, Google Analytics,
// link-out to the Juniper Square portal). DRAFT for Justin; counsel may replace it with final language.
export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero damask"><div className="wrap">
        <div className="eyebrow light">Legal</div>
        <h1>Privacy policy.</h1>
        <p className="lede">Last updated November 2026.</p>
      </div></section>
      <section><div className="wrap legal-copy" style={{ maxWidth: 760 }}>
        <p><Tag kind="DRAFT">written to match how this site works; counsel may replace it</Tag></p>
        <p>This policy explains what information Greyson Capital Group, LLC (&ldquo;Greyson,&rdquo; &ldquo;we&rdquo;) collects through greysoncapitalgroup.com and how we use it.</p>

        <h3>What we collect</h3>
        <p><strong>Information you send us.</strong> When you use the investor inquiry or contact form, we receive what you enter, such as your name, email address, phone number, company, your message, and whether you confirm that you are an accredited investor.</p>
        <p><strong>Site usage.</strong> We use Google Analytics to understand how visitors use the site, such as which pages are viewed and how visitors arrived. Google Analytics uses cookies and collects information such as your browser type, device, approximate location and pages visited. Our hosting provider also keeps standard server logs, which include IP addresses.</p>

        <h3>How we use it</h3>
        <p>We use the information you send to respond to you, to determine whether an investment opportunity may be appropriate for you, and to keep a record of our communications. We use site usage information to maintain and improve the site.</p>

        <h3>How it is shared</h3>
        <p>We do not sell your personal information. We share it only with service providers that help us run the site and our business, such as our website host (which processes form submissions) and Google Analytics, or when required by law.</p>

        <h3>Investor portal</h3>
        <p>The Investor Login link takes you to an investor portal operated by Juniper Square. Information you provide there is governed by that portal&rsquo;s own terms and privacy policy.</p>

        <h3>Your choices</h3>
        <p>You can block or delete cookies in your browser settings, or opt out of Google Analytics with Google&rsquo;s browser add-on. To ask us to update or delete information you sent through this site, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

        <h3>Security</h3>
        <p>We use reasonable measures to protect the information we receive, including encrypted (HTTPS) connections. No method of transmission or storage is completely secure.</p>

        <h3>Changes and contact</h3>
        <p>We may update this policy and will post the new version on this page with its date. Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or Greyson Capital Group, 101 Washington Ave, PMB #144, Grand Haven, MI 49417.</p>
      </div></section>
    </>
  );
}
