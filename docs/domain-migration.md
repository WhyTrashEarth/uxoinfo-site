# UXO.INFO → UXO.ECO deployment migration

This repository is configured to build canonical URLs, sitemap entries, social metadata, and structured data for `https://uxo.eco`. It does not contain a Cloudflare API token, account identifier, or Pages project configuration, so a hostname-specific permanent redirect must be created in the Cloudflare dashboard.

## Cloudflare Pages cutover

1. In the existing Cloudflare Pages project (`uxoinfo-site`), add `uxo.eco` as a custom domain and make sure its DNS record is proxied through Cloudflare.
2. Keep `uxo.info` attached to the project until the redirect is working.
3. In the `uxo.info` zone, create a **Redirect Rule** with:
   - **When incoming requests match:** `http.host eq "uxo.info" or http.host eq "www.uxo.info"`
   - **Then:** Dynamic redirect, status **301**, destination expression: `concat("https://uxo.eco", http.request.uri.path)`
   - **Preserve query string:** enabled.
4. Ensure `uxo.info` and `www.uxo.info` are proxied and have active Cloudflare SSL certificates before turning the rule on. Do not remove the old domain from DNS until HTTPS redirects work.

The expression keeps every existing path intact: for example, `https://uxo.info/resources?topic=water` redirects to `https://uxo.eco/resources?topic=water`.

## Verification after deployment

Check each response is a single 301 hop to the matching `https://uxo.eco` path, then confirm that the destination returns `200` and its canonical URL is on `uxo.eco`:

- `/`
- `/what-is-uxo`
- `/resources`
- `/mission`
- `/sitemap-index.xml`

Also confirm that the new Pages custom domain serves the deployed site, the sitemap contains only `https://uxo.eco/` URLs, and the contact mailbox `hello@uxo.eco` is live before publishing it.
