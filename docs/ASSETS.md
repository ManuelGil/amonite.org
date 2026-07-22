# Asset catalog

**Audience:** maintainers.
**Owns:** why assets exist and how they may be used.
**Licensing:** [`ATTRIBUTION.md`](../ATTRIBUTION.md).
**Visual rules:** [VISUAL.md](VISUAL.md).

Do not remove assets because they are currently unreferenced. Filenames are themes, not routes.

## Marks

| Asset                                                 | Role           |
| ----------------------------------------------------- | -------------- |
| `src/assets/logo.png`                                 | Canonical logo |
| `public/logo.png`, `public/logo.pbm`                  | Public copies  |
| `public/favicon.*`, sized PNGs, Apple / Android icons | Favicon family |

## Screenshots (`src/assets/screenshots/`)

Primary imagery. Every file is an unedited capture of the released system
(window images are cropped to the window; nothing is retouched). Captured from
the live ISO on the validated QEMU/KVM configuration. Recapture when a release
visibly changes the UI; never mock or composite.

| File                       | Shows                                           |
| -------------------------- | ----------------------------------------------- |
| `first-boot.png`           | Live session at first boot: Welcome + installer |
| `terminal-fastfetch.png`   | Maximized terminal, fastfetch system report     |
| `welcome-handbook.png`     | Welcome app, Welcome page                       |
| `welcome-your-system.png`  | Welcome app, Your System page                   |
| `installer-partitions.png` | Calamares partitioning step                     |
| `file-manager.png`         | Thunar                                          |
| `settings-manager.png`     | XFCE Settings Manager                           |
| `applications-menu.png`    | Applications menu over the bare desktop         |

## Photography (`src/assets/img/`)

Curated supporting imagery. Use selected images to introduce a chapter, create
a pause, or reinforce atmosphere. Screenshots remain the primary representation
of the operating system; photography must not become decoration or replace
product evidence.

| File                | Theme                |
| ------------------- | -------------------- |
| `hero.jpg`          | Geology / permanence |
| `philosophy.jpg`    | Geology              |
| `texture.jpg`       | Geology / material   |
| `engineering.jpg`   | Engineering          |
| `transparency.jpg`  | Clarity / structure  |
| `observability.jpg` | Systems in view      |
| `security.jpg`      | Trust (never fear)   |
| `workspace.jpg`     | Productive work      |

Interchangeable within theme. Not disposable.

## Fonts

Inter source and webfonts under `src/assets/fonts/` and `public/fonts/`. Keep synchronized. License: `ATTRIBUTION.md`.

## Rules

1. Prefer official marks for identity.
2. Document new assets here; record third-party licenses in `ATTRIBUTION.md`.
3. Retire assets only with an explicit maintainer change to this file and attribution.
