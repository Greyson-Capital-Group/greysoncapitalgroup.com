// Single source of truth for site-wide settings.
export const JUNIPER_URL = 'https://greysoncapitalgroup.junipersquare.com/login?path=/offering/33153';
// Google Analytics property carried over from the 2022 site.
export const GA_ID = 'G-XTNYVS6GSY';
export const CONTACT_EMAIL = 'info@greysoncapitalgroup.com';
// "Schedule a Call" goes to the contact form until Justin supplies a calendar link (Calendly, Microsoft Bookings, etc.).
export const SCHEDULE_URL = '/contact#schedule';
export const SCHEDULE_IS_CALENDAR = false;
// Shows the "preview" banner and the yellow review notes. Turn off for launch.
export const SHOW_REVIEW_NOTES = process.env.NEXT_PUBLIC_SHOW_REVIEW_NOTES !== 'false';

export const NAV = [
  { href: '/current-holdings', label: 'Current Holdings' },
  { href: '/track-record', label: 'Track Record' },
  { href: '/strategy', label: 'Strategy' },
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
];
