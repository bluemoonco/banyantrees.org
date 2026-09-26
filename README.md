# banyantrees.org

Website for The Banyan Tree Company — urban banyan tree farm in St. Petersburg, FL. Migrated from Blogger to a static site on GitHub + Cloudflare Pages, keeping the original content and look (banyan-canopy masthead, white title, the "Urban Farm - St. Petersburg, FL" post and photo). The four spam comments on the Blogger post were not carried over.

No build step, no framework, no dependencies. Cloudflare Pages serves `public/` as-is.

## Deploy (Cloudflare Pages)

Pages → Create → Connect to Git → `bluemoonco/banyantrees.org`

| Setting | Value |
|---|---|
| Project name | `banyantrees-org` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `public` |
| Root directory | `/` |

Every push to `main` deploys. Then:

1. **Custom domains:** add `www.banyantrees.org` and `banyantrees.org`. Canonical is **www** (same as it was on Blogger).
2. **Redirect Rule** (Rules → Redirect Rules): `banyantrees.org/*` → `https://www.banyantrees.org/${1}`, 301, keep query string.
3. **Let the bots in:** AI Crawl Control → **off** "Block AI bots" and **off** Cloudflare's managed robots.txt. Leave Bot Fight Mode off.
4. Remove the old Blogger DNS records (Google A/AAAA on the apex, `www` → `ghs.googlehosted.com`) so Pages can take over. The `haexonaxz3gq` CNAME is Google's Blogger domain-verification record; it can go once Blogger is retired.

## After launch

- Google Search Console + Bing Webmaster Tools: verify the domain (DNS TXT), submit `https://www.banyantrees.org/sitemap.xml`.
- IndexNow: key file `public/c335afc2284c9315c566e22f70a926c5.txt` is in place. Ping:
  `https://api.indexnow.org/indexnow?url=https://www.banyantrees.org/&key=c335afc2284c9315c566e22f70a926c5`
- In Blogger (Settings → Publishing), remove the custom domain so the old blog doesn't compete; optionally delete or set the blog to private.

## Files

| Path | Purpose |
|---|---|
| `public/index.html` | the whole site (one page) |
| `public/404.html` | not-found page |
| `public/assets/site.css` | styles (bump `?v=` in the HTML when changed) |
| `public/assets/banyan-header.jpg` | original Blogger masthead image |
| `public/assets/banyan-tree-urban-farm-*.webp` | post photo (800/1200 w) |
| `public/assets/banyan-tree-company-og.jpg` | 1200×630 social share card |
| `public/assets/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png` | icons |
| `public/_headers`, `public/_redirects` | Cloudflare Pages headers + old Blogger URL redirects |
| `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` | crawlers / AI assistants |

Preview locally: `python3 -m http.server 8765 --directory public`
