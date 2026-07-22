# Visual system

**Audience:** maintainers and designers.
**Owns:** visual identity and token intent for this website.
**Does not own:** public product narrative.
**Implementation:** `src/styles/global.css`. Asset list: [ASSETS.md](ASSETS.md).

## Personality

Calm, precise, understated, timeless. Never startup-like, flashy, or trend-driven.

## Mark

Stylised ammonite. Official assets only (`src/assets/logo.png`, `public/` favicons). Clear space: at least half the mark height on each side. No glows, shadows, or redraws.

## Colour

Neutrals carry the UI. Amber is a sparse accent.

| Token           | Value     | Role                        |
| --------------- | --------- | --------------------------- |
| amber / primary | `#C08A2B` | Accent, links               |
| stone           | `#8B8B4A` | Rare earth accent           |
| sand            | `#DBC3A5` | Soft panels                 |
| mist            | `#ECEBE1` | Default background          |
| slate           | `#4A4F57` | Muted text, borders         |
| graphite        | `#34373D` | Primary text; dark surfaces |
| deep-green      | `#3D5A40` | Occasional natural accent   |

No saturated blues, purples, neon, or glow chrome.

## Typography

| Role               | Family                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| UI and body        | Inter                                                                                               |
| Rare display lines | Classical serif (`.display-serif`)                                                                  |
| System voice       | Monospace (`--font-mono`, `.label-mono`): section markers, spec values, filenames, terminal content |

## Spacing and radius

Base unit 4px. Prefer generous editorial gaps between sections. Radii stay small (`0.125rem`–`0.5rem`). Flat surfaces; borders over shadows.

## Imagery

The operating system is the imagery. Screenshots are unedited captures of the
released system (`docs/ASSETS.md`); present them flat, bordered, and captioned
like documentation figures. No mockups, no device frames, no composites.

Curated photography under `src/assets/img/` may introduce a chapter, create a
pause, or reinforce atmosphere. Screenshots remain the primary representation
of the operating system. Do not use photography as decoration or as a
replacement for product evidence.

## Avoid

Cyberpunk / RGB spectacle · SaaS landing theatre · fear-based security clichés · decorative animation · second parallel token systems.

## Accessibility

Readable graphite on mist. Visible focus rings. Honour `prefers-reduced-motion`.
