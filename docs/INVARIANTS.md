# Repository invariants

**Audience:** maintainers and contributors.
**Does not own:** public product narrative (that lives on the website).

The website at [amonite.org](https://amonite.org) is the public source of truth for product identity, philosophy, capabilities, downloads, release presentation, and community.

Repository docs exist only to help people build, maintain, or contribute to this website.

## Sources of truth

| Concept              | Location                                                    |
| -------------------- | ----------------------------------------------------------- |
| Public product       | Website (`src/pages`, `src/data/distribution.ts`)           |
| This repo            | `README.md`                                                 |
| Contracts            | `docs/INVARIANTS.md`                                        |
| Structure & deploy   | `docs/WEBSITE_GUIDE.md`                                     |
| Writing for the site | `docs/EDITORIAL.md`                                         |
| Visual system        | `docs/VISUAL.md`, `docs/ASSETS.md`, `src/styles/global.css` |
| Contribution         | `AGENTS.md`                                                 |
| Legal / security     | `ATTRIBUTION.md`, `SECURITY.md`, `LICENSE`                  |
| Distribution project | https://github.com/ManuelGil/amonite                        |

## Invariants

1. This repository is the **website only**. The distribution is external.
2. Do not duplicate product narrative in maintainer docs when the website already states it.
3. Distribution facts are content in `src/data/distribution.ts` as Product → Series → Edition → Release → Publication → Artifacts. Series owns major version and codename for every edition. `EDITIONS` is the source of truth; public views are derived from that collection (`isPublic: true`). The UI must not assume how many editions exist. Edition states are available, experimental, or planned. Internal editions may exist without public presentation. Product pages present public editions; Downloads renders each edition from its data (release media when present).
4. Website package version ≠ distribution release.
5. Public copy is current and verifiable only. No roadmaps, dates, or speculative promises.
6. Series and stage stay distinct (e.g. Nautilus · Alpha).
7. One idea, one place on the site. Prefer links over repetition.
8. One CSS / token pipeline via the shared layout.
9. Curated assets stay intentional even when unused. Do not delete without explicit instruction.
10. Reddit is the public discussion channel. GitHub carries releases and project documentation. No support email on the website.

## Do not reintroduce

Marketing theatre · newsletters · invented communities · product essays in `docs/` · second token systems · coupling website versioning to distro releases.

## Test

> Does this belong on the website, or only help a maintainer?

If it belongs on the website, put it there and delete the duplicate.
