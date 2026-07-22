# Website guide

**Audience:** maintainers.  
**Owns:** IA map, content workflow, deploy.  
**Does not own:** public product copy (edit pages and `distribution.ts` instead).

## Surfaces

| Path | Maintainer role |
| --- | --- |
| `/` | Introduction; points into the rest of the site |
| `/philosophy` | Selection principles |
| `/engineering` | Capabilities and how they are realized |
| `/community` | Reddit + GitHub |
| `/downloads` | Artifacts and verification |
| `/privacy`, `/terms` | Legal |

Nav: Philosophy · Engineering · Community · Downloads (plus Download CTA).

## Content workflow

1. Product facts → `src/data/distribution.ts`
2. Page copy → `src/pages/*.astro`
3. Shared UI → `src/components/site/`
4. Tokens → `src/styles/global.css` (intent: `docs/VISUAL.md`)

Present capabilities (outcomes), not package inventories. Keep series and stage separate.

## Develop and deploy

```bash
pnpm install && pnpm dev
pnpm build
pnpm preview   # Astro static preview
```

Astro 7 · Tailwind 4 · GitHub Pages.
Website deploys ≠ distribution releases.

See [INVARIANTS.md](INVARIANTS.md).
