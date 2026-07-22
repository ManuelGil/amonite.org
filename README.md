# Amonite website

Public site for the Amonite GNU/Linux distribution: [amonite.org](https://amonite.org).

This repository is the **website**. The distribution lives at [github.com/ManuelGil/amonite](https://github.com/ManuelGil/amonite).

The website is the public source of truth for product identity, philosophy, capabilities, downloads, and community. Repository docs are for maintainers and contributors only.

Maintainer: Manuel Gil.

## Develop

Node.js `>=22.12.0`, pnpm `>=11.0.0`.

```bash
pnpm install && pnpm dev
pnpm build
pnpm preview
```

Astro 7 · Tailwind 4 · GitHub Pages.
Release and capability facts: `src/data/distribution.ts`.
Tokens: `src/styles/global.css`.

## Maintainer docs

| File                                                                                     | Purpose                  |
| ---------------------------------------------------------------------------------------- | ------------------------ |
| [`AGENTS.md`](AGENTS.md)                                                                 | How to work in this repo |
| [`docs/INVARIANTS.md`](docs/INVARIANTS.md)                                               | Contracts                |
| [`docs/WEBSITE_GUIDE.md`](docs/WEBSITE_GUIDE.md)                                         | IA and deploy            |
| [`docs/EDITORIAL.md`](docs/EDITORIAL.md)                                                 | Public copy rules        |
| [`docs/VISUAL.md`](docs/VISUAL.md)                                                       | Visual system            |
| [`docs/ASSETS.md`](docs/ASSETS.md)                                                       | Asset catalog            |
| [`ATTRIBUTION.md`](ATTRIBUTION.md) / [`SECURITY.md`](SECURITY.md) / [`LICENSE`](LICENSE) | Legal                    |

## License

MIT (`LICENSE`). Third-party assets: `ATTRIBUTION.md`.
