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

Neutrals carry the UI. Amber is a sparse accent. Components use semantic
tokens so the same hierarchy remains legible in light and dark appearances.

| Token             | Light value | Dark value | Role                         |
| ----------------- | ----------- | ---------- | ---------------------------- |
| surface           | `#ECEBE1`   | `#1B1E1F`  | Page background              |
| surface-soft      | `#E8E3D7`   | `#25292A`  | Quiet panels and footer      |
| surface-inverse   | `#34373D`   | `#2B2F30`  | Hero and emphasis surfaces   |
| text              | `#34373D`   | `#ECE9DF`  | Primary text                 |
| text-muted        | `#4A4F57`   | `#B8BCB8`  | Supporting text              |
| accent            | `#805C17`   | `#E6B85A`  | Accent text and markers      |
| accent-surface    | `#805C17`   | `#805C17`  | Primary accent controls      |

No saturated blues, purples, neon, or glow chrome.

The appearance selector offers System, Light, and Dark. System follows the
operating system preference and is the default.

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

Semantic contrast pairs are selected for readability in both appearances.
Focus rings remain visible on light and dark surfaces. Honour
`prefers-reduced-motion`.
