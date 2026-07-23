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
const RELEASE_VERSION = '1.0.0-alpha' as const;
const RELEASE_CODENAME = 'Nautilus' as const;
const RELEASE_STAGE = 'Alpha' as const;
const RELEASE_SERIES_MAJOR = 1 as const;
const RELEASE_LABEL = `${RELEASE_CODENAME} · ${RELEASE_STAGE}` as const;
const RELEASE_DATE = '2026-07-22' as const;
const ISO_FILE_NAME = `amonite-${RELEASE_VERSION}-amd64.iso` as const;
const ISO_DOWNLOAD =
  `https://github.com/ManuelGil/amonite/releases/download/${RELEASE_TAG}/${ISO_FILE_NAME}` as const;
const PLATFORM = 'Debian Stable' as const;
const DESKTOP = 'XFCE' as const;
const TERMINAL = 'Kitty' as const;
const INSTALLER = 'Calamares' as const;

export const DISTRIBUTION = {
  name: 'Amonite',
  series: RELEASE_CODENAME,
  stage: RELEASE_STAGE,
  release: RELEASE_VERSION,
  releaseDate: RELEASE_DATE,
  releaseLabel: RELEASE_LABEL,
  releaseSummary:
    `${RELEASE_CODENAME} is Version ${RELEASE_SERIES_MAJOR} of Amonite. The current release is ${RELEASE_VERSION}.`,
  isoFileName: ISO_FILE_NAME,
  isoUrl: ISO_DOWNLOAD,
  releaseArtifact: {
    sizeBytes: 1275068416,
    sha256: '9082c909314e37a4de261829fedcdedf970f777eefb47a78c749c22eca340acf',
  },
  /** Supporting implementation. Use after capabilities, not instead of them. */
  platform: PLATFORM,
  desktop: DESKTOP,
  terminal: TERMINAL,
  installer: INSTALLER,
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
      via: `Default desktop: ${DESKTOP}. Audio and multimedia through PipeWire. Web browsing through Firefox ESR, the browser maintained by the Debian project.`,
    },
    {
      title: 'Software Development',
      body: 'Write, build, and debug software from the first session with a modern command-line environment prepared for search, automation, and structured data.',
      via: `Terminal default: ${TERMINAL}. Development tools available without assembling a toolchain by hand.`,
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
      via: `AppArmor enabled. Encrypted installs supported through the graphical installer (${INSTALLER}).`,
    },
    {
      title: 'Storage',
      body: 'Install and manage disks with a clear graphical installer, including encrypted layouts when required.',
      via: `${INSTALLER} handles installation and disk setup.`,
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
      `${INSTALLER} installation`,
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
      label: RELEASE_LABEL,
      version: RELEASE_VERSION,
      href: RELEASE_PAGE,
    },
  ] as const,
  artifacts: {
    verifyGuide: {
      href: 'https://github.com/ManuelGil/amonite/blob/main/VERIFY.md',
    },
    releaseNotes: {
      href: RELEASE_PAGE,
    },
    installGuide: {
      href: 'https://github.com/ManuelGil/amonite/blob/main/INSTALL.md',
    },
  },
} as const;
