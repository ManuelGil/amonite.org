# Editorial guide

**Audience:** maintainers editing public copy.
**Does not own:** product facts (use `src/data/distribution.ts`) or visual tokens (`docs/VISUAL.md`).

## Voice

Calm. Precise. Direct. Write as engineers describing the system they built.

Prefer short sentences and concrete statements.

Avoid marketing language, AI-like phrasing, and exaggerated claims.

## Form

- One idea per paragraph.
- Capabilities before implementation.
- Prefer periods, commas, colons, and parentheses over em dashes.
- Check spacing around inline links and punctuation.
- Credit Manuel Gil. No invented maintainers or channels.

## Facts

Verify releases against `src/data/distribution.ts`.

Describe what users receive today. No roadmaps, milestones, or "coming soon."

When `isoPublished` is false, do not invent downloads.

## Test

Would this sentence fit any Linux distribution? If yes, rewrite until it is specifically Amonite.

See [INVARIANTS.md](INVARIANTS.md).
