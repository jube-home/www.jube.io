# jube.io site plan

What gets built, where each page comes from, and how navigation is wired.

## Pages

| URL | Source | Layout | In menu | In sitemap.xml |
| --- | --- | --- | --- | --- |
| `/` | `index.html` | home | Welcome | yes |
| `/training/` | `training.html` | page | Training & Integration | yes |
| `/support/` | `support.html` | page | Support | yes |
| `/contact/` | `contact.html` | page | Contact | yes |
| `/privacy/` | `privacy.html` | minimal | footer only | yes |
| `/404.html` | `404.html` | minimal | no | no |
| `/docs/` | `docs/index.md` | doc | top of docs menu | yes |
| `/docs/<Section>/` | `docs/<Section>/index.md` | doc | docs menu, level 1 | yes |
| `/docs/<Section>/<Page>/` | `docs/<Section>/<Page>/index.md` | doc | level 2 | yes |
| `/docs/<Section>/<Page>/<Sub>/` | `…/<Sub>/index.md` | doc | level 3 (max) | yes |

## Generated

| URL | By |
| --- | --- |
| `/sitemap.xml` | jekyll-sitemap, `<loc>` from `url:` in `_config.yml` |
| `/robots.txt` | `robots.txt` (Liquid), allows all, blocks `/pagefind/` |
| `/pagefind/*` | Pagefind, indexes everything inside `data-pagefind-body` (all page content) |
| `/assets/css/site.css` | Tailwind from `assets/css/app.css` |
| `/assets/js/app.js`, `/assets/img/*` | copied as-is |
| `CNAME`, `.nojekyll` | copied as-is |

## Navigation

- **Left sidebar, site pages**: `_data/pages.yml`. Order is the list order. Add an entry to add a page.
- **Left sidebar, docs menu**: `_includes/docs-nav.html`, built from each docs page's front matter (`title`, `parent`, `grand_parent`, `nav_order`, `nav_exclude`). Nothing to maintain by hand.
- **Breadcrumbs and "In this section"**: `_layouts/doc.html`, from `parent` / `has_children`.
- **Header**: `_includes/header.html`: logo, search button, GitHub.
- **Footer**: `_includes/footer.html`: Privacy, terms, company line.
- **Right column (lg+)**: `_includes/work-cards.html`: Training and Support cards, hidden on docs pages' narrow widths.
- **Floating**: none (the WhatsApp corner bubble was removed).

## Shared data (`_data/`)

| File | Used on |
| --- | --- |
| `pages.yml` | sidebar menu |
| `platform.yml`, `cornerstones.yml`, `built.yml` | home |
| `models.yml`, `glossary.yml` | home (what the agents do, terms) |
| `stables.yml` | home (Ask Jooby agent tabs) |
| `tiers.yml`, `weeks.yml` | support, training |

## External destinations

All in `_config.yml` under CENTRAL LINKS and referenced as `{{ site.key }}`: GitHub repo and CI badges, Loom, terms and JTOS, AGPL guidance, WhatsApp, email, Google Calendar booking, Buttondown, v2 PDF.

## Open items (also in TODO.md)

- `buttondown_user`, `jtos_url` (1.9), `webmaster_verifications`, share image `assets/img/og-image.png`.
- `docs_concepts_exhaustive` / `docs_deploy_cluster`: confirm the folder names exist after the first docs sync.
- Ask Jooby agent names in `_data/stables.yml`.
