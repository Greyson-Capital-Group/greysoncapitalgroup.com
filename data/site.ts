// Single source of truth for site-wide settings.
export const JUNIPER_URL = 'https://greysoncapitalgroup.junipersquare.com/login?path=/offering/33153';
// Google Analytics property carried over from the 2022 site.
export const GA_ID = 'G-XTNYVS6GSY';
export const CONTACT_EMAIL = 'info@greysoncapitalgroup.com';
// "Schedule a Call" buttons are off (Justin, 10/28): investors complete the inquiry first, then get a calendar link.
// When a booking calendar exists, set SCHEDULE_URL to it and SCHEDULE_ENABLED to true.
// Never publish Justin's cell number or direct email on the site.
export const SCHEDULE_ENABLED = false;
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
