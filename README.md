# Dansavanh Web

Modern Nuxt 4 rebuild of the **Dansavanh Resort & Casino** website — full migration from the legacy project with an upgraded luxury design.

## Stack

- **Nuxt 4.4** · Vue 3.5 · TypeScript
- **@nuxtjs/i18n v10** — EN / TH / CN (API-backed translations)
- **Pinia** · **Swiper** · **nuxt-aos** · **vue3-google-map**

## Getting started

```bash
cd dansavanh-web
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

> Node 22.12+, 24.11+, or 26+ recommended. `.yarnrc` ignores engine checks for Node 25.x.

### macOS dev server fix

Nuxt 4.4.7 can fail on macOS with `connect EINVAL` (socket path too long). The dev script sets `TMPDIR=/tmp` to work around this. If you still see errors, stop any running dev server and restart:

```bash
yarn dev
```

## Environment

| Variable | Default |
|---|---|
| `NUXT_PUBLIC_API_BASE` | `http://dsv.dlance.la/client-api` |

## All pages (migrated)

| Route | Description |
|---|---|
| `/` | Home — hero, video, feature cards, hotels, news |
| `/casino` | Casino games showcase |
| `/hotels` | Hotel listings |
| `/hotels/[id]` | Dynamic hotel detail (rooms, facilities, gallery) |
| `/hotels/golf` · `/numngum` · `/vientaine-hotel` | Legacy hotel aliases |
| `/experience` | Activities listing |
| `/experience/[id]` | Activity detail |
| `/events` | Coming & past events |
| `/events/[id]` | Event detail |
| `/offer` | Packages |
| `/offer/[id]` | Offer detail |
| `/news` | News listing |
| `/news/[id]` | News article |
| `/gallery` | Masonry photo gallery with lightbox |
| `/contact` | Map, shuttle info, contact form, newsletter |
| `/near-by` | Nearby attractions |
| `/tour-package` | Tour packages |
| `/tour-package/[id]` | Package detail |
| `/more/career` | Job listings |
| `/more/career/[id]` | Job detail |
| `/investment-project` | Investment overview |

Locale prefixes: `/th/...`, `/cn/...`

## Project structure

```
dansavanh-web/
├── app/
│   ├── components/    # layout, home, hotel, contact, ui
│   ├── composables/   # useBlogs, useHotel
│   ├── data/          # static content (nearby)
│   ├── pages/         # all routes
│   ├── stores/        # Pinia
│   └── assets/        # images, SCSS
├── i18n/locales/      # API-backed i18n loaders
└── public/images/     # static assets
```

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Dev server |
| `yarn build` | Production build |
| `yarn preview` | Preview build |
