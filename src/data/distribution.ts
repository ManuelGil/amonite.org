/**
 * Public facts about the Amonite GNU/Linux distribution.
 * Capabilities describe what becomes possible after install.
 * Implementation details support those capabilities; they do not define the product.
 *
 * Artifact URLs: point at published release assets when known.
 */
const RELEASES =
  'https://github.com/ManuelGil/amonite/releases' as const;
const RELEASE_TAG = 'v1.0.0-alpha' as const;
const RELEASE_PAGE =
  `https://github.com/ManuelGil/amonite/releases/tag/${RELEASE_TAG}` as const;

export const DISTRIBUTION = {
  name: 'Amonite',
  series: 'Nautilus',
  seriesMajor: 1,
  stage: 'Alpha',
  release: '1.0.0-alpha',
  releaseDate: 'July 22, 2026',
  releaseTag: RELEASE_TAG,
  releaseLabel: 'Nautilus · Alpha',
  releaseSummary:
    'Nautilus is Version 1 of Amonite. The current release is 1.0.0-alpha.',
  isoPublished: true,
  /** Supporting implementation. Use after capabilities, not instead of them. */
  platform: 'Debian Stable',
  desktop: 'XFCE',
  terminal: 'Kitty',
  installer: 'Calamares',
  sourceUrl: 'https://github.com/ManuelGil/amonite',
  communityUrl: 'https://www.reddit.com/r/amonite/',
  downloadUrl: RELEASES,
  /** GitHub Sponsors for the maintainer. Only sponsorship channel. */
  sponsorsUrl: 'https://github.com/sponsors/ManuelGil',
  tagline:
    'A GNU/Linux operating system engineered for what you do after install: desktop work, development, administration, and local AI.',
  selectionPrinciple:
    'Every package is present because it delivers a meaningful capability, never because another package happened to recommend it.',
  capabilities: [
    {
      title: 'Desktop Computing',
      body: 'Everyday computing from the first login: a graphical environment with networking, multimedia, storage management, and web browsing ready without assembly.',
      via: 'Default desktop: XFCE. Audio and multimedia through PipeWire. Web browsing through Firefox ESR, the browser maintained by the Debian project.',
    },
    {
      title: 'Software Development',
      body: 'Write, build, and debug software from the first session with a modern command-line environment prepared for search, automation, and structured data.',
      via: 'Terminal default: Kitty. Development tools available without assembling a toolchain by hand.',
    },
    {
      title: 'System Administration',
      body: 'Inspect, configure, and maintain the machine with administration tools ready from first boot.',
      via: 'Practical CLI utilities selected for operators, not an exhaustive package dump.',
    },
    {
      title: 'Local Artificial Intelligence',
      body: 'Run compatible GGUF models on your machine, entirely offline. Keep models and prompts under your control. Expose an OpenAI-compatible API for local applications and workflows that do not depend on external services.',
      via: 'Implemented with llama.cpp as an integrated platform capability, not a bolt-on package.',
    },
    {
      title: 'Networking',
      body: 'Connect and work on the network without improvising drivers, stacks, or basic configuration after install.',
      via: 'Networking ready as part of the default system composition.',
    },
    {
      title: 'Security',
      body: 'Application isolation and security policies enabled by default. Optional encrypted installation when you need it.',
      via: 'AppArmor enabled. Encrypted installs supported through the graphical installer (Calamares).',
    },
    {
      title: 'Storage',
      body: 'Install and manage disks with a clear graphical installer, including encrypted layouts when required.',
      via: 'Calamares handles installation and disk setup.',
    },
    {
      title: 'Documentation',
      body: 'Integrated project documentation so the system can be understood without hunting for missing context.',
      via: 'Public documentation published with releases on GitHub.',
    },
  ] as const,
  cliSummary:
    'A modern command-line environment for searching, automation, and structured data, ready for development and administration from first boot.',
  validatedConfiguration: {
    architecture: '64-bit Intel or AMD (amd64)',
    cpu: '1 core',
    memory: '1 GiB RAM',
    storage: '12 GiB',
    firmware: 'BIOS and UEFI',
    virtualization: 'QEMU/KVM',
    installedSize: 'Approximately 2.6 GiB',
    results: [
      'Live ISO boot',
      'Graphical desktop',
      'Welcome application',
      'Calamares installation',
      'First boot after installation',
      'System login',
      'Terminal',
      'apt update',
      'apt upgrade',
      'Zero failed systemd services',
    ] as const,
  },
  releaseHistory: [
    {
      label: 'Nautilus · Alpha',
      version: '1.0.0-alpha',
      href: RELEASE_PAGE,
    },
  ] as const,
  artifacts: {
    iso: {
      label: 'ISO image',
      href: RELEASE_PAGE,
      note: 'Bootable image for the current Nautilus Alpha.',
    },
    checksum: {
      label: 'SHA256 checksum',
      href: RELEASE_PAGE,
      note: 'Verify the ISO before writing media.',
    },
    signature: {
      label: 'GPG signature',
      href: RELEASE_PAGE,
      note: 'Confirm the release was signed by the project.',
    },
    releaseNotes: {
      label: 'Release Notes',
      href: RELEASE_PAGE,
      note: 'Changes in this Alpha and known caveats.',
    },
    installGuide: {
      label: 'Installation Guide',
      href: 'https://github.com/ManuelGil/amonite#readme',
      note: 'Install steps for the current Nautilus release.',
    },
  },
} as const;

export type Distribution = typeof DISTRIBUTION;
