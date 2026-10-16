# greysoncapitalgroup.com

Greyson Capital Group website. Next.js 14 (App Router), static pages, self-hosted fonts. Built from the Grok design package (Oct 14, 2026) and content captured from the 2022 site.

## Run it
    npm install
    npm run dev        # http://localhost:3000
    npm run build

## Where things live
- `data/site.ts`: Juniper Square link, contact email, nav, and the review-notes switch.
- `app/*/page.tsx`: one file per page.
- `components/`: header (with mobile menu), footer, forms.
- `public/img/`: logos and property photos.
- `next.config.mjs`: 301 redirects from the old site's URLs.

## Before launch
- Set `NEXT_PUBLIC_SHOW_REVIEW_NOTES=false` in Netlify (Site configuration → Environment variables). That hides the yellow review tags and preview banner, and lets search engines index the site.
- Forms post to Netlify Forms. In Netlify: Forms → enable form detection, then Forms → Notifications → add email notifications to the right inbox.
- Resolve every yellow tag: facts, bios, disclaimer, phone, address, photo rights.
