# UXO.ECO brand-asset replacement checklist

No new logo, favicon, or social image has been invented for this migration. The current files remain in place only so the site continues to render while updated, approved artwork is prepared.

Replace the following files in place after the UXO.ECO artwork is approved:

- `public/images/uxo-symbol-clean-transparent.png` — the clean, transparent project symbol used on `/symbol`.
- `public/images/uxo-symbol-mywa-works.jpg` — the square project-symbol image used in the hero, footer, and as the temporary social-preview fallback.
- `public/uxo-favicon.png` and `public/favicon.ico` — raster favicon assets.
- `public/favicon.svg` — vector favicon; its current letterform is not a neutral domain-independent mark and should be replaced with approved UXO.ECO artwork.
- `public/og/uxoinfo-og.jpg` — retire after the new social image is available.

Create and add this new file before public launch:

- `public/og/uxo-eco-og.jpg` — 1200 × 630 px Open Graph/Twitter image, with the approved UXO.ECO identity and meaningful visual contrast. Then change the `ogImage` default in `src/components/SEO.astro` from `/images/uxo-symbol-mywa-works.jpg` to `/og/uxo-eco-og.jpg`.

Keep MYWA WORKS credit and confirm any new or adapted use of the commissioned symbol with the original artwork agreement.
