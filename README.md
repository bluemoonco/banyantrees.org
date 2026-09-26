# The Banyan Tree Company

Static commercial site for `www.banyantrees.org`, deployed from `public/` through Cloudflare Pages. No JavaScript framework or package install is needed.

## Local preview

```bash
python3 build.py
python3 -m http.server 8765 --directory public
```

Visit `http://localhost:8765/` and the interior routes. Cloudflare Pages project settings: framework **None**, no build command, output directory **public**, root directory `/`. Pushes to `main` deploy through the existing Git integration.

## Inventory

`data/inventory.json` is intentionally empty. The public collection says the available-tree list is being prepared. Add only actual trees with verified ID, common and scientific names, size, status and a photograph of that tree. Run `python3 build.py` and commit the generated HTML. Do not reuse the atmospheric banyan photograph for a sale listing.

Example record:

```json
{"id":"BT-001","common_name":"Indian Banyan","scientific_name":"Ficus benghalensis","size":"15-gallon container","status":"Inquire","image":"/assets/actual-tree-BT-001.webp"}
```

The example is a schema illustration, not available inventory. Review species suitability and local requirements before publishing it. The build fails for incomplete records.

## Inquiries

The existing phone number, `727-644-9200`, is the live contact route. `/consultation/` prepares a project summary in the visitor's browser and offers a call link. It does **not** transmit or store inquiries. No cart or checkout exists. If an online form is added later, connect a tested backend with delivery monitoring, confirmation emails, spam protection and a revised privacy notice before changing the form language.

## Deployment and migration

- `public/_redirects` maps the old Blogger post to the commercial homepage.
- `public/sitemap.xml` contains the new canonical pages.
- `public/_headers` sets security and cache behavior.
- `public/robots.txt` permits crawling.
- Canonical host is `www`; the Cloudflare apex-to-www redirect must remain configured.

After launch, test the live domain, legacy redirect, responsive layout, phone links, sitemap, favicon and Google Search Console indexing. The original banyan photo remains as brand atmosphere, never as inventory proof.
