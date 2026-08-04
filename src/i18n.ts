import { getRelativeLocaleUrl } from 'astro:i18n';

export const LOCALES = ['en', 'es', 'pt', 'it', 'fr', 'de', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  it: 'Italiano',
  fr: 'Français',
  de: 'Deutsch',
  nl: 'Nederlands',
};

export const LOCALE_CODES: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-ES',
  pt: 'pt-PT',
  it: 'it-IT',
  fr: 'fr-FR',
  de: 'de-DE',
  nl: 'nl-NL',
};

export type PageName =
  | 'index'
  | 'philosophy'
  | 'engineering'
  | 'gallery'
  | 'community'
  | 'downloads'
  | 'privacy'
  | 'terms';

export type ReleaseKey =
  | 'standard:1.0.0-alpha.2'
  | 'standard:1.0.0-alpha'
  | 'lite:1.0.0-alpha';

type CapabilityCopy = {
  title: string;
  body: string;
  via: string;
};

type ReleaseCopy = {
  title: string;
  label: string;
  summary: string;
  evaluationNotice: string;
  highlights: readonly string[];
  direction: string | null;
  whatsNew: {
    intro: string;
    improvements: readonly string[];
    closing: string;
  };
};

type EditionCopy = {
  statusDetail: string;
  audience: string | null;
  difference: string | null;
};

export type Copy = {
  languageLabel: string;
  settingsLabel: string;
  appearanceLabel: string;
  appearance: {
    system: string;
    light: string;
    dark: string;
  };
  skipToContent: string;
  nav: {
    philosophy: string;
    engineering: string;
    gallery: string;
    community: string;
    downloads: string;
    releases: string;
    download: string;
    mobile: string;
  };
  footer: {
    project: string;
    getStarted: string;
    legal: string;
    independent: string;
    available: string;
    privacy: string;
    terms: string;
    releases: string;
    community: string;
    sponsors: string;
    screenshots: string;
  };
  common: {
    alpha: string;
    available: string;
    experimental: string;
    currentRelease: string;
    openRelease: string;
    edition: string;
    series: string;
    version: string;
    published: string;
    releaseImage: string;
    directDownload: string;
    downloadIso: string;
    verificationGuide: string;
    releaseNotes: string;
    tag: string;
    sha256: string;
    bytes: string;
    opensNewTab: string;
    externalLink: string;
    downloads: string;
    continueArrow: string;
  };
  meta: Record<PageName, { title: string; description: string }>;
  product: {
    tagline: string;
    selectionPrinciple: string;
    editions: Record<'standard' | 'lite' | 'mobile', EditionCopy>;
    capabilities: readonly CapabilityCopy[];
    cliSummary: string;
    validated: {
      title: string;
      architecture: string;
      cpu: string;
      memory: string;
      storage: string;
      firmware: string;
      virtualization: string;
      installedSize: string;
      results: readonly string[];
    };
  };
  releases: Record<ReleaseKey, ReleaseCopy>;
  home: {
    eyebrow: string;
    available: string;
    downloadVerify: string;
    whatItIs: string;
    whatItIsHeading: string;
    whatItIsBody: string;
    whatItIsRule: string;
    editionsEyebrow: string;
    editionsHeading: string;
    editionsIntro: string;
    editionsSeries: string;
    capabilitiesEyebrow: string;
    capabilitiesHeading: string;
    capabilitiesIntro: string;
    localAiEyebrow: string;
    localAiHeading: string;
    localAiIntro: string;
    localAiOwnership: string;
    localAiList: readonly string[];
    continueEyebrow: string;
    continueHeading: string;
    continueItems: readonly { page: PageName; title: string; description: string }[];
  };
  philosophy: {
    eyebrow: string;
    heading: string;
    lead: string;
    imageAlt: string;
    imageCaption: string;
    whyHeading: string;
    principleBody: string;
    frictionBody: string;
    ownershipBody: string;
    differenceHeading: string;
    differenceLead: string;
    principles: readonly { title: string; body: string }[];
    limitsHeading: string;
    limitsBody: string;
    limitsClosing: string;
    nextHeading: string;
    nextBody: string;
    engineering: string;
    downloads: string;
  };
  engineering: {
    eyebrow: string;
    heading: string;
    lead: string;
    protagonistHeading: string;
    protagonistBody: string;
    compositionBody: string;
    standardEdition: string;
    compositionCaption: string;
    platform: string;
    desktop: string;
    terminal: string;
    installer: string;
    defaultsNote: string;
    compositionEyebrow: string;
    compositionHeading: string;
    capabilityHeading: string;
    capabilityLead: string;
    commandHeading: string;
    commandBody: string;
    commandClosing: string;
    installationHeading: string;
    installationBody: string;
    installationClosing: string;
    seriesHeading: string;
    seriesBody: string;
    gallery: string;
    downloads: string;
    philosophy: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    lead: string;
    firstSessionEyebrow: string;
    firstSessionHeading: string;
    firstSessionBody: string;
    everydayEyebrow: string;
    everydayHeading: string;
    everydayBody: string;
    captions: readonly string[];
    alts: readonly string[];
    beforeInstallHeading: string;
    beforeInstallBody: string;
    downloads: string;
  };
  community: {
    eyebrow: string;
    heading: string;
    lead: string;
    imageAlt: string;
    imageCaption: string;
    intro: string;
    channels: readonly {
      name: string;
      role: string;
      detail: string;
      linkLabel: string;
    }[];
  };
  downloads: {
    eyebrow: string;
    heading: string;
    lead: string;
    whatsNewHeading: string;
    configurationHeading: string;
    configurationBody: string;
    configurationCaption: string;
    validationHeading: string;
    validationBody: string;
    verificationHeading: string;
    verificationBody: string;
    verificationClosing: string;
    installationHeading: string;
    installationBody: string;
    beforeDiskHeading: string;
    beforeDiskBody: string;
    gallery: string;
    historyBody: string;
  };
  legal: {
    privacy: {
      eyebrow: string;
      title: string;
      description: string;
      paragraphs: readonly string[];
    };
    terms: {
      eyebrow: string;
      title: string;
      description: string;
      paragraphs: readonly string[];
    };
  };
};

const english: Copy = {
  languageLabel: 'Language',
  settingsLabel: 'Options',
  appearanceLabel: 'Appearance',
  appearance: { system: 'System', light: 'Light', dark: 'Dark' },
  skipToContent: 'Skip to content',
  nav: {
    philosophy: 'Philosophy',
    engineering: 'Engineering',
    gallery: 'Gallery',
    community: 'Community',
    downloads: 'Downloads',
    releases: 'Releases',
    download: 'Download',
    mobile: 'Mobile navigation',
  },
  footer: {
    project: 'Project',
    getStarted: 'Get started',
    legal: 'Legal',
    independent: 'An independent GNU/Linux distribution by Manuel Gil.',
    available: 'is available now.',
    privacy: 'Privacy',
    terms: 'Terms',
    releases: 'GitHub Releases',
    community: 'r/Amonite',
    sponsors: 'Sponsors',
    screenshots: 'Screenshots: unedited captures of the released system · ATTRIBUTION.md',
  },
  common: {
    alpha: 'Alpha',
    available: 'Available',
    experimental: 'Experimental',
    currentRelease: 'Current release',
    openRelease: 'Open release',
    edition: 'Edition',
    series: 'Series',
    version: 'Version',
    published: 'Published',
    releaseImage: 'Release image',
    directDownload: 'Direct download',
    downloadIso: 'Download ISO',
    verificationGuide: 'Verification guide',
    releaseNotes: 'Release notes on GitHub',
    tag: 'Tag',
    sha256: 'SHA-256',
    bytes: 'bytes',
    opensNewTab: '(opens in a new tab)',
    externalLink: 'External link',
    downloads: 'Downloads',
    continueArrow: '→',
  },
  meta: {
    index: {
      title: 'Amonite',
      description:
        'A GNU/Linux operating system engineered for what you do after install: desktop work, development, administration, and local AI.',
    },
    philosophy: {
      title: 'Philosophy',
      description:
        'Why Amonite exists: every package earns its place by delivering a capability, without redefining Linux.',
    },
    engineering: {
      title: 'Engineering',
      description:
        'How Amonite realizes desktop, development, administration, security, and local AI capabilities after install.',
    },
    gallery: {
      title: 'Gallery',
      description:
        'What the Amonite Standard Nautilus Alpha release looks like as shipped: first boot, terminal, welcome handbook, installer, and everyday tools.',
    },
    community: {
      title: 'Community',
      description: 'Discuss Amonite on r/Amonite. Download official releases from GitHub Releases.',
    },
    downloads: {
      title: 'Downloads',
      description: 'Download and verify Amonite editions.',
    },
    privacy: {
      title: 'Privacy',
      description:
        'The Amonite website has no accounts, payments, or forms that collect personal information. What the host may process, and where project questions belong.',
    },
    terms: {
      title: 'Terms',
      description:
        'Terms for the Amonite website: you may read, link to, and share it, without warranty. The website source is MIT-licensed; third-party assets follow ATTRIBUTION.md.',
    },
  },
  product: {
    tagline:
      'A GNU/Linux operating system engineered for what you do after install: desktop work, development, administration, and local AI.',
    selectionPrinciple:
      'Every package is present because it delivers a meaningful capability, never because another package happened to recommend it.',
    editions: {
      standard: {
        statusDetail: 'Official edition with a published alpha release.',
        audience:
          'The default edition for users who need a complete desktop experience for desktop work, development, administration, and local AI.',
        difference:
          'A curated Debian desktop with complete XFCE integration, while remaining lightweight and maintainable.',
      },
      lite: {
        statusDetail: 'Official edition with a published alpha release.',
        audience: 'Users who want a minimal desktop assembled from independent components.',
        difference:
          'A minimal desktop assembled from independent upstream components using standard Debian integration mechanisms, with low coupling and modularity.',
      },
      mobile: {
        statusDetail: 'Experimental edition. No downloadable release yet.',
        audience: null,
        difference: null,
      },
    },
    capabilities: [
      {
        title: 'Desktop Computing',
        body: 'Everyday computing from the first login: a graphical environment with networking, multimedia, storage management, and web browsing ready without assembly.',
        via: 'Default desktop: XFCE. Audio and multimedia through PipeWire. Web browsing through LibreWolf.',
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
    ],
    cliSummary:
      'A modern command-line environment for searching, automation, and structured data, ready for development and administration from first boot.',
    validated: {
      title: 'Validated configuration',
      architecture: 'Architecture',
      cpu: 'CPU',
      memory: 'Memory',
      storage: 'Storage',
      firmware: 'Firmware',
      virtualization: 'Virtualization platform',
      installedSize: 'Installed system size',
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
      ],
    },
  },
  releases: {
    'standard:1.0.0-alpha.2': {
      title: 'Amonite 1.0.0 Alpha 2',
      label: 'Nautilus · Alpha 2',
      summary: 'The second public alpha release of Amonite Standard.',
      evaluationNotice:
        'This release is intended for evaluation and testing. It may contain bugs, incomplete features or compatibility issues and is not intended for production use.',
      highlights: [
        'Debian 13 (Trixie)',
        'Complete XFCE desktop integration',
        'Welcome application',
        'Kitty terminal',
        'Curated command-line environment',
        'Local AI inference with llama.cpp',
        'Calamares installer',
      ],
      direction: null,
      whatsNew: {
        intro:
          "This release focuses on refining the default desktop experience while preserving Amonite's lightweight and maintainable composition.",
        improvements: [
          'a complete and consistent default desktop appearance',
          'the intended desktop integration for this stage of development',
        ],
        closing:
          'These changes refine the desktop experience without changing the product’s lightweight composition.',
      },
    },
    'standard:1.0.0-alpha': {
      title: 'Amonite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'The first public alpha release of Amonite Standard.',
      evaluationNotice:
        'This release is intended for evaluation and testing. It may contain bugs, incomplete features or compatibility issues and is not intended for production use.',
      highlights: [],
      direction: null,
      whatsNew: { intro: '', improvements: [], closing: '' },
    },
    'lite:1.0.0-alpha': {
      title: 'Amonite Lite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'The first public alpha release of Amonite Lite.',
      evaluationNotice:
        'This release is intended for evaluation and testing. It may contain bugs, incomplete features or compatibility issues and should not yet be considered production-ready.',
      highlights: [
        'Debian 13 (Trixie)',
        'Wayland desktop with Labwc',
        'UWSM session management',
        'LightDM login manager',
        'Kitty terminal',
        'Curated command-line environment',
        'Local AI inference with llama.cpp',
        'Welcome application',
        'Calamares installer',
        'Independent components with low coupling',
      ],
      direction:
        'This release is a minimal desktop assembled from independent upstream components using standard Debian integration mechanisms. It emphasizes simplicity, efficiency, security, privacy, maintainability, low coupling, and modularity.',
      whatsNew: { intro: '', improvements: [], closing: '' },
    },
  },
  home: {
    eyebrow: 'GNU/Linux · {editions}',
    available: '{editions} available',
    downloadVerify: 'Download and verify',
    whatItIs: 'What it is',
    whatItIsHeading: 'An operating system defined by what it enables',
    whatItIsBody:
      'Amonite is a GNU/Linux operating system you can install today. After installation, desktop work, development, administration, networking, and local AI are already available.',
    whatItIsRule: 'Amonite starts with a simple rule: software earns its place by enabling work.',
    editionsEyebrow: 'Official editions',
    editionsHeading: 'One product. Multiple editions.',
    editionsIntro: 'Each edition has its own release lifecycle.',
    editionsSeries: 'Public editions belong to the current {series} release series.',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesHeading: 'What becomes possible after install',
    capabilitiesIntro:
      'The system is defined by the work it is ready for on day one. Each of these {count} capabilities has a reason to be here.',
    localAiEyebrow: 'Local Artificial Intelligence',
    localAiHeading: 'Inference on your machine',
    localAiIntro:
      'Local AI is one deliberate capability of the platform. It is not a label for the whole operating system.',
    localAiOwnership: 'Models and prompts stay on your hardware. Nothing depends on an external service.',
    localAiList: [
      'Execute compatible GGUF models locally',
      'Run inference entirely offline',
      'Keep models and prompts under your control',
      'Use an OpenAI-compatible API for local applications',
      'Build workflows without external services',
    ],
    continueEyebrow: 'Continue',
    continueHeading: 'Where to go next',
    continueItems: [
      {
        page: 'philosophy',
        title: 'Philosophy',
        description: 'Why every capability must justify its presence.',
      },
      {
        page: 'engineering',
        title: 'Engineering',
        description: 'How capabilities are realized, and what stays replaceable.',
      },
      {
        page: 'gallery',
        title: 'Gallery',
        description: 'The system as shipped, captured from the live ISO.',
      },
      {
        page: 'community',
        title: 'Community',
        description: 'Discuss on r/Amonite. Download official releases from GitHub Releases.',
      },
    ],
  },
  philosophy: {
    eyebrow: 'Philosophy',
    heading: 'Linux should remain Linux. Linux should remain yours.',
    lead: 'Amonite exists so the first day on a new machine delivers real capabilities, without rebuilding the system or giving up ownership of it.',
    imageAlt: 'Ammonite fossil showing its spiral chambers and layered stone',
    imageCaption: 'A useful system begins with a clear shape.',
    whyHeading: 'Why Amonite',
    principleBody:
      'Every package is present because it delivers a meaningful capability, never because another package happened to recommend it.',
    frictionBody:
      'People who choose Linux usually know what it can become. Friction comes earlier: assembling a coherent day-one system from unrelated recommendations.',
    ownershipBody:
      'Amonite shortens that day. It does not invent a new kind of Linux. It delivers a deliberate set of capabilities and leaves ownership with you.',
    differenceHeading: 'What makes it different',
    differenceLead: 'Difference is not a package count. It is a rule for what may ship.',
    principles: [
      {
        title: 'Capability over accretion',
        body: 'Software earns its place by enabling work. Transitive convenience is not enough.',
      },
      {
        title: 'Replaceability',
        body: 'Useful on day one must not become a trap on day thirty. Defaults stay open to substitution.',
      },
      {
        title: 'User ownership',
        body: 'The person at the keyboard remains in control. The operating system serves that ownership; it does not replace it.',
      },
    ],
    limitsHeading: 'What Amonite does not claim',
    limitsBody:
      'It does not claim to be the fastest, the most secure, or an “AI operating system.” Local AI is one capability among others: desktop, development, administration, networking, and security.',
    limitsClosing: 'Technology changes. The selection rule should not.',
    nextHeading: 'From principle to capabilities',
    nextBody:
      'See how day-one work is organized, and how implementation stays subordinate to outcomes.',
    engineering: 'Engineering',
    downloads: 'Downloads',
  },
  engineering: {
    eyebrow: 'Engineering',
    heading: 'Capabilities first. Implementation second.',
    lead: 'Each default answers a practical question: what must be possible on day one, and what must remain easy to change later?',
    protagonistHeading: 'The product is the protagonist',
    protagonistBody:
      'The same rule shapes the composition: every default has a job to do, and remains replaceable after install.',
    compositionBody:
      'The base composition is small enough to reason about. Everything below is replaceable without fighting the system.',
    standardEdition: 'Standard edition',
    compositionCaption: 'Base composition of the Standard edition',
    platform: 'Platform',
    desktop: 'Desktop',
    terminal: 'Terminal',
    installer: 'Installer',
    defaultsNote: 'Defaults, not requirements. Each one remains replaceable after install.',
    compositionEyebrow: 'Composition',
    compositionHeading: 'The details matter because they have to work together.',
    capabilityHeading: 'How the capabilities take shape',
    capabilityLead:
      '{series} {stage} is meant for real evaluation. Outcomes come first; each entry shows how the capability is realized.',
    commandHeading: 'Command line as a capability',
    commandBody: 'Development and administration should not wait on assembling a toolchain.',
    commandClosing: 'The Standard edition command line as shipped: fastfetch reporting {name} {release} on Debian with XFCE, 817 packages. Unedited capture from the live ISO.',
    installationHeading: 'Installation without ceremony',
    installationBody:
      'Calamares handles installation and disk setup, including encrypted layouts when required. The installer asks what it needs and nothing more.',
    installationClosing: 'See the system in the gallery →',
    seriesHeading: '{series} · {stage}',
    seriesBody: 'The current release, verification steps, and installation guidance are on Downloads.',
    gallery: 'Gallery',
    downloads: 'Downloads',
    philosophy: 'Philosophy',
  },
  gallery: {
    eyebrow: 'Gallery',
    heading: 'The system as shipped',
    lead: 'Captures of {name} Standard {release} running from the live ISO. Window images are cropped to the window. Nothing is staged or retouched.',
    firstSessionEyebrow: 'A first session',
    firstSessionHeading: 'A system that explains itself',
    firstSessionBody:
      'The Welcome handbook gives the live session a place to begin. Your System then shows what is actually running.',
    everydayEyebrow: 'Everyday work',
    everydayHeading: 'Nothing between you and the desktop',
    everydayBody:
      'Once the system is running, the ordinary tools are quiet and familiar: files, settings, and the applications menu.',
    captions: [
      'First boot of the live session. The Welcome handbook and the installer open on an otherwise empty desktop. Everything else stays out of the way.',
      'fastfetch in the maximized terminal, reporting the Standard edition as shipped: {name} {release} ({series}) on Debian with XFCE, 817 packages.',
      'The Welcome handbook. A short introduction, not a control panel: what Amonite is, who it is for, and why it stays minimal.',
      'Your System reports the installation in plain terms: distribution, Debian version, desktop, session, kernel, and hardware.',
      'The installer (Calamares) at the partitioning step. Erase disk or partition manually; encrypted installation is a checkbox, not a project.',
      'Thunar, the XFCE file manager, showing the ordinary home directory waiting for its first files.',
      'The XFCE Settings Manager: familiar controls, close at hand, without another layer between you and the desktop.',
      'The applications menu as shipped: a terminal, a file manager, mail, a browser, and the standard categories. The desktop behind it is intentionally bare.',
    ],
    alts: [
      'Amonite live session at first boot, with the Welcome handbook and the installer open on an otherwise empty desktop',
      'Maximized terminal showing fastfetch output with the Amonite ASCII mark and system details',
      'Amonite Welcome application on its Welcome page, explaining what Amonite is and why it stays minimal',
      'Your System page of the Welcome application listing distribution, Debian version, desktop, kernel, and hardware',
      'Amonite installer (Calamares) at the partitioning step, offering erase disk, manual partitioning, and system encryption',
      'Thunar file manager showing the home directory of the live user',
      'XFCE Settings Manager with personal, hardware, and system sections',
      'Applications menu open over an empty desktop, listing terminal, file manager, mail reader, web browser, and category submenus',
    ],
    beforeInstallHeading: 'See it before you install',
    beforeInstallBody:
      'These captures come from the validated QEMU/KVM configuration documented with the release. The fastest way past screenshots is the live ISO itself.',
    downloads: 'Downloads',
  },
  community: {
    eyebrow: 'Community',
    heading: 'Public discussion is the support channel',
    lead: 'Questions, feedback, and discussion belong on r/Amonite. Official releases are published through GitHub Releases. The source repository is temporarily private during this stage of development.',
    imageAlt: 'Quiet workstation beside a window with a monitor, keyboard, and speakers',
    imageCaption: 'A place to use the system, then bring what you learn back to the project.',
    intro: 'Start with a question, a fresh install, or something that does not work as expected. The useful part is what can be shared afterward.',
    channels: [
      {
        name: 'r/Amonite',
        role: 'Questions, feedback, and discussion',
        detail:
          'r/Amonite is the primary public space for conversation about running Nautilus Alpha: installs, what works, and where friction remains.',
        linkLabel: 'Open r/Amonite',
      },
      {
        name: 'GitHub Releases',
        role: 'Official distribution channel',
        detail:
          'Official releases, checksums, signatures, and release notes are published through GitHub Releases.',
        linkLabel: 'Open GitHub Releases',
      },
      {
        name: 'The system itself',
        role: 'The primary source',
        detail: 'Install Nautilus and use it to evaluate the system directly.',
        linkLabel: 'Downloads',
      },
    ],
  },
  downloads: {
    eyebrow: 'Downloads',
    heading: 'Current releases',
    lead: 'Published release media and verification for Amonite editions. Edition purpose is described on the home page.',
    whatsNewHeading: "{edition} What's New",
    configurationHeading: 'Validated configuration',
    configurationBody:
      'The configuration used to validate the current {edition} {series} {stage} release. A practical reference, not a statement of minimum or recommended requirements.',
    configurationCaption: 'Validated hardware configuration',
    validationHeading: 'Validation results',
    validationBody:
      'Before publishing, we exercised these paths on the validated configuration. Every item below passed.',
    verificationHeading: 'Verification',
    verificationBody:
      'Official releases are signed so you can check that the image came from Amonite and was not changed. When a SHA-256 checksum is listed with a release, it provides an additional check before writing installation media.',
    verificationClosing: 'Releases can be checked independently. For the complete steps, read the official verification guide.',
    installationHeading: 'Installation',
    installationBody:
      'Write the verified image to a USB drive, boot it, and follow the graphical installer. The Installation Guide covers writing media, starting the installer, and setting up the system.',
    beforeDiskHeading: 'Before you commit a disk',
    beforeDiskBody:
      'The live session runs entirely from the USB drive, so you can evaluate the system without touching installed disks. The installer only changes a disk when you confirm the partitioning step.',
    gallery: 'See the installer in the gallery',
    historyBody: 'Release history is edition-specific.',
  },
  legal: {
    privacy: {
      eyebrow: 'Legal',
      title: 'Privacy',
      description:
        'The Amonite website has no accounts, payments, or forms that collect personal information. What the host may process, and where project questions belong.',
      paragraphs: [
        'This site has no accounts, payments, or forms that collect personal information.',
        'The host may process ordinary request data under its own practices. External links follow those services’ policies.',
        'Questions about the project belong on r/Amonite.',
      ],
    },
    terms: {
      eyebrow: 'Legal',
      title: 'Terms',
      description:
        'Terms for the Amonite website: you may read, link to, and share it, without warranty. The website source is MIT-licensed; third-party assets follow ATTRIBUTION.md.',
      paragraphs: [
        'You may read, link to, and share this website. It is provided without warranty.',
        'Website source is MIT-licensed. Third-party assets follow ATTRIBUTION.md.',
        'Amonite is created and maintained by Manuel Gil.',
      ],
    },
  },
};

export const COPY: Record<Locale, Copy> = {
  en: english,
  es: {
    ...english,
    languageLabel: 'Idioma',
    settingsLabel: 'Opciones',
    appearanceLabel: 'Apariencia',
    appearance: { system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
    skipToContent: 'Ir al contenido',
    nav: {
      philosophy: 'Filosofía',
      engineering: 'Ingeniería',
      gallery: 'Galería',
      community: 'Comunidad',
      downloads: 'Descargas',
      releases: 'Lanzamientos',
      download: 'Descargar',
      mobile: 'Navegación móvil',
    },
    footer: {
      ...english.footer,
      project: 'Proyecto',
      getStarted: 'Empezar',
      legal: 'Legal',
      independent: 'Una distribución GNU/Linux independiente de Manuel Gil.',
      available: 'está disponible.',
      privacy: 'Privacidad',
      terms: 'Términos',
      releases: 'Lanzamientos de GitHub',
      community: 'r/Amonite',
      sponsors: 'Patrocinio',
      screenshots: 'Capturas: imágenes sin editar del sistema publicado · ATTRIBUTION.md',
    },
    common: {
      ...english.common,
      alpha: 'Alfa',
      available: 'Disponible',
      experimental: 'Experimental',
      currentRelease: 'Versión actual',
      openRelease: 'Abrir versión',
      edition: 'Edición',
      series: 'Serie',
      version: 'Versión',
      published: 'Publicada',
      releaseImage: 'Imagen de la versión',
      directDownload: 'Descarga directa',
      downloadIso: 'Descargar ISO',
      verificationGuide: 'Guía de verificación',
      releaseNotes: 'Notas de la versión en GitHub',
      tag: 'Etiqueta',
      bytes: 'bytes',
      externalLink: 'Enlace externo',
      downloads: 'Descargas',
      continueArrow: '→',
    },
    meta: {
      ...english.meta,
      index: { title: 'Amonite', description: 'Un sistema operativo GNU/Linux diseñado para el trabajo de escritorio, el desarrollo, la administración y la IA local después de la instalación.' },
      philosophy: { title: 'Filosofía', description: 'Por qué existe Amonite: cada paquete justifica su lugar al ofrecer una capacidad, sin redefinir Linux.' },
      engineering: { title: 'Ingeniería', description: 'Cómo Amonite hace posibles las capacidades de escritorio, desarrollo, administración, seguridad e IA local.' },
      gallery: { title: 'Galería', description: 'Amonite tal como se entrega: primer arranque, terminal, manual de bienvenida, instalador y herramientas cotidianas.' },
      community: { title: 'Comunidad', description: 'Habla sobre Amonite en r/Amonite. Descarga versiones oficiales desde GitHub Releases.' },
      downloads: { title: 'Descargas', description: 'Descarga y verifica las ediciones de Amonite.' },
      privacy: { title: 'Privacidad', description: 'La web de Amonite no tiene cuentas, pagos ni formularios que recopilen información personal.' },
      terms: { title: 'Términos', description: 'Términos de la web de Amonite: puedes leerla, enlazarla y compartirla sin garantía.' },
    },
    product: {
      ...english.product,
      tagline: 'Un sistema operativo GNU/Linux diseñado para lo que haces después de instalarlo: trabajo de escritorio, desarrollo, administración e IA local.',
      selectionPrinciple: 'Cada paquete está presente porque ofrece una capacidad significativa, nunca porque otro paquete lo haya recomendado.',
      editions: {
        standard: { statusDetail: 'Edición oficial con una versión alfa publicada.', audience: 'La edición predeterminada para quienes necesitan una experiencia de escritorio completa para trabajar, desarrollar, administrar y usar IA local.', difference: 'Un escritorio Debian cuidadosamente compuesto con integración completa de XFCE, sin dejar de ser ligero y mantenible.' },
        lite: { statusDetail: 'Edición oficial con una versión alfa publicada.', audience: 'Para quienes quieren un escritorio mínimo ensamblado a partir de componentes independientes.', difference: 'Un escritorio mínimo compuesto por componentes upstream independientes mediante los mecanismos estándar de integración de Debian, con bajo acoplamiento y modularidad.' },
        mobile: { statusDetail: 'Edición experimental. Todavía no hay una versión descargable.', audience: null, difference: null },
      },
      capabilities: [
        { title: 'Trabajo de escritorio', body: 'Trabajo cotidiano desde el primer inicio: un entorno gráfico con red, multimedia, almacenamiento y navegación web listos sin ensamblaje adicional.', via: 'Escritorio predeterminado: XFCE. Audio y multimedia mediante PipeWire. Navegación web con LibreWolf.' },
        { title: 'Desarrollo de software', body: 'Escribe, compila y depura desde la primera sesión con un entorno de línea de comandos moderno preparado para buscar, automatizar y trabajar con datos estructurados.', via: 'Terminal predeterminada: Kitty. Herramientas de desarrollo disponibles sin montar un toolchain manualmente.' },
        { title: 'Administración del sistema', body: 'Inspecciona, configura y mantiene la máquina con herramientas de administración listas desde el primer arranque.', via: 'Utilidades CLI prácticas, seleccionadas para operadores, no un inventario exhaustivo de paquetes.' },
        { title: 'Inteligencia artificial local', body: 'Ejecuta modelos GGUF compatibles en tu máquina, completamente offline. Mantén modelos y prompts bajo tu control y ofrece una API compatible con OpenAI para aplicaciones y flujos locales.', via: 'Implementada con llama.cpp como capacidad integrada de la plataforma, no como un paquete añadido.' },
        { title: 'Redes', body: 'Conecta y trabaja en red sin improvisar controladores, stacks ni configuración básica después de instalar.', via: 'Red preparada como parte de la composición predeterminada.' },
        { title: 'Seguridad', body: 'Aislamiento de aplicaciones y políticas de seguridad activadas por defecto. Instalación cifrada opcional cuando la necesites.', via: 'AppArmor activado. Instalaciones cifradas mediante el instalador gráfico (Calamares).' },
        { title: 'Almacenamiento', body: 'Instala y administra discos con un instalador gráfico claro, incluidos esquemas cifrados cuando se necesiten.', via: 'Calamares gestiona la instalación y la configuración de discos.' },
        { title: 'Documentación', body: 'Documentación integrada del proyecto para entender el sistema sin buscar el contexto que falta.', via: 'Documentación pública publicada junto a las versiones en GitHub.' },
      ],
      cliSummary: 'Un entorno moderno de línea de comandos para búsqueda, automatización y datos estructurados, listo para desarrollo y administración desde el primer arranque.',
      validated: { ...english.product.validated, title: 'Configuración validada', architecture: 'Arquitectura', cpu: 'CPU', memory: 'Memoria', storage: 'Almacenamiento', firmware: 'Firmware', virtualization: 'Plataforma de virtualización', installedSize: 'Tamaño del sistema instalado', results: ['Arranque de ISO live', 'Escritorio gráfico', 'Aplicación de bienvenida', 'Instalación con Calamares', 'Primer arranque tras instalar', 'Inicio de sesión', 'Terminal', 'apt update', 'apt upgrade', 'Cero servicios systemd fallidos'] },
    },
    releases: {
      ...english.releases,
      'standard:1.0.0-alpha.2': { ...english.releases['standard:1.0.0-alpha.2'], title: 'Amonite 1.0.0 Alfa 2', label: 'Nautilus · Alfa 2', summary: 'La segunda versión alfa pública de Amonite Standard.', evaluationNotice: 'Esta versión está destinada a evaluación y pruebas. Puede contener errores, funciones incompletas o problemas de compatibilidad y no está destinada a producción.', highlights: ['Debian 13 (Trixie)', 'Integración completa del escritorio XFCE', 'Aplicación de bienvenida', 'Terminal Kitty', 'Entorno de línea de comandos seleccionado', 'Inferencia de IA local con llama.cpp', 'Instalador Calamares'], whatsNew: { intro: 'Esta versión se centra en perfeccionar la experiencia de escritorio predeterminada y conservar una composición ligera y mantenible.', improvements: ['una apariencia de escritorio completa y coherente', 'la integración de escritorio prevista para esta etapa de desarrollo'], closing: 'Estos cambios perfeccionan el escritorio sin cambiar la composición ligera del producto.' } },
      'standard:1.0.0-alpha': { ...english.releases['standard:1.0.0-alpha'], title: 'Amonite 1.0.0 Alfa', label: 'Nautilus · Alfa', summary: 'La primera versión alfa pública de Amonite Standard.', evaluationNotice: 'Esta versión está destinada a evaluación y pruebas. Puede contener errores, funciones incompletas o problemas de compatibilidad y no está destinada a producción.', highlights: [], direction: null, whatsNew: { intro: '', improvements: [], closing: '' } },
      'lite:1.0.0-alpha': { ...english.releases['lite:1.0.0-alpha'], title: 'Amonite Lite 1.0.0 Alfa', label: 'Nautilus · Alfa', summary: 'La primera versión alfa pública de Amonite Lite.', evaluationNotice: 'Esta versión está destinada a evaluación y pruebas. Puede contener errores, funciones incompletas o problemas de compatibilidad y todavía no debe considerarse lista para producción.', highlights: ['Debian 13 (Trixie)', 'Escritorio Wayland con Labwc', 'Gestión de sesión UWSM', 'Gestor de inicio LightDM', 'Terminal Kitty', 'Entorno de línea de comandos seleccionado', 'Inferencia de IA local con llama.cpp', 'Aplicación de bienvenida', 'Instalador Calamares', 'Componentes independientes con bajo acoplamiento'], direction: 'Esta versión es un escritorio mínimo compuesto por componentes upstream independientes mediante los mecanismos estándar de integración de Debian. Da prioridad a la simplicidad, eficiencia, seguridad, privacidad, mantenibilidad, bajo acoplamiento y modularidad.', whatsNew: { intro: '', improvements: [], closing: '' } },
    },
    home: {
      ...english.home,
      eyebrow: 'GNU/Linux · {editions}',
      available: '{editions} disponibles',
      downloadVerify: 'Descargar y verificar',
      whatItIs: 'Qué es',
      whatItIsHeading: 'Un sistema operativo definido por lo que hace posible',
      whatItIsBody: 'Amonite es un sistema operativo GNU/Linux que puedes instalar hoy. Después de instalarlo, el trabajo de escritorio, el desarrollo, la administración, las redes y la IA local están disponibles.',
      whatItIsRule: 'Amonite parte de una regla sencilla: el software se gana su lugar haciendo posible el trabajo.',
      editionsEyebrow: 'Ediciones oficiales',
      editionsHeading: 'Un producto. Varias ediciones.',
      editionsIntro: 'Cada edición tiene su propio ciclo de versiones.',
      editionsSeries: 'Las ediciones públicas pertenecen a la serie de versiones {series} actual.',
      capabilitiesEyebrow: 'Capacidades',
      capabilitiesHeading: 'Lo que hace posible después de instalar',
      capabilitiesIntro: 'El sistema se define por el trabajo para el que está listo desde el primer día. Cada una de estas {count} capacidades tiene una razón para estar aquí.',
      localAiEyebrow: 'Inteligencia artificial local',
      localAiHeading: 'Inferencia en tu máquina',
      localAiIntro: 'La IA local es una capacidad deliberada de la plataforma. No es una etiqueta para todo el sistema operativo.',
      localAiOwnership: 'Los modelos y prompts permanecen en tu hardware. Nada depende de un servicio externo.',
      localAiList: ['Ejecutar modelos GGUF compatibles localmente', 'Ejecutar inferencia completamente offline', 'Mantener modelos y prompts bajo tu control', 'Usar una API compatible con OpenAI para aplicaciones locales', 'Crear flujos de trabajo sin servicios externos'],
      continueEyebrow: 'Continuar',
      continueHeading: 'Adónde ir después',
      continueItems: [
        { page: 'philosophy', title: 'Filosofía', description: 'Por qué cada capacidad debe justificar su presencia.' },
        { page: 'engineering', title: 'Ingeniería', description: 'Cómo se realizan las capacidades y qué permanece reemplazable.' },
        { page: 'gallery', title: 'Galería', description: 'El sistema tal como se entrega, capturado desde la ISO live.' },
        { page: 'community', title: 'Comunidad', description: 'Habla en r/Amonite. Descarga versiones oficiales desde GitHub Releases.' },
      ],
    },
    philosophy: {
      ...english.philosophy,
      eyebrow: 'Filosofía',
      heading: 'Linux debe seguir siendo Linux. Linux debe seguir siendo tuyo.',
      lead: 'Amonite existe para que el primer día en una máquina nueva ofrezca capacidades reales, sin reconstruir el sistema ni renunciar a su control.',
      imageAlt: 'Fósil de ammonite mostrando sus cámaras espirales y capas de piedra',
      imageCaption: 'Un sistema útil empieza con una forma clara.',
      whyHeading: 'Por qué Amonite',
      principleBody: 'Cada paquete está presente porque ofrece una capacidad significativa, nunca porque otro paquete lo haya recomendado.',
      frictionBody: 'Quienes eligen Linux suelen saber en qué puede convertirse. La fricción aparece antes: ensamblar un sistema coherente para el primer día a partir de recomendaciones inconexas.',
      ownershipBody: 'Amonite acorta ese día. No inventa un nuevo tipo de Linux. Ofrece un conjunto deliberado de capacidades y deja el control en tus manos.',
      differenceHeading: 'Qué lo hace diferente',
      differenceLead: 'La diferencia no está en el número de paquetes. Está en la regla que decide qué puede incluirse.',
      principles: [
        { title: 'Capacidad antes que acumulación', body: 'El software se gana su lugar haciendo posible el trabajo. La comodidad transitiva no basta.' },
        { title: 'Reemplazabilidad', body: 'Lo útil el primer día no debe convertirse en una trampa el día treinta. Los valores predeterminados permanecen abiertos a sustitución.' },
        { title: 'Control del usuario', body: 'La persona frente al teclado mantiene el control. El sistema operativo sirve a ese control; no lo sustituye.' },
      ],
      limitsHeading: 'Lo que Amonite no afirma',
      limitsBody: 'No afirma ser el más rápido, el más seguro ni un “sistema operativo de IA”. La IA local es una capacidad entre otras: escritorio, desarrollo, administración, redes y seguridad.',
      limitsClosing: 'La tecnología cambia. La regla de selección no debería hacerlo.',
      nextHeading: 'Del principio a las capacidades',
      nextBody: 'Mira cómo se organiza el trabajo del primer día y cómo la implementación permanece subordinada a los resultados.',
      engineering: 'Ingeniería',
      downloads: 'Descargas',
    },
    engineering: {
      ...english.engineering,
      eyebrow: 'Ingeniería',
      heading: 'Primero las capacidades. Después la implementación.',
      lead: 'Cada valor predeterminado responde a una pregunta práctica: ¿qué debe ser posible el primer día y qué debe seguir siendo fácil de cambiar después?',
      protagonistHeading: 'El producto es el protagonista',
      protagonistBody: 'La misma regla da forma a la composición: cada valor predeterminado tiene un trabajo y sigue siendo reemplazable después de instalar.',
      compositionBody: 'La composición base es lo bastante pequeña como para razonarla. Todo lo que aparece abajo puede reemplazarse sin luchar contra el sistema.',
      standardEdition: 'Edición Standard',
      compositionCaption: 'Composición base de la edición Standard',
      platform: 'Plataforma',
      desktop: 'Escritorio',
      terminal: 'Terminal',
      installer: 'Instalador',
      defaultsNote: 'Valores predeterminados, no requisitos. Cada uno sigue siendo reemplazable después de instalar.',
      compositionEyebrow: 'Composición',
      compositionHeading: 'Los detalles importan porque tienen que funcionar juntos.',
      capabilityHeading: 'Cómo toman forma las capacidades',
      capabilityLead: '{series} {stage} está pensado para una evaluación real. Los resultados van primero; cada entrada muestra cómo se realiza la capacidad.',
      commandHeading: 'La línea de comandos como capacidad',
      commandBody: 'El desarrollo y la administración no deberían esperar a que se monte un toolchain.',
      commandClosing: 'La línea de comandos de la edición Standard tal como se entrega: fastfetch informa de {name} {release} en Debian con XFCE y 817 paquetes. Captura sin editar desde la ISO live.',
      installationHeading: 'Instalación sin ceremonia',
      installationBody: 'Calamares gestiona la instalación y la configuración de discos, incluidos los esquemas cifrados cuando se necesitan. El instalador pregunta lo necesario y nada más.',
      installationClosing: 'Ver el sistema en la galería →',
      seriesHeading: '{series} · {stage}',
      seriesBody: 'La versión actual, los pasos de verificación y la guía de instalación están en Descargas.',
      gallery: 'Galería',
      downloads: 'Descargas',
      philosophy: 'Filosofía',
    },
    gallery: {
      ...english.gallery,
      eyebrow: 'Galería',
      heading: 'El sistema tal como se entrega',
      lead: 'Capturas de {name} Standard {release} ejecutándose desde la ISO live. Las imágenes de ventanas están recortadas a la ventana. Nada está preparado ni retocado.',
      firstSessionEyebrow: 'Una primera sesión',
      firstSessionHeading: 'Un sistema que se explica a sí mismo',
      firstSessionBody: 'El manual de bienvenida ofrece un punto de partida para la sesión live. Your System muestra después lo que realmente está ejecutándose.',
      everydayEyebrow: 'Trabajo cotidiano',
      everydayHeading: 'Nada entre tú y el escritorio',
      everydayBody: 'Cuando el sistema está funcionando, las herramientas cotidianas son tranquilas y familiares: archivos, configuración y el menú de aplicaciones.',
      captions: ['Primer arranque de la sesión live. El manual de bienvenida y el instalador se abren sobre un escritorio vacío. Todo lo demás deja espacio.', 'fastfetch en la terminal maximizada, informando de la edición Standard tal como se entrega: {name} {release} ({series}) sobre Debian con XFCE y 817 paquetes.', 'El manual de bienvenida. Una introducción breve, no un panel de control: qué es Amonite, para quién es y por qué permanece minimalista.', 'Your System informa de la instalación en términos sencillos: distribución, versión de Debian, escritorio, sesión, kernel y hardware.', 'El instalador (Calamares) en el paso de particionado. Borrar el disco o particionar manualmente; la instalación cifrada es una casilla, no un proyecto.', 'Thunar, el gestor de archivos de XFCE, mostrando el directorio personal del usuario live a la espera de sus primeros archivos.', 'El gestor de configuración de XFCE: controles familiares y cercanos, sin otra capa entre tú y el escritorio.', 'El menú de aplicaciones tal como se entrega: terminal, gestor de archivos, correo, navegador y categorías estándar. El escritorio detrás permanece deliberadamente vacío.'],
      alts: ['Sesión live de Amonite en el primer arranque, con el manual de bienvenida y el instalador abiertos sobre un escritorio vacío', 'Terminal maximizada mostrando la salida de fastfetch con la marca ASCII de Amonite y los detalles del sistema', 'Aplicación de bienvenida de Amonite en su página inicial, explicando qué es Amonite y por qué permanece minimalista', 'Página Your System de la aplicación de bienvenida con la distribución, versión de Debian, escritorio, kernel y hardware', 'Instalador de Amonite (Calamares) en el paso de particionado, con opciones para borrar el disco, particionar manualmente y cifrar el sistema', 'Gestor de archivos Thunar mostrando el directorio personal del usuario live', 'Gestor de configuración de XFCE con secciones personales, de hardware y del sistema', 'Menú de aplicaciones abierto sobre un escritorio vacío, con terminal, gestor de archivos, lector de correo, navegador y submenús de categorías'],
      beforeInstallHeading: 'Míralo antes de instalar',
      beforeInstallBody: 'Estas capturas proceden de la configuración validada de QEMU/KVM documentada con la versión. La forma más rápida de superar las capturas es la propia ISO live.',
      downloads: 'Descargas',
    },
    community: {
      ...english.community,
      eyebrow: 'Comunidad',
      heading: 'La conversación pública es el canal de soporte',
      lead: 'Las preguntas, comentarios y conversaciones pertenecen a r/Amonite. Las versiones oficiales se publican mediante GitHub Releases. El repositorio fuente es temporalmente privado durante esta etapa de desarrollo.',
      imageAlt: 'Puesto de trabajo tranquilo junto a una ventana con monitor, teclado y altavoces',
      imageCaption: 'Un lugar para usar el sistema y devolver al proyecto lo aprendido.',
      intro: 'Empieza con una pregunta, una instalación nueva o algo que no funcione como esperabas. Lo útil es lo que pueda compartirse después.',
      channels: [
        { name: 'r/Amonite', role: 'Preguntas, comentarios y conversación', detail: 'r/Amonite es el espacio público principal para hablar de Nautilus Alpha: instalaciones, lo que funciona y dónde queda fricción.', linkLabel: 'Abrir r/Amonite' },
        { name: 'GitHub Releases', role: 'Canal oficial de distribución', detail: 'Las versiones oficiales, checksums, firmas y notas se publican mediante GitHub Releases.', linkLabel: 'Abrir GitHub Releases' },
        { name: 'El sistema', role: 'La fuente principal', detail: 'Instala Nautilus y úsalo para evaluar el sistema directamente.', linkLabel: 'Descargas' },
      ],
    },
    downloads: {
      ...english.downloads,
      eyebrow: 'Descargas',
      heading: 'Versiones actuales',
      lead: 'Medios de instalación publicados y verificación para las ediciones de Amonite. El propósito de cada edición se describe en la página principal.',
      whatsNewHeading: 'Novedades de {edition}',
      configurationHeading: 'Configuración validada',
      configurationBody: 'Configuración usada para validar la versión {stage} {series} actual de {edition}. Es una referencia práctica, no una declaración de requisitos mínimos o recomendados.',
      configurationCaption: 'Configuración de hardware validada',
      validationHeading: 'Resultados de validación',
      validationBody: 'Antes de publicar, probamos estos recorridos en la configuración validada. Todos los elementos siguientes pasaron.',
      verificationHeading: 'Verificación',
      verificationBody: 'Las versiones oficiales están firmadas para que puedas comprobar que la imagen procede de Amonite y no ha sido modificada. Cuando una versión incluye un checksum SHA-256, ofrece una comprobación adicional antes de escribir el medio de instalación.',
      verificationClosing: 'Las versiones pueden comprobarse de forma independiente. Para conocer todos los pasos, lee la guía oficial de verificación.',
      installationHeading: 'Instalación',
      installationBody: 'Escribe la imagen verificada en una memoria USB, arranca desde ella y sigue el instalador gráfico. La guía de instalación explica cómo escribir el medio, iniciar el instalador y configurar el sistema.',
      beforeDiskHeading: 'Antes de comprometer un disco',
      beforeDiskBody: 'La sesión live se ejecuta completamente desde la memoria USB, para que puedas evaluar el sistema sin tocar los discos instalados. El instalador solo modifica un disco cuando confirmas el particionado.',
      gallery: 'Ver el instalador en la galería',
      historyBody: 'El historial de versiones es específico de cada edición.',
    },
    legal: {
      privacy: { eyebrow: 'Legal', title: 'Privacidad', description: 'La web de Amonite no tiene cuentas, pagos ni formularios que recopilen información personal. Qué puede procesar el proveedor y dónde corresponden las preguntas del proyecto.', paragraphs: ['Esta web no tiene cuentas, pagos ni formularios que recopilen información personal.', 'El proveedor puede procesar datos ordinarios de las solicitudes según sus propias prácticas. Los enlaces externos siguen las políticas de sus servicios.', 'Las preguntas sobre el proyecto pertenecen a r/Amonite.'] },
      terms: { eyebrow: 'Legal', title: 'Términos', description: 'Términos de la web de Amonite: puedes leerla, enlazarla y compartirla sin garantía. El código de la web tiene licencia MIT; los recursos de terceros siguen ATTRIBUTION.md.', paragraphs: ['Puedes leer, enlazar y compartir esta web. Se ofrece sin garantía.', 'El código de la web tiene licencia MIT. Los recursos de terceros siguen ATTRIBUTION.md.', 'Amonite está creado y mantenido por Manuel Gil.'] },
    },
  },
  pt: {
    ...english,
    languageLabel: 'Idioma',
    settingsLabel: 'Opções',
    appearanceLabel: 'Aparência',
    appearance: { system: 'Sistema', light: 'Claro', dark: 'Escuro' },
    skipToContent: 'Ir para o conteúdo',
    nav: { philosophy: 'Filosofia', engineering: 'Engenharia', gallery: 'Galeria', community: 'Comunidade', downloads: 'Downloads', releases: 'Lançamentos', download: 'Baixar', mobile: 'Navegação móvel' },
    footer: { ...english.footer, project: 'Projeto', getStarted: 'Começar', legal: 'Legal', independent: 'Uma distribuição GNU/Linux independente de Manuel Gil.', available: 'está disponível.', privacy: 'Privacidade', terms: 'Termos', releases: 'Lançamentos no GitHub', community: 'r/Amonite', sponsors: 'Patrocínio', screenshots: 'Capturas: imagens não editadas do sistema lançado · ATTRIBUTION.md' },
    common: { ...english.common, alpha: 'Alfa', available: 'Disponível', experimental: 'Experimental', currentRelease: 'Versão atual', openRelease: 'Abrir versão', edition: 'Edição', series: 'Série', version: 'Versão', published: 'Publicada', releaseImage: 'Imagem da versão', directDownload: 'Download direto', downloadIso: 'Baixar ISO', verificationGuide: 'Guia de verificação', releaseNotes: 'Notas da versão no GitHub', tag: 'Etiqueta', externalLink: 'Link externo' },
    meta: { ...english.meta, index: { title: 'Amonite', description: 'Um sistema operacional GNU/Linux criado para trabalho de escritório, desenvolvimento, administração e IA local depois da instalação.' }, philosophy: { title: 'Filosofia', description: 'Por que o Amonite existe: cada pacote conquista seu lugar ao oferecer uma capacidade, sem redefinir o Linux.' }, engineering: { title: 'Engenharia', description: 'Como o Amonite realiza capacidades de desktop, desenvolvimento, administração, segurança e IA local.' }, gallery: { title: 'Galeria', description: 'O Amonite como é distribuído: primeiro arranque, terminal, manual de boas-vindas, instalador e ferramentas quotidianas.' }, community: { title: 'Comunidade', description: 'Fale sobre o Amonite em r/Amonite. Baixe versões oficiais no GitHub Releases.' }, downloads: { title: 'Downloads', description: 'Baixe e verifique as edições do Amonite.' }, privacy: { title: 'Privacidade', description: 'O site do Amonite não tem contas, pagamentos ou formulários que recolham informação pessoal.' }, terms: { title: 'Termos', description: 'Termos do site do Amonite: pode ler, ligar e partilhar o site sem garantia.' } },
    product: {
      ...english.product,
      tagline: 'Um sistema operacional GNU/Linux criado para o que faz depois da instalação: trabalho de escritório, desenvolvimento, administração e IA local.',
      selectionPrinciple: 'Cada pacote está presente porque oferece uma capacidade significativa, nunca porque outro pacote o recomendou.',
      editions: { standard: { statusDetail: 'Edição oficial com uma versão alfa publicada.', audience: 'A edição padrão para quem precisa de uma experiência de desktop completa para trabalho, desenvolvimento, administração e IA local.', difference: 'Um desktop Debian cuidadosamente composto com integração completa do XFCE, mantendo-se leve e fácil de manter.' }, lite: { statusDetail: 'Edição oficial com uma versão alfa publicada.', audience: 'Para quem quer um desktop mínimo montado a partir de componentes independentes.', difference: 'Um desktop mínimo composto por componentes upstream independentes usando os mecanismos padrão de integração do Debian, com baixo acoplamento e modularidade.' }, mobile: { statusDetail: 'Edição experimental. Ainda não há uma versão descarregável.', audience: null, difference: null } },
      capabilities: [{ title: 'Trabalho de desktop', body: 'Trabalho quotidiano desde o primeiro início: um ambiente gráfico com rede, multimédia, armazenamento e navegação web prontos sem montagem adicional.', via: 'Desktop padrão: XFCE. Áudio e multimédia através do PipeWire. Navegação web através do LibreWolf.' }, { title: 'Desenvolvimento de software', body: 'Escreva, compile e depure desde a primeira sessão com um ambiente de linha de comandos moderno preparado para pesquisa, automação e dados estruturados.', via: 'Terminal padrão: Kitty. Ferramentas de desenvolvimento disponíveis sem montar um toolchain manualmente.' }, { title: 'Administração do sistema', body: 'Inspecione, configure e mantenha a máquina com ferramentas de administração prontas desde o primeiro arranque.', via: 'Utilitários CLI práticos, selecionados para operadores, não uma lista exaustiva de pacotes.' }, { title: 'Inteligência artificial local', body: 'Execute modelos GGUF compatíveis na sua máquina, totalmente offline. Mantenha modelos e prompts sob o seu controlo e ofereça uma API compatível com OpenAI para aplicações locais.', via: 'Implementada com llama.cpp como capacidade integrada da plataforma, não como pacote acrescentado.' }, { title: 'Redes', body: 'Ligue-se e trabalhe na rede sem improvisar controladores, stacks ou configuração básica depois da instalação.', via: 'Rede pronta como parte da composição padrão.' }, { title: 'Segurança', body: 'Isolamento de aplicações e políticas de segurança ativados por padrão. Instalação cifrada opcional quando necessário.', via: 'AppArmor ativado. Instalações cifradas suportadas pelo instalador gráfico (Calamares).' }, { title: 'Armazenamento', body: 'Instale e administre discos com um instalador gráfico claro, incluindo esquemas cifrados quando necessário.', via: 'O Calamares gere a instalação e a configuração dos discos.' }, { title: 'Documentação', body: 'Documentação integrada do projeto para entender o sistema sem procurar contexto em falta.', via: 'Documentação pública publicada com as versões no GitHub.' }],
      cliSummary: 'Um ambiente moderno de linha de comandos para pesquisa, automação e dados estruturados, pronto para desenvolvimento e administração desde o primeiro arranque.',
      validated: { ...english.product.validated, title: 'Configuração validada', architecture: 'Arquitetura', cpu: 'CPU', memory: 'Memória', storage: 'Armazenamento', firmware: 'Firmware', virtualization: 'Plataforma de virtualização', installedSize: 'Tamanho do sistema instalado', results: ['Arranque da ISO live', 'Desktop gráfico', 'Aplicação de boas-vindas', 'Instalação com Calamares', 'Primeiro arranque após a instalação', 'Início de sessão', 'Terminal', 'apt update', 'apt upgrade', 'Zero serviços systemd falhados'] },
    },
    releases: { ...english.releases },
    home: { ...english.home, eyebrow: 'GNU/Linux · {editions}', available: '{editions} disponíveis', downloadVerify: 'Baixar e verificar', whatItIs: 'O que é', whatItIsHeading: 'Um sistema operacional definido pelo que permite fazer', whatItIsBody: 'O Amonite é um sistema operacional GNU/Linux que pode instalar hoje. Depois da instalação, trabalho de escritório, desenvolvimento, administração, redes e IA local já estão disponíveis.', whatItIsRule: 'O Amonite começa com uma regra simples: o software conquista o seu lugar ao permitir trabalho.', editionsEyebrow: 'Edições oficiais', editionsHeading: 'Um produto. Várias edições.', editionsIntro: 'Cada edição tem o seu próprio ciclo de versões.', editionsSeries: 'As edições públicas pertencem à série de versões {series} atual.', capabilitiesEyebrow: 'Capacidades', capabilitiesHeading: 'O que se torna possível depois da instalação', capabilitiesIntro: 'O sistema é definido pelo trabalho para o qual está pronto desde o primeiro dia. Cada uma destas {count} capacidades tem uma razão para estar aqui.', localAiEyebrow: 'Inteligência artificial local', localAiHeading: 'Inferência na sua máquina', localAiIntro: 'A IA local é uma capacidade deliberada da plataforma. Não é um rótulo para todo o sistema operacional.', localAiOwnership: 'Os modelos e prompts ficam no seu hardware. Nada depende de um serviço externo.', localAiList: ['Executar modelos GGUF compatíveis localmente', 'Executar inferência totalmente offline', 'Manter modelos e prompts sob o seu controlo', 'Usar uma API compatível com OpenAI para aplicações locais', 'Criar fluxos de trabalho sem serviços externos'], continueEyebrow: 'Continuar', continueHeading: 'Para onde ir agora', continueItems: [{ page: 'philosophy', title: 'Filosofia', description: 'Por que cada capacidade deve justificar a sua presença.' }, { page: 'engineering', title: 'Engenharia', description: 'Como as capacidades são realizadas e o que permanece substituível.' }, { page: 'gallery', title: 'Galeria', description: 'O sistema como é distribuído, capturado a partir da ISO live.' }, { page: 'community', title: 'Comunidade', description: 'Converse em r/Amonite. Baixe versões oficiais no GitHub Releases.' }] },
    philosophy: { ...english.philosophy, eyebrow: 'Filosofia', heading: 'Linux deve continuar a ser Linux. Linux deve continuar a ser seu.', lead: 'O Amonite existe para que o primeiro dia numa máquina nova ofereça capacidades reais, sem reconstruir o sistema nem abdicar do seu controlo.', imageAlt: 'Fóssil de amonite mostrando as suas câmaras espirais e camadas de pedra', imageCaption: 'Um sistema útil começa com uma forma clara.', whyHeading: 'Por que o Amonite', principleBody: 'Cada pacote está presente porque oferece uma capacidade significativa, nunca porque outro pacote o recomendou.', frictionBody: 'Quem escolhe Linux normalmente sabe no que ele pode tornar-se. A fricção surge antes: montar um sistema coerente para o primeiro dia a partir de recomendações desconexas.', ownershipBody: 'O Amonite encurta esse dia. Não inventa um novo tipo de Linux. Oferece um conjunto deliberado de capacidades e deixa o controlo consigo.', differenceHeading: 'O que o torna diferente', differenceLead: 'A diferença não está na quantidade de pacotes. Está na regra que decide o que pode ser incluído.', principles: [{ title: 'Capacidade antes da acumulação', body: 'O software conquista o seu lugar ao permitir trabalho. A conveniência transitiva não basta.' }, { title: 'Substituibilidade', body: 'O que é útil no primeiro dia não deve tornar-se uma armadilha no trigésimo. Os padrões permanecem abertos à substituição.' }, { title: 'Controlo do utilizador', body: 'A pessoa ao teclado mantém o controlo. O sistema operacional serve esse controlo; não o substitui.' }], limitsHeading: 'O que o Amonite não afirma', limitsBody: 'Não afirma ser o mais rápido, o mais seguro ou um “sistema operacional de IA”. A IA local é uma capacidade entre outras: desktop, desenvolvimento, administração, redes e segurança.', limitsClosing: 'A tecnologia muda. A regra de seleção não deve mudar.', nextHeading: 'Do princípio às capacidades', nextBody: 'Veja como o trabalho do primeiro dia é organizado e como a implementação permanece subordinada aos resultados.', engineering: 'Engenharia', downloads: 'Downloads' },
    engineering: { ...english.engineering, eyebrow: 'Engenharia', heading: 'Primeiro as capacidades. Depois a implementação.', lead: 'Cada padrão responde a uma pergunta prática: o que deve ser possível no primeiro dia e o que deve continuar fácil de alterar depois?', protagonistHeading: 'O produto é o protagonista', protagonistBody: 'A mesma regra molda a composição: cada padrão tem uma função e continua substituível depois da instalação.', compositionBody: 'A composição base é pequena o suficiente para ser compreendida. Tudo abaixo pode ser substituído sem lutar contra o sistema.', standardEdition: 'Edição Standard', compositionCaption: 'Composição base da edição Standard', platform: 'Plataforma', desktop: 'Desktop', terminal: 'Terminal', installer: 'Instalador', defaultsNote: 'Padrões, não requisitos. Cada um continua substituível depois da instalação.', compositionEyebrow: 'Composição', compositionHeading: 'Os detalhes importam porque têm de funcionar juntos.', capabilityHeading: 'Como as capacidades ganham forma', capabilityLead: '{series} {stage} destina-se a avaliação real. Os resultados vêm primeiro; cada entrada mostra como a capacidade é realizada.', commandHeading: 'A linha de comandos como capacidade', commandBody: 'O desenvolvimento e a administração não devem esperar pela montagem de um toolchain.', commandClosing: 'A linha de comandos da edição Standard como é distribuída: fastfetch a indicar {name} {release} no Debian com XFCE e 817 pacotes. Captura não editada da ISO live.', installationHeading: 'Instalação sem cerimónia', installationBody: 'O Calamares trata da instalação e da configuração dos discos, incluindo esquemas cifrados quando necessários. O instalador pergunta o que precisa e nada mais.', installationClosing: 'Ver o sistema na galeria →', seriesHeading: '{series} · {stage}', seriesBody: 'A versão atual, os passos de verificação e as instruções de instalação estão em Downloads.', gallery: 'Galeria', downloads: 'Downloads', philosophy: 'Filosofia' },
    gallery: { ...english.gallery, eyebrow: 'Galeria', heading: 'O sistema como é distribuído', lead: 'Capturas do {name} Standard {release} a correr a partir da ISO live. As imagens de janelas estão recortadas à janela. Nada foi encenado ou retocado.', firstSessionEyebrow: 'Uma primeira sessão', firstSessionHeading: 'Um sistema que se explica', firstSessionBody: 'O manual de boas-vindas dá à sessão live um ponto de partida. O Your System mostra depois o que está realmente a correr.', everydayEyebrow: 'Trabalho quotidiano', everydayHeading: 'Nada entre si e o desktop', everydayBody: 'Quando o sistema está a funcionar, as ferramentas comuns são tranquilas e familiares: ficheiros, definições e o menu de aplicações.', beforeInstallHeading: 'Veja antes de instalar', beforeInstallBody: 'Estas capturas vêm da configuração QEMU/KVM validada e documentada com a versão. A forma mais rápida de ultrapassar as capturas é a própria ISO live.', downloads: 'Downloads' },
    community: { ...english.community, eyebrow: 'Comunidade', heading: 'A conversa pública é o canal de suporte', lead: 'Perguntas, comentários e conversa pertencem ao r/Amonite. As versões oficiais são publicadas através do GitHub Releases. O repositório fonte está temporariamente privado durante esta fase de desenvolvimento.', imageAlt: 'Local de trabalho tranquilo junto a uma janela com monitor, teclado e colunas', imageCaption: 'Um lugar para usar o sistema e trazer o que aprendeu de volta ao projeto.', intro: 'Comece com uma pergunta, uma instalação nova ou algo que não funciona como esperado. O importante é o que pode ser partilhado depois.', channels: [{ name: 'r/Amonite', role: 'Perguntas, comentários e conversa', detail: 'O r/Amonite é o principal espaço público para conversar sobre executar Nautilus Alpha: instalações, o que funciona e onde existe fricção.', linkLabel: 'Abrir r/Amonite' }, { name: 'GitHub Releases', role: 'Canal oficial de distribuição', detail: 'Versões oficiais, checksums, assinaturas e notas de versão são publicadas através do GitHub Releases.', linkLabel: 'Abrir GitHub Releases' }, { name: 'O próprio sistema', role: 'A fonte principal', detail: 'Instale Nautilus e use-o para avaliar o sistema diretamente.', linkLabel: 'Downloads' }] },
    downloads: { ...english.downloads, eyebrow: 'Downloads', heading: 'Versões atuais', lead: 'Meios de lançamento publicados e verificação para as edições do Amonite. O propósito de cada edição é descrito na página inicial.', whatsNewHeading: 'Novidades de {edition}', configurationHeading: 'Configuração validada', configurationBody: 'A configuração usada para validar a versão {stage} {series} atual de {edition}. Uma referência prática, não uma declaração de requisitos mínimos ou recomendados.', configurationCaption: 'Configuração de hardware validada', validationHeading: 'Resultados da validação', validationBody: 'Antes de publicar, testámos estes caminhos na configuração validada. Todos os itens abaixo passaram.', verificationHeading: 'Verificação', verificationBody: 'As versões oficiais são assinadas para que possa verificar que a imagem veio do Amonite e não foi alterada. Quando uma versão inclui um checksum SHA-256, oferece uma verificação adicional antes de escrever o meio de instalação.', verificationClosing: 'As versões podem ser verificadas de forma independente. Para os passos completos, leia o guia oficial de verificação.', installationHeading: 'Instalação', installationBody: 'Escreva a imagem verificada numa unidade USB, arranque a partir dela e siga o instalador gráfico. O Guia de Instalação explica como escrever o meio, iniciar o instalador e configurar o sistema.', beforeDiskHeading: 'Antes de comprometer um disco', beforeDiskBody: 'A sessão live corre inteiramente a partir da unidade USB, para que possa avaliar o sistema sem tocar nos discos instalados. O instalador só altera um disco quando confirma o particionamento.', gallery: 'Ver o instalador na galeria', historyBody: 'O histórico de versões é específico de cada edição.' },
    legal: { privacy: { eyebrow: 'Legal', title: 'Privacidade', description: 'O site do Amonite não tem contas, pagamentos ou formulários que recolham informação pessoal. O que o anfitrião pode processar e onde pertencem as perguntas sobre o projeto.', paragraphs: ['Este site não tem contas, pagamentos ou formulários que recolham informação pessoal.', 'O anfitrião pode processar dados normais de pedidos segundo as suas próprias práticas. Os links externos seguem as políticas desses serviços.', 'As perguntas sobre o projeto pertencem ao r/Amonite.'] }, terms: { eyebrow: 'Legal', title: 'Termos', description: 'Termos do site do Amonite: pode ler, ligar e partilhar o site sem garantia. O código do site tem licença MIT; os recursos de terceiros seguem ATTRIBUTION.md.', paragraphs: ['Pode ler, ligar e partilhar este site. É fornecido sem garantia.', 'O código do site tem licença MIT. Os recursos de terceiros seguem ATTRIBUTION.md.', 'O Amonite é criado e mantido por Manuel Gil.'] } },
  },
  it: {
    ...english,
    languageLabel: 'Lingua',
    settingsLabel: 'Opzioni',
    appearanceLabel: 'Aspetto',
    appearance: { system: 'Sistema', light: 'Chiaro', dark: 'Scuro' },
    skipToContent: 'Vai al contenuto',
    nav: { philosophy: 'Filosofia', engineering: 'Ingegneria', gallery: 'Galleria', community: 'Comunità', downloads: 'Download', releases: 'Versioni', download: 'Scarica', mobile: 'Navigazione mobile' },
    footer: { ...english.footer, project: 'Progetto', getStarted: 'Inizia', legal: 'Legale', independent: 'Una distribuzione GNU/Linux indipendente di Manuel Gil.', available: 'è disponibile.', privacy: 'Privacy', terms: 'Termini', releases: 'Versioni GitHub', community: 'r/Amonite', sponsors: 'Sponsorizzazione', screenshots: 'Schermate: immagini non modificate del sistema rilasciato · ATTRIBUTION.md' },
    common: { ...english.common, alpha: 'Alfa', available: 'Disponibile', experimental: 'Sperimentale', currentRelease: 'Versione attuale', openRelease: 'Apri versione', edition: 'Edizione', series: 'Serie', version: 'Versione', published: 'Pubblicata', releaseImage: 'Immagine della versione', directDownload: 'Download diretto', downloadIso: 'Scarica ISO', verificationGuide: 'Guida alla verifica', releaseNotes: 'Note della versione su GitHub', tag: 'Tag', externalLink: 'Link esterno' },
    meta: { ...english.meta, index: { title: 'Amonite', description: 'Un sistema operativo GNU/Linux progettato per il lavoro desktop, lo sviluppo, l’amministrazione e l’IA locale dopo l’installazione.' }, philosophy: { title: 'Filosofia', description: 'Perché esiste Amonite: ogni pacchetto si guadagna il posto offrendo una capacità, senza ridefinire Linux.' }, engineering: { title: 'Ingegneria', description: 'Come Amonite realizza le capacità desktop, sviluppo, amministrazione, sicurezza e IA locale.' }, gallery: { title: 'Galleria', description: 'Amonite così come viene distribuito: primo avvio, terminale, manuale di benvenuto, installer e strumenti quotidiani.' }, community: { title: 'Comunità', description: 'Parla di Amonite su r/Amonite. Scarica le versioni ufficiali da GitHub Releases.' }, downloads: { title: 'Download', description: 'Scarica e verifica le edizioni di Amonite.' }, privacy: { title: 'Privacy', description: 'Il sito di Amonite non ha account, pagamenti o moduli che raccolgono informazioni personali.' }, terms: { title: 'Termini', description: 'Termini del sito Amonite: puoi leggerlo, collegarlo e condividerlo senza garanzie.' } },
    product: { ...english.product },
    releases: { ...english.releases },
    home: { ...english.home, eyebrow: 'GNU/Linux · {editions}', available: '{editions} disponibili', downloadVerify: 'Scarica e verifica', whatItIs: 'Cos’è', whatItIsHeading: 'Un sistema operativo definito da ciò che rende possibile', whatItIsBody: 'Amonite è un sistema operativo GNU/Linux che puoi installare oggi. Dopo l’installazione, lavoro desktop, sviluppo, amministrazione, rete e IA locale sono già disponibili.', whatItIsRule: 'Amonite parte da una regola semplice: il software si guadagna il posto rendendo possibile il lavoro.', editionsEyebrow: 'Edizioni ufficiali', editionsHeading: 'Un prodotto. Più edizioni.', editionsIntro: 'Ogni edizione ha il proprio ciclo di versioni.', editionsSeries: 'Le edizioni pubbliche appartengono all’attuale serie di versioni {series}.', capabilitiesEyebrow: 'Capacità', capabilitiesHeading: 'Ciò che diventa possibile dopo l’installazione', capabilitiesIntro: 'Il sistema è definito dal lavoro per cui è pronto dal primo giorno. Ognuna di queste {count} capacità ha una ragione per essere qui.', localAiEyebrow: 'Intelligenza artificiale locale', localAiHeading: 'Inferenza sulla tua macchina', localAiIntro: 'L’IA locale è una capacità deliberata della piattaforma. Non è un’etichetta per l’intero sistema operativo.', localAiOwnership: 'Modelli e prompt restano sul tuo hardware. Nulla dipende da un servizio esterno.', localAiList: ['Eseguire localmente modelli GGUF compatibili', 'Eseguire inferenza completamente offline', 'Tenere modelli e prompt sotto il tuo controllo', 'Usare un’API compatibile con OpenAI per applicazioni locali', 'Creare flussi di lavoro senza servizi esterni'], continueEyebrow: 'Continua', continueHeading: 'Dove andare ora', continueItems: [{ page: 'philosophy', title: 'Filosofia', description: 'Perché ogni capacità deve giustificare la propria presenza.' }, { page: 'engineering', title: 'Ingegneria', description: 'Come vengono realizzate le capacità e cosa resta sostituibile.' }, { page: 'gallery', title: 'Galleria', description: 'Il sistema così come viene distribuito, catturato dalla ISO live.' }, { page: 'community', title: 'Comunità', description: 'Partecipa su r/Amonite. Scarica le versioni ufficiali da GitHub Releases.' }] },
    philosophy: { ...english.philosophy, eyebrow: 'Filosofia', heading: 'Linux deve rimanere Linux. Linux deve rimanere tuo.', lead: 'Amonite esiste perché il primo giorno su una macchina nuova offra capacità reali, senza ricostruire il sistema né rinunciare al suo controllo.', imageAlt: 'Fossile di ammonite con camere a spirale e strati di pietra', imageCaption: 'Un sistema utile inizia da una forma chiara.', whyHeading: 'Perché Amonite', principleBody: 'Ogni pacchetto è presente perché offre una capacità significativa, mai perché un altro pacchetto lo abbia consigliato.', frictionBody: 'Chi sceglie Linux di solito sa cosa può diventare. L’attrito arriva prima: assemblare un sistema coerente dal primo giorno a partire da raccomandazioni scollegate.', ownershipBody: 'Amonite accorcia quel giorno. Non inventa un nuovo tipo di Linux. Offre un insieme deliberato di capacità e lascia a te il controllo.', differenceHeading: 'Cosa lo rende diverso', differenceLead: 'La differenza non è il numero di pacchetti. È la regola per ciò che può essere distribuito.', principles: [{ title: 'Capacità prima dell’accumulo', body: 'Il software si guadagna il posto rendendo possibile il lavoro. La comodità transitiva non basta.' }, { title: 'Sostituibilità', body: 'Ciò che è utile il primo giorno non deve diventare una trappola il giorno trenta. I valori predefiniti restano aperti alla sostituzione.' }, { title: 'Controllo dell’utente', body: 'La persona alla tastiera mantiene il controllo. Il sistema operativo serve quel controllo; non lo sostituisce.' }], limitsHeading: 'Cosa Amonite non sostiene', limitsBody: 'Non sostiene di essere il più veloce, il più sicuro o un “sistema operativo IA”. L’IA locale è una capacità tra le altre: desktop, sviluppo, amministrazione, rete e sicurezza.', limitsClosing: 'La tecnologia cambia. La regola di selezione non dovrebbe.', nextHeading: 'Dal principio alle capacità', nextBody: 'Scopri come viene organizzato il lavoro dal primo giorno e come l’implementazione resta subordinata ai risultati.', engineering: 'Ingegneria', downloads: 'Download' },
    engineering: { ...english.engineering, eyebrow: 'Ingegneria', heading: 'Prima le capacità. Poi l’implementazione.', lead: 'Ogni impostazione predefinita risponde a una domanda pratica: cosa deve essere possibile il primo giorno e cosa deve restare facile da cambiare in seguito?', protagonistHeading: 'Il prodotto è il protagonista', protagonistBody: 'La stessa regola dà forma alla composizione: ogni impostazione ha un compito e resta sostituibile dopo l’installazione.', compositionBody: 'La composizione di base è abbastanza piccola da essere compresa. Tutto ciò che segue è sostituibile senza combattere il sistema.', standardEdition: 'Edizione Standard', compositionCaption: 'Composizione base dell’edizione Standard', platform: 'Piattaforma', desktop: 'Desktop', terminal: 'Terminale', installer: 'Installer', defaultsNote: 'Impostazioni predefinite, non requisiti. Ognuna resta sostituibile dopo l’installazione.', compositionEyebrow: 'Composizione', compositionHeading: 'I dettagli contano perché devono funzionare insieme.', capabilityHeading: 'Come prendono forma le capacità', capabilityLead: '{series} {stage} è pensato per una valutazione reale. Prima vengono i risultati; ogni voce mostra come viene realizzata la capacità.', commandHeading: 'La riga di comando come capacità', commandBody: 'Lo sviluppo e l’amministrazione non dovrebbero aspettare la costruzione di un toolchain.', commandClosing: 'La riga di comando dell’edizione Standard così come viene distribuita: fastfetch riporta {name} {release} su Debian con XFCE e 817 pacchetti. Cattura non modificata dalla ISO live.', installationHeading: 'Installazione senza cerimonie', installationBody: 'Calamares gestisce installazione e configurazione dei dischi, compresi gli schemi cifrati quando servono. L’installer chiede ciò che serve e nulla di più.', installationClosing: 'Vedi il sistema nella galleria →', seriesHeading: '{series} · {stage}', seriesBody: 'La versione attuale, i passaggi di verifica e le istruzioni di installazione sono nei Download.', gallery: 'Galleria', downloads: 'Download', philosophy: 'Filosofia' },
    gallery: { ...english.gallery, eyebrow: 'Galleria', heading: 'Il sistema così come viene distribuito', lead: 'Catture di {name} Standard {release} in esecuzione dalla ISO live. Le immagini delle finestre sono ritagliate sulla finestra. Nulla è allestito o ritoccato.', firstSessionEyebrow: 'Una prima sessione', firstSessionHeading: 'Un sistema che si spiega da solo', firstSessionBody: 'Il manuale di benvenuto offre alla sessione live un punto di partenza. Your System mostra poi cosa è realmente in esecuzione.', everydayEyebrow: 'Lavoro quotidiano', everydayHeading: 'Niente tra te e il desktop', everydayBody: 'Quando il sistema è in funzione, gli strumenti ordinari sono silenziosi e familiari: file, impostazioni e menu applicazioni.', beforeInstallHeading: 'Guardalo prima di installare', beforeInstallBody: 'Queste catture provengono dalla configurazione QEMU/KVM validata e documentata con la versione. Il modo più rapido per andare oltre le immagini è la ISO live stessa.', downloads: 'Download' },
    community: { ...english.community, eyebrow: 'Comunità', heading: 'La discussione pubblica è il canale di supporto', lead: 'Domande, feedback e discussioni appartengono a r/Amonite. Le versioni ufficiali sono pubblicate tramite GitHub Releases. Il repository sorgente è temporaneamente privato durante questa fase di sviluppo.', imageAlt: 'Postazione di lavoro tranquilla accanto a una finestra con monitor, tastiera e altoparlanti', imageCaption: 'Un luogo per usare il sistema e riportare al progetto ciò che impari.', intro: 'Inizia con una domanda, una nuova installazione o qualcosa che non funziona come previsto. La parte utile è ciò che si può condividere dopo.', channels: [{ name: 'r/Amonite', role: 'Domande, feedback e discussioni', detail: 'r/Amonite è il principale spazio pubblico per parlare di Nautilus Alpha: installazioni, cosa funziona e dove resta attrito.', linkLabel: 'Apri r/Amonite' }, { name: 'GitHub Releases', role: 'Canale ufficiale di distribuzione', detail: 'Versioni ufficiali, checksum, firme e note di rilascio sono pubblicati tramite GitHub Releases.', linkLabel: 'Apri GitHub Releases' }, { name: 'Il sistema stesso', role: 'La fonte principale', detail: 'Installa Nautilus e usalo per valutare direttamente il sistema.', linkLabel: 'Download' }] },
    downloads: { ...english.downloads, eyebrow: 'Download', heading: 'Versioni attuali', lead: 'Supporti di rilascio pubblicati e verifica per le edizioni Amonite. Lo scopo di ogni edizione è descritto nella home page.', whatsNewHeading: 'Novità di {edition}', configurationHeading: 'Configurazione validata', configurationBody: 'La configurazione usata per validare la versione {stage} {series} attuale di {edition}. Un riferimento pratico, non una dichiarazione dei requisiti minimi o consigliati.', configurationCaption: 'Configurazione hardware validata', validationHeading: 'Risultati della validazione', validationBody: 'Prima della pubblicazione abbiamo provato questi percorsi sulla configurazione validata. Ogni elemento seguente è passato.', verificationHeading: 'Verifica', verificationBody: 'Le versioni ufficiali sono firmate per permetterti di verificare che l’immagine provenga da Amonite e non sia stata modificata. Quando una versione elenca un checksum SHA-256, fornisce un controllo aggiuntivo prima di scrivere il supporto di installazione.', verificationClosing: 'Le versioni possono essere controllate in modo indipendente. Per i passaggi completi, leggi la guida ufficiale alla verifica.', installationHeading: 'Installazione', installationBody: 'Scrivi l’immagine verificata su un’unità USB, avvia da essa e segui l’installer grafico. La guida all’installazione spiega come scrivere il supporto, avviare l’installer e configurare il sistema.', beforeDiskHeading: 'Prima di impegnare un disco', beforeDiskBody: 'La sessione live funziona interamente dall’unità USB, così puoi valutare il sistema senza toccare i dischi installati. L’installer modifica un disco solo quando confermi il partizionamento.', gallery: 'Vedi l’installer nella galleria', historyBody: 'La cronologia delle versioni è specifica per edizione.' },
    legal: { privacy: { eyebrow: 'Legale', title: 'Privacy', description: 'Il sito di Amonite non ha account, pagamenti o moduli che raccolgono informazioni personali. Cosa può elaborare il gestore e dove rivolgere le domande sul progetto.', paragraphs: ['Questo sito non ha account, pagamenti o moduli che raccolgono informazioni personali.', 'Il gestore può elaborare i normali dati delle richieste secondo le proprie pratiche. I link esterni seguono le policy dei rispettivi servizi.', 'Le domande sul progetto appartengono a r/Amonite.'] }, terms: { eyebrow: 'Legale', title: 'Termini', description: 'Termini del sito Amonite: puoi leggerlo, collegarlo e condividerlo senza garanzie. Il codice del sito è MIT; le risorse di terze parti seguono ATTRIBUTION.md.', paragraphs: ['Puoi leggere, collegare e condividere questo sito. È fornito senza garanzie.', 'Il codice del sito è distribuito con licenza MIT. Le risorse di terze parti seguono ATTRIBUTION.md.', 'Amonite è creato e mantenuto da Manuel Gil.'] },
  },
  },
  fr: { ...english, languageLabel: 'Langue', settingsLabel: 'Options', appearanceLabel: 'Apparence', appearance: { system: 'Système', light: 'Clair', dark: 'Sombre' }, skipToContent: 'Aller au contenu', nav: { philosophy: 'Philosophie', engineering: 'Ingénierie', gallery: 'Galerie', community: 'Communauté', downloads: 'Téléchargements', releases: 'Versions', download: 'Télécharger', mobile: 'Navigation mobile' }, footer: { ...english.footer, project: 'Projet', getStarted: 'Commencer', legal: 'Mentions légales', independent: 'Une distribution GNU/Linux indépendante de Manuel Gil.', available: 'est disponible.', privacy: 'Confidentialité', terms: 'Conditions', releases: 'Versions GitHub', community: 'r/Amonite', sponsors: 'Soutenir le projet', screenshots: 'Captures : images non retouchées du système publié · ATTRIBUTION.md' }, common: { ...english.common, alpha: 'Alpha', available: 'Disponible', experimental: 'Expérimental', currentRelease: 'Version actuelle', openRelease: 'Ouvrir la version', edition: 'Édition', series: 'Série', version: 'Version', published: 'Publiée', releaseImage: 'Image de la version', directDownload: 'Téléchargement direct', downloadIso: 'Télécharger l’ISO', verificationGuide: 'Guide de vérification', releaseNotes: 'Notes de version sur GitHub', tag: 'Étiquette', externalLink: 'Lien externe' }, meta: { ...english.meta, index: { title: 'Amonite', description: 'Un système d’exploitation GNU/Linux conçu pour le travail de bureau, le développement, l’administration et l’IA locale après installation.' }, philosophy: { title: 'Philosophie', description: 'Pourquoi Amonite existe : chaque paquet mérite sa place en apportant une capacité, sans redéfinir Linux.' }, engineering: { title: 'Ingénierie', description: 'Comment Amonite réalise les capacités de bureau, de développement, d’administration, de sécurité et d’IA locale.' }, gallery: { title: 'Galerie', description: 'Amonite tel qu’il est livré : premier démarrage, terminal, manuel d’accueil, installateur et outils du quotidien.' }, community: { title: 'Communauté', description: 'Parlez d’Amonite sur r/Amonite. Téléchargez les versions officielles sur GitHub Releases.' }, downloads: { title: 'Téléchargements', description: 'Téléchargez et vérifiez les éditions d’Amonite.' }, privacy: { title: 'Confidentialité', description: 'Le site Amonite ne possède ni comptes, ni paiements, ni formulaires recueillant des informations personnelles.' }, terms: { title: 'Conditions', description: 'Conditions du site Amonite : vous pouvez le lire, le relier et le partager sans garantie.' } }, product: { ...english.product }, releases: { ...english.releases }, home: { ...english.home, eyebrow: 'GNU/Linux · {editions}', available: '{editions} disponibles', downloadVerify: 'Télécharger et vérifier', whatItIs: 'Ce que c’est', whatItIsHeading: 'Un système d’exploitation défini par ce qu’il rend possible', whatItIsBody: 'Amonite est un système d’exploitation GNU/Linux que vous pouvez installer aujourd’hui. Après l’installation, le travail de bureau, le développement, l’administration, le réseau et l’IA locale sont déjà disponibles.', whatItIsRule: 'Amonite part d’une règle simple : un logiciel mérite sa place lorsqu’il permet de travailler.', editionsEyebrow: 'Éditions officielles', editionsHeading: 'Un produit. Plusieurs éditions.', editionsIntro: 'Chaque édition possède son propre cycle de versions.', editionsSeries: 'Les éditions publiques appartiennent à la série de versions {series} actuelle.', capabilitiesEyebrow: 'Capacités', capabilitiesHeading: 'Ce qui devient possible après l’installation', capabilitiesIntro: 'Le système est défini par le travail pour lequel il est prêt dès le premier jour. Chacune de ces {count} capacités a une raison d’être.', localAiEyebrow: 'Intelligence artificielle locale', localAiHeading: 'Inférence sur votre machine', localAiIntro: 'L’IA locale est une capacité délibérée de la plateforme. Ce n’est pas une étiquette pour tout le système d’exploitation.', localAiOwnership: 'Les modèles et les prompts restent sur votre matériel. Rien ne dépend d’un service externe.', localAiList: ['Exécuter localement des modèles GGUF compatibles', 'Exécuter l’inférence entièrement hors ligne', 'Garder les modèles et les prompts sous votre contrôle', 'Utiliser une API compatible OpenAI pour les applications locales', 'Créer des flux de travail sans services externes'], continueEyebrow: 'Continuer', continueHeading: 'Où aller ensuite', continueItems: [{ page: 'philosophy', title: 'Philosophie', description: 'Pourquoi chaque capacité doit justifier sa présence.' }, { page: 'engineering', title: 'Ingénierie', description: 'Comment les capacités sont réalisées et ce qui reste remplaçable.' }, { page: 'gallery', title: 'Galerie', description: 'Le système tel qu’il est livré, capturé depuis l’ISO live.' }, { page: 'community', title: 'Communauté', description: 'Discutez sur r/Amonite. Téléchargez les versions officielles sur GitHub Releases.' }] }, philosophy: { ...english.philosophy, eyebrow: 'Philosophie', heading: 'Linux doit rester Linux. Linux doit rester le vôtre.', lead: 'Amonite existe pour que le premier jour sur une nouvelle machine offre de vraies capacités, sans reconstruire le système ni renoncer à son contrôle.', imageAlt: 'Fossile d’ammonite montrant ses chambres en spirale et ses couches de pierre', imageCaption: 'Un système utile commence par une forme claire.', whyHeading: 'Pourquoi Amonite', principleBody: 'Chaque paquet est présent parce qu’il apporte une capacité significative, jamais parce qu’un autre paquet l’a recommandé.', frictionBody: 'Les personnes qui choisissent Linux savent généralement ce qu’il peut devenir. La friction arrive plus tôt : assembler un système cohérent dès le premier jour à partir de recommandations disparates.', ownershipBody: 'Amonite raccourcit ce jour. Il n’invente pas une nouvelle forme de Linux. Il propose un ensemble délibéré de capacités et vous en laisse la maîtrise.', differenceHeading: 'Ce qui le rend différent', differenceLead: 'La différence n’est pas le nombre de paquets. C’est la règle qui décide de ce qui peut être livré.', principles: [{ title: 'La capacité plutôt que l’accumulation', body: 'Un logiciel mérite sa place lorsqu’il permet de travailler. La commodité transitive ne suffit pas.' }, { title: 'Remplaçabilité', body: 'Ce qui est utile le premier jour ne doit pas devenir un piège le trentième. Les choix par défaut restent remplaçables.' }, { title: 'Maîtrise par l’utilisateur', body: 'La personne au clavier garde le contrôle. Le système d’exploitation sert cette maîtrise ; il ne la remplace pas.' }], limitsHeading: 'Ce qu’Amonite ne prétend pas', limitsBody: 'Il ne prétend pas être le plus rapide, le plus sûr ou un « système d’exploitation IA ». L’IA locale est une capacité parmi d’autres : bureau, développement, administration, réseau et sécurité.', limitsClosing: 'La technologie change. La règle de sélection ne devrait pas.', nextHeading: 'Du principe aux capacités', nextBody: 'Découvrez comment le travail du premier jour est organisé et comment l’implémentation reste subordonnée aux résultats.', engineering: 'Ingénierie', downloads: 'Téléchargements' }, engineering: { ...english.engineering, eyebrow: 'Ingénierie', heading: 'Les capacités d’abord. L’implémentation ensuite.', lead: 'Chaque choix par défaut répond à une question pratique : que doit-il être possible de faire dès le premier jour, et que doit-il rester facile à modifier ensuite ?', protagonistHeading: 'Le produit est le protagoniste', protagonistBody: 'La même règle façonne la composition : chaque choix par défaut a une fonction et reste remplaçable après l’installation.', compositionBody: 'La composition de base est assez réduite pour être comprise. Tout ce qui suit peut être remplacé sans lutter contre le système.', standardEdition: 'Édition Standard', compositionCaption: 'Composition de base de l’édition Standard', platform: 'Plateforme', desktop: 'Bureau', terminal: 'Terminal', installer: 'Installateur', defaultsNote: 'Choix par défaut, pas des exigences. Chacun reste remplaçable après l’installation.', compositionEyebrow: 'Composition', compositionHeading: 'Les détails comptent parce qu’ils doivent fonctionner ensemble.', capabilityHeading: 'Comment les capacités prennent forme', capabilityLead: '{series} {stage} est destiné à une véritable évaluation. Les résultats d’abord ; chaque entrée montre comment la capacité est réalisée.', commandHeading: 'La ligne de commande comme capacité', commandBody: 'Le développement et l’administration ne devraient pas attendre l’assemblage d’une toolchain.', commandClosing: 'La ligne de commande de l’édition Standard telle qu’elle est livrée : fastfetch indique {name} {release} sur Debian avec XFCE et 817 paquets. Capture non retouchée depuis l’ISO live.', installationHeading: 'Installer sans cérémonie', installationBody: 'Calamares gère l’installation et la configuration des disques, y compris les schémas chiffrés lorsque nécessaire. L’installateur demande ce dont il a besoin, et rien de plus.', installationClosing: 'Voir le système dans la galerie →', seriesHeading: '{series} · {stage}', seriesBody: 'La version actuelle, les étapes de vérification et le guide d’installation sont dans Téléchargements.', gallery: 'Galerie', downloads: 'Téléchargements', philosophy: 'Philosophie' }, gallery: { ...english.gallery, eyebrow: 'Galerie', heading: 'Le système tel qu’il est livré', lead: 'Captures de {name} Standard {release} exécuté depuis l’ISO live. Les images de fenêtres sont recadrées à la fenêtre. Rien n’est mis en scène ni retouché.', firstSessionEyebrow: 'Une première session', firstSessionHeading: 'Un système qui s’explique', firstSessionBody: 'Le manuel d’accueil donne un point de départ à la session live. Your System montre ensuite ce qui est réellement en cours d’exécution.', everydayEyebrow: 'Travail quotidien', everydayHeading: 'Rien entre vous et le bureau', everydayBody: 'Une fois le système lancé, les outils ordinaires sont calmes et familiers : fichiers, réglages et menu des applications.', beforeInstallHeading: 'Voir avant d’installer', beforeInstallBody: 'Ces captures proviennent de la configuration QEMU/KVM validée et documentée avec la version. Le meilleur moyen d’aller au-delà des captures est l’ISO live elle-même.', downloads: 'Téléchargements' }, community: { ...english.community, eyebrow: 'Communauté', heading: 'La discussion publique est le canal de support', lead: 'Les questions, retours et discussions appartiennent à r/Amonite. Les versions officielles sont publiées via GitHub Releases. Le dépôt source est temporairement privé pendant cette phase de développement.', imageAlt: 'Poste de travail calme près d’une fenêtre avec écran, clavier et haut-parleurs', imageCaption: 'Un endroit pour utiliser le système, puis rapporter ce que vous avez appris au projet.', intro: 'Commencez par une question, une nouvelle installation ou quelque chose qui ne fonctionne pas comme prévu. L’essentiel est ce qui peut être partagé ensuite.', channels: [{ name: 'r/Amonite', role: 'Questions, retours et discussions', detail: 'r/Amonite est le principal espace public pour parler de Nautilus Alpha : installations, fonctionnement et points de friction.', linkLabel: 'Ouvrir r/Amonite' }, { name: 'GitHub Releases', role: 'Canal officiel de distribution', detail: 'Les versions officielles, checksums, signatures et notes de version sont publiés via GitHub Releases.', linkLabel: 'Ouvrir GitHub Releases' }, { name: 'Le système lui-même', role: 'La source principale', detail: 'Installez Nautilus et utilisez-le pour évaluer directement le système.', linkLabel: 'Téléchargements' }] }, downloads: { ...english.downloads, eyebrow: 'Téléchargements', heading: 'Versions actuelles', lead: 'Supports publiés et vérification pour les éditions Amonite. Le rôle de chaque édition est décrit sur la page d’accueil.', whatsNewHeading: 'Nouveautés de {edition}', configurationHeading: 'Configuration validée', configurationBody: 'Configuration utilisée pour valider la version {stage} {series} actuelle de {edition}. Une référence pratique, pas une déclaration de besoins minimaux ou recommandés.', configurationCaption: 'Configuration matérielle validée', validationHeading: 'Résultats de validation', validationBody: 'Avant publication, nous avons testé ces parcours sur la configuration validée. Tous les éléments ci-dessous ont réussi.', verificationHeading: 'Vérification', verificationBody: 'Les versions officielles sont signées pour vérifier que l’image vient d’Amonite et n’a pas été modifiée. Lorsqu’un checksum SHA-256 accompagne une version, il offre un contrôle supplémentaire avant d’écrire le support d’installation.', verificationClosing: 'Les versions peuvent être vérifiées indépendamment. Pour toutes les étapes, consultez le guide officiel de vérification.', installationHeading: 'Installation', installationBody: 'Écrivez l’image vérifiée sur une clé USB, démarrez-la et suivez l’installateur graphique. Le guide d’installation explique comment écrire le support, lancer l’installateur et configurer le système.', beforeDiskHeading: 'Avant de modifier un disque', beforeDiskBody: 'La session live fonctionne entièrement depuis la clé USB afin que vous puissiez évaluer le système sans toucher aux disques installés. L’installateur ne modifie un disque qu’après confirmation du partitionnement.', gallery: 'Voir l’installateur dans la galerie', historyBody: 'L’historique des versions est propre à chaque édition.' }, legal: { privacy: { eyebrow: 'Mentions légales', title: 'Confidentialité', description: 'Le site Amonite ne possède ni comptes, ni paiements, ni formulaires recueillant des informations personnelles. Ce que l’hébergeur peut traiter et où poser les questions sur le projet.', paragraphs: ['Ce site ne possède ni comptes, ni paiements, ni formulaires recueillant des informations personnelles.', 'L’hébergeur peut traiter les données ordinaires des requêtes selon ses propres pratiques. Les liens externes suivent les politiques de leurs services.', 'Les questions sur le projet appartiennent à r/Amonite.'] }, terms: { eyebrow: 'Mentions légales', title: 'Conditions', description: 'Conditions du site Amonite : vous pouvez le lire, le relier et le partager sans garantie. Le code du site est sous licence MIT ; les ressources tierces suivent ATTRIBUTION.md.', paragraphs: ['Vous pouvez lire, relier et partager ce site. Il est fourni sans garantie.', 'Le code du site est sous licence MIT. Les ressources tierces suivent ATTRIBUTION.md.', 'Amonite est créé et maintenu par Manuel Gil.'] } } },
  de: { ...english, languageLabel: 'Sprache', settingsLabel: 'Optionen', appearanceLabel: 'Darstellung', appearance: { system: 'System', light: 'Hell', dark: 'Dunkel' }, skipToContent: 'Zum Inhalt springen', nav: { philosophy: 'Philosophie', engineering: 'Technik', gallery: 'Galerie', community: 'Community', downloads: 'Downloads', releases: 'Releases', download: 'Herunterladen', mobile: 'Mobile Navigation' }, footer: { ...english.footer, project: 'Projekt', getStarted: 'Loslegen', legal: 'Rechtliches', independent: 'Eine unabhängige GNU/Linux-Distribution von Manuel Gil.', available: 'ist jetzt verfügbar.', privacy: 'Datenschutz', terms: 'Bedingungen', releases: 'GitHub Releases', community: 'r/Amonite', sponsors: 'Unterstützen', screenshots: 'Screenshots: unbearbeitete Aufnahmen des veröffentlichten Systems · ATTRIBUTION.md' }, common: { ...english.common, alpha: 'Alpha', available: 'Verfügbar', experimental: 'Experimentell', currentRelease: 'Aktuelle Version', openRelease: 'Version öffnen', edition: 'Edition', series: 'Serie', version: 'Version', published: 'Veröffentlicht', releaseImage: 'Versionsabbild', directDownload: 'Direkter Download', downloadIso: 'ISO herunterladen', verificationGuide: 'Verifikationsanleitung', releaseNotes: 'Versionshinweise auf GitHub', tag: 'Tag', externalLink: 'Externer Link' }, meta: { ...english.meta, index: { title: 'Amonite', description: 'Ein GNU/Linux-Betriebssystem für Desktop-Arbeit, Entwicklung, Administration und lokale KI nach der Installation.' }, philosophy: { title: 'Philosophie', description: 'Warum Amonite existiert: Jedes Paket verdient seinen Platz durch eine Fähigkeit, ohne Linux neu zu definieren.' }, engineering: { title: 'Technik', description: 'Wie Amonite Desktop-, Entwicklungs-, Administrations-, Sicherheits- und lokale KI-Fähigkeiten umsetzt.' }, gallery: { title: 'Galerie', description: 'Amonite wie ausgeliefert: erster Start, Terminal, Willkommenshandbuch, Installer und alltägliche Werkzeuge.' }, community: { title: 'Community', description: 'Über Amonite auf r/Amonite sprechen. Offizielle Versionen über GitHub Releases herunterladen.' }, downloads: { title: 'Downloads', description: 'Amonite-Editionen herunterladen und verifizieren.' }, privacy: { title: 'Datenschutz', description: 'Die Amonite-Website hat keine Konten, Zahlungen oder Formulare, die personenbezogene Daten sammeln.' }, terms: { title: 'Bedingungen', description: 'Bedingungen für die Amonite-Website: Lesen, verlinken und teilen ohne Gewähr.' } }, product: { ...english.product }, releases: { ...english.releases }, home: { ...english.home, eyebrow: 'GNU/Linux · {editions}', available: '{editions} verfügbar', downloadVerify: 'Herunterladen und verifizieren', whatItIs: 'Was es ist', whatItIsHeading: 'Ein Betriebssystem, definiert durch das, was es ermöglicht', whatItIsBody: 'Amonite ist ein GNU/Linux-Betriebssystem, das du heute installieren kannst. Nach der Installation stehen Desktop-Arbeit, Entwicklung, Administration, Netzwerk und lokale KI bereit.', whatItIsRule: 'Amonite beginnt mit einer einfachen Regel: Software verdient ihren Platz, indem sie Arbeit ermöglicht.', editionsEyebrow: 'Offizielle Editionen', editionsHeading: 'Ein Produkt. Mehrere Editionen.', editionsIntro: 'Jede Edition hat ihren eigenen Versionszyklus.', editionsSeries: 'Öffentliche Editionen gehören zur aktuellen {series}-Versionsserie.', capabilitiesEyebrow: 'Fähigkeiten', capabilitiesHeading: 'Was nach der Installation möglich wird', capabilitiesIntro: 'Das System wird durch die Arbeit definiert, für die es am ersten Tag bereit ist. Jede dieser {count} Fähigkeiten hat einen Grund, hier zu sein.', localAiEyebrow: 'Lokale künstliche Intelligenz', localAiHeading: 'Inference auf deiner Maschine', localAiIntro: 'Lokale KI ist eine bewusste Fähigkeit der Plattform. Sie ist kein Etikett für das gesamte Betriebssystem.', localAiOwnership: 'Modelle und Prompts bleiben auf deiner Hardware. Nichts hängt von einem externen Dienst ab.', localAiList: ['Kompatible GGUF-Modelle lokal ausführen', 'Inference vollständig offline ausführen', 'Modelle und Prompts unter deiner Kontrolle behalten', 'Eine OpenAI-kompatible API für lokale Anwendungen nutzen', 'Arbeitsabläufe ohne externe Dienste erstellen'], continueEyebrow: 'Weiter', continueHeading: 'Wohin als Nächstes', continueItems: [{ page: 'philosophy', title: 'Philosophie', description: 'Warum jede Fähigkeit ihre Anwesenheit rechtfertigen muss.' }, { page: 'engineering', title: 'Technik', description: 'Wie Fähigkeiten umgesetzt werden und was austauschbar bleibt.' }, { page: 'gallery', title: 'Galerie', description: 'Das ausgelieferte System, aufgenommen von der Live-ISO.' }, { page: 'community', title: 'Community', description: 'Auf r/Amonite diskutieren. Offizielle Versionen von GitHub Releases laden.' }] }, philosophy: { ...english.philosophy, eyebrow: 'Philosophie', heading: 'Linux soll Linux bleiben. Linux soll deins bleiben.', lead: 'Amonite gibt dir am ersten Tag auf einer neuen Maschine echte Fähigkeiten, ohne das System neu aufzubauen oder die Kontrolle abzugeben.', imageAlt: 'Ammonitenfossil mit spiralförmigen Kammern und geschichteten Steinen', imageCaption: 'Ein nützliches System beginnt mit einer klaren Form.', whyHeading: 'Warum Amonite', principleBody: 'Jedes Paket ist vorhanden, weil es eine sinnvolle Fähigkeit liefert, nie nur weil ein anderes Paket es empfohlen hat.', frictionBody: 'Wer Linux wählt, weiß meist, was daraus werden kann. Die Reibung beginnt früher: ein stimmiges System für den ersten Tag aus unverbundenen Empfehlungen zusammenzustellen.', ownershipBody: 'Amonite verkürzt diesen Tag. Es erfindet keine neue Art von Linux. Es liefert bewusst gewählte Fähigkeiten und lässt die Kontrolle bei dir.', differenceHeading: 'Was es anders macht', differenceLead: 'Der Unterschied ist keine Paketanzahl. Es ist eine Regel dafür, was ausgeliefert werden darf.', principles: [{ title: 'Fähigkeit statt Anhäufung', body: 'Software verdient ihren Platz, indem sie Arbeit ermöglicht. Transitive Bequemlichkeit reicht nicht.' }, { title: 'Austauschbarkeit', body: 'Was am ersten Tag nützlich ist, darf am dreißigsten nicht zur Falle werden. Voreinstellungen bleiben austauschbar.' }, { title: 'Eigentum des Nutzers', body: 'Die Person an der Tastatur behält die Kontrolle. Das Betriebssystem dient dieser Kontrolle; es ersetzt sie nicht.' }], limitsHeading: 'Was Amonite nicht behauptet', limitsBody: 'Es behauptet nicht, das schnellste, sicherste oder ein „KI-Betriebssystem“ zu sein. Lokale KI ist eine Fähigkeit unter anderen: Desktop, Entwicklung, Administration, Netzwerk und Sicherheit.', limitsClosing: 'Technologie ändert sich. Die Auswahlregel sollte es nicht.', nextHeading: 'Vom Prinzip zu den Fähigkeiten', nextBody: 'Sieh, wie Arbeit am ersten Tag organisiert wird und wie die Umsetzung den Ergebnissen untergeordnet bleibt.', engineering: 'Technik', downloads: 'Downloads' }, engineering: { ...english.engineering, eyebrow: 'Technik', heading: 'Fähigkeiten zuerst. Umsetzung danach.', lead: 'Jede Voreinstellung beantwortet eine praktische Frage: Was muss am ersten Tag möglich sein und was muss später leicht zu ändern bleiben?', protagonistHeading: 'Das Produkt ist der Protagonist', protagonistBody: 'Dieselbe Regel formt die Zusammensetzung: Jede Voreinstellung hat eine Aufgabe und bleibt nach der Installation austauschbar.', compositionBody: 'Die Grundzusammensetzung ist klein genug, um sie zu verstehen. Alles Folgende lässt sich ersetzen, ohne gegen das System zu kämpfen.', standardEdition: 'Standard-Edition', compositionCaption: 'Grundzusammensetzung der Standard-Edition', platform: 'Plattform', desktop: 'Desktop', terminal: 'Terminal', installer: 'Installer', defaultsNote: 'Voreinstellungen, keine Anforderungen. Jede bleibt nach der Installation austauschbar.', compositionEyebrow: 'Zusammensetzung', compositionHeading: 'Die Details zählen, weil sie zusammen funktionieren müssen.', capabilityHeading: 'Wie die Fähigkeiten Gestalt annehmen', capabilityLead: '{series} {stage} ist für eine echte Bewertung gedacht. Ergebnisse zuerst; jeder Eintrag zeigt, wie die Fähigkeit umgesetzt wird.', commandHeading: 'Die Kommandozeile als Fähigkeit', commandBody: 'Entwicklung und Administration sollten nicht auf das Zusammensetzen einer Toolchain warten.', commandClosing: 'Die Kommandozeile der Standard-Edition wie ausgeliefert: fastfetch meldet {name} {release} auf Debian mit XFCE und 817 Paketen. Unbearbeitete Aufnahme von der Live-ISO.', installationHeading: 'Installation ohne Zeremonie', installationBody: 'Calamares übernimmt Installation und Festplatteneinrichtung, einschließlich verschlüsselter Layouts, wenn nötig. Der Installer fragt, was er braucht, und sonst nichts.', installationClosing: 'Das System in der Galerie ansehen →', seriesHeading: '{series} · {stage}', seriesBody: 'Die aktuelle Version, Verifikationsschritte und Installationsanleitung stehen unter Downloads.', gallery: 'Galerie', downloads: 'Downloads', philosophy: 'Philosophie' }, gallery: { ...english.gallery, eyebrow: 'Galerie', heading: 'Das System wie ausgeliefert', lead: 'Aufnahmen von {name} Standard {release}, ausgeführt von der Live-ISO. Fensterbilder sind auf das Fenster zugeschnitten. Nichts ist inszeniert oder retuschiert.', firstSessionEyebrow: 'Eine erste Sitzung', firstSessionHeading: 'Ein System, das sich selbst erklärt', firstSessionBody: 'Das Willkommenshandbuch gibt der Live-Sitzung einen Anfang. Your System zeigt danach, was tatsächlich läuft.', everydayEyebrow: 'Alltägliche Arbeit', everydayHeading: 'Nichts zwischen dir und dem Desktop', everydayBody: 'Wenn das System läuft, sind die gewöhnlichen Werkzeuge ruhig und vertraut: Dateien, Einstellungen und das Anwendungsmenü.', beforeInstallHeading: 'Vor der Installation ansehen', beforeInstallBody: 'Diese Aufnahmen stammen aus der validierten, mit der Version dokumentierten QEMU/KVM-Konfiguration. Der schnellste Weg über Screenshots hinaus ist die Live-ISO selbst.', downloads: 'Downloads' }, community: { ...english.community, eyebrow: 'Community', heading: 'Öffentliche Diskussion ist der Support-Kanal', lead: 'Fragen, Feedback und Diskussion gehören nach r/Amonite. Offizielle Versionen werden über GitHub Releases veröffentlicht. Das Quell-Repository ist während dieser Entwicklungsphase vorübergehend privat.', imageAlt: 'Ruhiger Arbeitsplatz neben einem Fenster mit Monitor, Tastatur und Lautsprechern', imageCaption: 'Ein Ort, um das System zu nutzen und Erkenntnisse ins Projekt zurückzubringen.', intro: 'Beginne mit einer Frage, einer frischen Installation oder etwas, das nicht wie erwartet funktioniert. Wichtig ist, was danach geteilt werden kann.', channels: [{ name: 'r/Amonite', role: 'Fragen, Feedback und Diskussion', detail: 'r/Amonite ist der wichtigste öffentliche Ort für Gespräche über Nautilus Alpha: Installationen, was funktioniert und wo Reibung bleibt.', linkLabel: 'r/Amonite öffnen' }, { name: 'GitHub Releases', role: 'Offizieller Vertriebskanal', detail: 'Offizielle Versionen, Checksums, Signaturen und Versionshinweise werden über GitHub Releases veröffentlicht.', linkLabel: 'GitHub Releases öffnen' }, { name: 'Das System selbst', role: 'Die wichtigste Quelle', detail: 'Installiere Nautilus und bewerte das System direkt.', linkLabel: 'Downloads' }] }, downloads: { ...english.downloads, eyebrow: 'Downloads', heading: 'Aktuelle Versionen', lead: 'Veröffentlichte Installationsmedien und Verifikation für Amonite-Editionen. Der Zweck jeder Edition wird auf der Startseite beschrieben.', whatsNewHeading: 'Neu in {edition}', configurationHeading: 'Validierte Konfiguration', configurationBody: 'Die Konfiguration, mit der die aktuelle {stage}-Version {series} von {edition} validiert wurde. Eine praktische Referenz, keine Aussage über minimale oder empfohlene Anforderungen.', configurationCaption: 'Validierte Hardwarekonfiguration', validationHeading: 'Validierungsergebnisse', validationBody: 'Vor der Veröffentlichung haben wir diese Wege auf der validierten Konfiguration geprüft. Jeder folgende Punkt wurde bestanden.', verificationHeading: 'Verifikation', verificationBody: 'Offizielle Versionen sind signiert, damit du prüfen kannst, dass das Image von Amonite stammt und nicht verändert wurde. Wenn eine Version eine SHA-256-Prüfsumme enthält, bietet sie eine zusätzliche Prüfung vor dem Schreiben des Installationsmediums.', verificationClosing: 'Versionen können unabhängig geprüft werden. Die vollständigen Schritte stehen in der offiziellen Verifikationsanleitung.', installationHeading: 'Installation', installationBody: 'Schreibe das verifizierte Image auf einen USB-Stick, starte davon und folge dem grafischen Installer. Die Installationsanleitung erklärt das Schreiben des Mediums, den Installerstart und die Einrichtung des Systems.', beforeDiskHeading: 'Bevor du einen Datenträger änderst', beforeDiskBody: 'Die Live-Sitzung läuft vollständig vom USB-Stick, damit du das System testen kannst, ohne installierte Datenträger anzutasten. Der Installer ändert einen Datenträger erst, wenn du die Partitionierung bestätigst.', gallery: 'Installer in der Galerie ansehen', historyBody: 'Der Versionsverlauf ist editionsspezifisch.' }, legal: { privacy: { eyebrow: 'Rechtliches', title: 'Datenschutz', description: 'Die Amonite-Website hat keine Konten, Zahlungen oder Formulare, die personenbezogene Daten sammeln. Was der Host verarbeiten kann und wohin Projektfragen gehören.', paragraphs: ['Diese Website hat keine Konten, Zahlungen oder Formulare, die personenbezogene Daten sammeln.', 'Der Host kann gewöhnliche Anfragedaten nach seinen eigenen Verfahren verarbeiten. Für externe Links gelten die Richtlinien der jeweiligen Dienste.', 'Fragen zum Projekt gehören nach r/Amonite.'] }, terms: { eyebrow: 'Rechtliches', title: 'Bedingungen', description: 'Bedingungen für die Amonite-Website: Lesen, verlinken und teilen ohne Gewähr. Der Website-Code ist MIT-lizenziert; Drittanbieter-Ressourcen folgen ATTRIBUTION.md.', paragraphs: ['Du darfst diese Website lesen, verlinken und teilen. Sie wird ohne Gewähr bereitgestellt.', 'Der Website-Code ist MIT-lizenziert. Drittanbieter-Ressourcen folgen ATTRIBUTION.md.', 'Amonite wird von Manuel Gil erstellt und gepflegt.'] } } },
  nl: { ...english, languageLabel: 'Taal', settingsLabel: 'Opties', appearanceLabel: 'Weergave', appearance: { system: 'Systeem', light: 'Licht', dark: 'Donker' }, skipToContent: 'Ga naar inhoud', nav: { philosophy: 'Filosofie', engineering: 'Engineering', gallery: 'Galerij', community: 'Gemeenschap', downloads: 'Downloads', releases: 'Releases', download: 'Downloaden', mobile: 'Mobiele navigatie' }, footer: { ...english.footer, project: 'Project', getStarted: 'Aan de slag', legal: 'Juridisch', independent: 'Een onafhankelijke GNU/Linux-distributie van Manuel Gil.', available: 'is nu beschikbaar.', privacy: 'Privacy', terms: 'Voorwaarden', releases: 'GitHub Releases', community: 'r/Amonite', sponsors: 'Sponsoren', screenshots: 'Screenshots: onbewerkte beelden van het uitgebrachte systeem · ATTRIBUTION.md' }, common: { ...english.common, alpha: 'Alpha', available: 'Beschikbaar', experimental: 'Experimenteel', currentRelease: 'Huidige release', openRelease: 'Release openen', edition: 'Editie', series: 'Serie', version: 'Versie', published: 'Gepubliceerd', releaseImage: 'Release-image', directDownload: 'Directe download', downloadIso: 'ISO downloaden', verificationGuide: 'Verificatiehandleiding', releaseNotes: 'Release notes op GitHub', tag: 'Tag', externalLink: 'Externe link' }, meta: { ...english.meta, index: { title: 'Amonite', description: 'Een GNU/Linux-besturingssysteem voor desktopwerk, ontwikkeling, beheer en lokale AI na installatie.' }, philosophy: { title: 'Filosofie', description: 'Waarom Amonite bestaat: elk pakket verdient zijn plaats door een mogelijkheid te bieden, zonder Linux opnieuw te definiëren.' }, engineering: { title: 'Engineering', description: 'Hoe Amonite mogelijkheden voor desktop, ontwikkeling, beheer, beveiliging en lokale AI realiseert.' }, gallery: { title: 'Galerij', description: 'Amonite zoals het wordt geleverd: eerste start, terminal, welkomsthandboek, installer en dagelijks gereedschap.' }, community: { title: 'Gemeenschap', description: 'Praat over Amonite op r/Amonite. Download officiële releases via GitHub Releases.' }, downloads: { title: 'Downloads', description: 'Download en verifieer Amonite-edities.' }, privacy: { title: 'Privacy', description: 'De Amonite-website heeft geen accounts, betalingen of formulieren die persoonlijke informatie verzamelen.' }, terms: { title: 'Voorwaarden', description: 'Voorwaarden voor de Amonite-website: lezen, linken en delen zonder garantie.' } }, product: { ...english.product }, releases: { ...english.releases }, home: { ...english.home, eyebrow: 'GNU/Linux · {editions}', available: '{editions} beschikbaar', downloadVerify: 'Downloaden en verifiëren', whatItIs: 'Wat het is', whatItIsHeading: 'Een besturingssysteem dat wordt bepaald door wat het mogelijk maakt', whatItIsBody: 'Amonite is een GNU/Linux-besturingssysteem dat je vandaag kunt installeren. Na installatie zijn desktopwerk, ontwikkeling, beheer, netwerken en lokale AI beschikbaar.', whatItIsRule: 'Amonite begint met een eenvoudige regel: software verdient zijn plaats door werk mogelijk te maken.', editionsEyebrow: 'Officiële edities', editionsHeading: 'Eén product. Meerdere edities.', editionsIntro: 'Elke editie heeft een eigen releasecyclus.', editionsSeries: 'Publieke edities behoren tot de huidige {series}-releaseserie.', capabilitiesEyebrow: 'Mogelijkheden', capabilitiesHeading: 'Wat na installatie mogelijk wordt', capabilitiesIntro: 'Het systeem wordt bepaald door het werk waarvoor het vanaf dag één klaar is. Elk van deze {count} mogelijkheden heeft een reden om hier te zijn.', localAiEyebrow: 'Lokale kunstmatige intelligentie', localAiHeading: 'Inferentie op je machine', localAiIntro: 'Lokale AI is een bewuste mogelijkheid van het platform. Het is geen label voor het hele besturingssysteem.', localAiOwnership: 'Modellen en prompts blijven op je hardware. Niets hangt af van een externe dienst.', localAiList: ['Compatibele GGUF-modellen lokaal uitvoeren', 'Inferentie volledig offline uitvoeren', 'Modellen en prompts onder je controle houden', 'Een OpenAI-compatibele API voor lokale toepassingen gebruiken', 'Workflows zonder externe diensten bouwen'], continueEyebrow: 'Verder', continueHeading: 'Waar ga je hierna heen', continueItems: [{ page: 'philosophy', title: 'Filosofie', description: 'Waarom elke mogelijkheid zijn aanwezigheid moet rechtvaardigen.' }, { page: 'engineering', title: 'Engineering', description: 'Hoe mogelijkheden worden gerealiseerd en wat vervangbaar blijft.' }, { page: 'gallery', title: 'Galerij', description: 'Het systeem zoals geleverd, vastgelegd vanaf de live-ISO.' }, { page: 'community', title: 'Gemeenschap', description: 'Bespreek het op r/Amonite. Download officiële releases via GitHub Releases.' }] }, philosophy: { ...english.philosophy, eyebrow: 'Filosofie', heading: 'Linux moet Linux blijven. Linux moet van jou blijven.', lead: 'Amonite bestaat zodat een nieuwe machine op de eerste dag echte mogelijkheden biedt, zonder het systeem opnieuw op te bouwen of de controle op te geven.', imageAlt: 'Ammonietfossiel met spiraalvormige kamers en lagen steen', imageCaption: 'Een bruikbaar systeem begint met een duidelijke vorm.', whyHeading: 'Waarom Amonite', principleBody: 'Elk pakket is aanwezig omdat het een betekenisvolle mogelijkheid biedt, nooit alleen omdat een ander pakket het aanbeval.', frictionBody: 'Mensen die Linux kiezen weten meestal wat het kan worden. De wrijving begint eerder: een samenhangend systeem voor dag één samenstellen uit losse aanbevelingen.', ownershipBody: 'Amonite verkort die dag. Het verzint geen nieuw soort Linux. Het levert een bewuste set mogelijkheden en laat de controle bij jou.', differenceHeading: 'Wat het anders maakt', differenceLead: 'Het verschil zit niet in het aantal pakketten. Het zit in een regel voor wat er mag worden geleverd.', principles: [{ title: 'Mogelijkheid boven opeenstapeling', body: 'Software verdient zijn plaats door werk mogelijk te maken. Overgeërfd gemak is niet genoeg.' }, { title: 'Vervangbaarheid', body: 'Wat op dag één nuttig is, mag op dag dertig geen val worden. Standaardkeuzes blijven vervangbaar.' }, { title: 'Eigenaarschap van de gebruiker', body: 'De persoon achter het toetsenbord houdt de controle. Het besturingssysteem dient die controle; het vervangt haar niet.' }], limitsHeading: 'Wat Amonite niet beweert', limitsBody: 'Het beweert niet het snelste, veiligste of een “AI-besturingssysteem” te zijn. Lokale AI is één mogelijkheid naast desktop, ontwikkeling, beheer, netwerken en beveiliging.', limitsClosing: 'Technologie verandert. De selectieregel zou dat niet moeten doen.', nextHeading: 'Van principe naar mogelijkheden', nextBody: 'Zie hoe werk op dag één wordt georganiseerd en hoe de implementatie ondergeschikt blijft aan de resultaten.', engineering: 'Engineering', downloads: 'Downloads' }, engineering: { ...english.engineering, eyebrow: 'Engineering', heading: 'Mogelijkheden eerst. Implementatie daarna.', lead: 'Elke standaardkeuze beantwoordt een praktische vraag: wat moet op dag één mogelijk zijn en wat moet later eenvoudig te veranderen blijven?', protagonistHeading: 'Het product is de hoofdrolspeler', protagonistBody: 'Dezelfde regel vormt de samenstelling: elke standaardkeuze heeft een taak en blijft na installatie vervangbaar.', compositionBody: 'De basissamenstelling is klein genoeg om te begrijpen. Alles hieronder kan worden vervangen zonder tegen het systeem te vechten.', standardEdition: 'Standard-editie', compositionCaption: 'Basissamenstelling van de Standard-editie', platform: 'Platform', desktop: 'Desktop', terminal: 'Terminal', installer: 'Installer', defaultsNote: 'Standaardkeuzes, geen vereisten. Elk onderdeel blijft na installatie vervangbaar.', compositionEyebrow: 'Samenstelling', compositionHeading: 'De details doen ertoe omdat ze samen moeten werken.', capabilityHeading: 'Hoe de mogelijkheden vorm krijgen', capabilityLead: '{series} {stage} is bedoeld voor echte evaluatie. Resultaten eerst; elke ingang laat zien hoe de mogelijkheid wordt gerealiseerd.', commandHeading: 'De commandoregel als mogelijkheid', commandBody: 'Ontwikkeling en beheer zouden niet moeten wachten op het samenstellen van een toolchain.', commandClosing: 'De commandoregel van de Standard-editie zoals geleverd: fastfetch meldt {name} {release} op Debian met XFCE en 817 pakketten. Onbewerkte opname vanaf de live-ISO.', installationHeading: 'Installatie zonder omhaal', installationBody: 'Calamares verzorgt installatie en schijfinrichting, inclusief versleutelde indelingen wanneer nodig. De installer vraagt wat nodig is en niets meer.', installationClosing: 'Bekijk het systeem in de galerij →', seriesHeading: '{series} · {stage}', seriesBody: 'De huidige release, verificatiestappen en installatiehandleiding staan bij Downloads.', gallery: 'Galerij', downloads: 'Downloads', philosophy: 'Filosofie' }, gallery: { ...english.gallery, eyebrow: 'Galerij', heading: 'Het systeem zoals geleverd', lead: 'Opnames van {name} Standard {release} vanaf de live-ISO. Vensterbeelden zijn tot het venster bijgesneden. Niets is geënsceneerd of geretoucheerd.', firstSessionEyebrow: 'Een eerste sessie', firstSessionHeading: 'Een systeem dat zichzelf uitlegt', firstSessionBody: 'Het welkomsthandboek geeft de live-sessie een beginpunt. Your System laat daarna zien wat er werkelijk draait.', everydayEyebrow: 'Dagelijks werk', everydayHeading: 'Niets tussen jou en de desktop', everydayBody: 'Wanneer het systeem draait, zijn de gewone hulpmiddelen rustig en vertrouwd: bestanden, instellingen en het applicatiemenu.', beforeInstallHeading: 'Bekijk het voor installatie', beforeInstallBody: 'Deze opnames komen uit de gevalideerde QEMU/KVM-configuratie die bij de release is gedocumenteerd. De snelste stap voorbij screenshots is de live-ISO zelf.', downloads: 'Downloads' }, community: { ...english.community, eyebrow: 'Gemeenschap', heading: 'Publieke discussie is het supportkanaal', lead: 'Vragen, feedback en discussie horen op r/Amonite. Officiële releases worden via GitHub Releases gepubliceerd. De bronrepository is tijdens deze ontwikkelingsfase tijdelijk privé.', imageAlt: 'Rustige werkplek bij een raam met monitor, toetsenbord en luidsprekers', imageCaption: 'Een plek om het systeem te gebruiken en wat je leert terug te brengen naar het project.', intro: 'Begin met een vraag, een nieuwe installatie of iets dat niet werkt zoals verwacht. Het nuttige deel is wat daarna kan worden gedeeld.', channels: [{ name: 'r/Amonite', role: 'Vragen, feedback en discussie', detail: 'r/Amonite is de belangrijkste publieke plek voor gesprekken over Nautilus Alpha: installaties, wat werkt en waar wrijving blijft.', linkLabel: 'r/Amonite openen' }, { name: 'GitHub Releases', role: 'Officieel distributiekanaal', detail: 'Officiële releases, checksums, handtekeningen en release notes worden via GitHub Releases gepubliceerd.', linkLabel: 'GitHub Releases openen' }, { name: 'Het systeem zelf', role: 'De belangrijkste bron', detail: 'Installeer Nautilus en gebruik het om het systeem direct te evalueren.', linkLabel: 'Downloads' }] }, downloads: { ...english.downloads, eyebrow: 'Downloads', heading: 'Huidige releases', lead: 'Gepubliceerde installatiemedia en verificatie voor Amonite-edities. Het doel van elke editie wordt op de homepage beschreven.', whatsNewHeading: 'Nieuw in {edition}', configurationHeading: 'Gevalideerde configuratie', configurationBody: 'De configuratie waarmee de huidige {stage} {series}-release van {edition} is gevalideerd. Een praktische referentie, geen uitspraak over minimale of aanbevolen vereisten.', configurationCaption: 'Gevalideerde hardwareconfiguratie', validationHeading: 'Validatieresultaten', validationBody: 'Voor publicatie hebben we deze paden op de gevalideerde configuratie getest. Elk volgend onderdeel is geslaagd.', verificationHeading: 'Verificatie', verificationBody: 'Officiële releases zijn ondertekend zodat je kunt controleren dat het image van Amonite komt en niet is gewijzigd. Wanneer een release een SHA-256-checksum bevat, biedt die extra controle voordat je installatiemedia schrijft.', verificationClosing: 'Releases kunnen onafhankelijk worden gecontroleerd. De volledige stappen staan in de officiële verificatiehandleiding.', installationHeading: 'Installatie', installationBody: 'Schrijf het geverifieerde image naar een USB-stick, start daarvan op en volg de grafische installer. De installatiehandleiding behandelt het schrijven van media, het starten van de installer en het instellen van het systeem.', beforeDiskHeading: 'Voordat je een schijf wijzigt', beforeDiskBody: 'De live-sessie draait volledig vanaf de USB-stick, zodat je het systeem kunt beoordelen zonder geïnstalleerde schijven aan te raken. De installer wijzigt een schijf pas nadat je de partitionering bevestigt.', gallery: 'Bekijk de installer in de galerij', historyBody: 'De releasegeschiedenis is specifiek voor elke editie.' }, legal: { privacy: { eyebrow: 'Juridisch', title: 'Privacy', description: 'De Amonite-website heeft geen accounts, betalingen of formulieren die persoonlijke informatie verzamelen. Wat de host kan verwerken en waar projectvragen thuishoren.', paragraphs: ['Deze site heeft geen accounts, betalingen of formulieren die persoonlijke informatie verzamelen.', 'De host kan gewone verzoekgegevens verwerken volgens eigen praktijken. Externe links volgen het beleid van die diensten.', 'Vragen over het project horen op r/Amonite.'] }, terms: { eyebrow: 'Juridisch', title: 'Voorwaarden', description: 'Voorwaarden voor de Amonite-website: lezen, linken en delen zonder garantie. De websitebron is MIT-gelicentieerd; bronnen van derden volgen ATTRIBUTION.md.', paragraphs: ['Je mag deze website lezen, linken en delen. Hij wordt zonder garantie aangeboden.', 'De websitebron valt onder de MIT-licentie. Bronnen van derden volgen ATTRIBUTION.md.', 'Amonite wordt gemaakt en onderhouden door Manuel Gil.'] } } },
};

type SharedCopy = {
  home: string;
  navigation: string;
  verificationGuideIntro: string;
  signed: string;
  bytes: string;
  via: string;
  releaseHistory: string;
  installationGuide: string;
  releaseImage: string;
  externalLink: string;
  opensNewTab: string;
  copyright: string;
  authorship: string;
  independentProject: string;
  independentBody: string;
  sponsorship: string;
  sustainingWork: string;
  sponsorshipBody: string;
  sponsorshipOptional: string;
  githubSponsors: string;
};

export const SHARED_COPY: Record<Locale, SharedCopy> = {
  en: {
    home: 'Amonite home',
    navigation: 'Primary navigation',
    verificationGuideIntro: 'Releases can be independently checked. Complete steps are in the official',
    signed: 'GPG signed',
    bytes: 'bytes',
    via: 'via',
    releaseHistory: 'Release history',
    installationGuide: 'Read Installation Guide',
    releaseImage: 'Release image',
    externalLink: 'External link',
    opensNewTab: '(opens in a new tab)',
    copyright: 'Website source under the MIT License.',
    authorship: 'Authorship',
    independentProject: 'An independent project',
    independentBody: 'Amonite is an independent GNU/Linux distribution designed, built, tested, cryptographically signed, and maintained by Manuel Gil.',
    sponsorship: 'Sponsorship',
    sustainingWork: 'Sustaining the work',
    sponsorshipBody: 'Sponsorship helps sustain development, testing, infrastructure, hardware, documentation, and long-term maintenance.',
    sponsorshipOptional: 'It is optional, and available through GitHub Sponsors.',
    githubSponsors: 'GitHub Sponsors',
  },
  es: {
    home: 'Inicio de Amonite',
    navigation: 'Navegación principal',
    verificationGuideIntro: 'Las versiones pueden comprobarse de forma independiente. Para conocer todos los pasos, lee la',
    signed: 'Firmada con GPG',
    bytes: 'bytes',
    via: 'mediante',
    releaseHistory: 'Historial de versiones',
    installationGuide: 'Leer la guía de instalación',
    releaseImage: 'Imagen de la versión',
    externalLink: 'Enlace externo',
    opensNewTab: '(se abre en una pestaña nueva)',
    copyright: 'Código de la web bajo la licencia MIT.',
    authorship: 'Autoría',
    independentProject: 'Un proyecto independiente',
    independentBody: 'Amonite es una distribución GNU/Linux independiente diseñada, construida, probada, firmada criptográficamente y mantenida por Manuel Gil.',
    sponsorship: 'Patrocinio',
    sustainingWork: 'Mantener el trabajo',
    sponsorshipBody: 'El patrocinio ayuda a sostener el desarrollo, las pruebas, la infraestructura, el hardware, la documentación y el mantenimiento a largo plazo.',
    sponsorshipOptional: 'Es opcional y está disponible mediante GitHub Sponsors.',
    githubSponsors: 'GitHub Sponsors',
  },
  pt: {
    home: 'Página inicial do Amonite',
    navigation: 'Navegação principal',
    verificationGuideIntro: 'As versões podem ser verificadas de forma independente. Para os passos completos, leia o',
    signed: 'Assinada com GPG',
    bytes: 'bytes',
    via: 'através de',
    releaseHistory: 'Histórico de versões',
    installationGuide: 'Ler o Guia de Instalação',
    releaseImage: 'Imagem da versão',
    externalLink: 'Link externo',
    opensNewTab: '(abre numa nova aba)',
    copyright: 'Código do site sob a licença MIT.',
    authorship: 'Autoria',
    independentProject: 'Um projeto independente',
    independentBody: 'O Amonite é uma distribuição GNU/Linux independente, concebida, construída, testada, assinada criptograficamente e mantida por Manuel Gil.',
    sponsorship: 'Patrocínio',
    sustainingWork: 'Sustentar o trabalho',
    sponsorshipBody: 'O patrocínio ajuda a sustentar desenvolvimento, testes, infraestrutura, hardware, documentação e manutenção a longo prazo.',
    sponsorshipOptional: 'É opcional e está disponível através do GitHub Sponsors.',
    githubSponsors: 'GitHub Sponsors',
  },
  it: {
    home: 'Home di Amonite',
    navigation: 'Navigazione principale',
    verificationGuideIntro: 'Le versioni possono essere controllate in modo indipendente. Per i passaggi completi, leggi la',
    signed: 'Firmata con GPG',
    bytes: 'byte',
    via: 'tramite',
    releaseHistory: 'Cronologia delle versioni',
    installationGuide: 'Leggi la guida all’installazione',
    releaseImage: 'Immagine della versione',
    externalLink: 'Link esterno',
    opensNewTab: '(si apre in una nuova scheda)',
    copyright: 'Codice del sito con licenza MIT.',
    authorship: 'Autore',
    independentProject: 'Un progetto indipendente',
    independentBody: 'Amonite è una distribuzione GNU/Linux indipendente, progettata, costruita, testata, firmata crittograficamente e mantenuta da Manuel Gil.',
    sponsorship: 'Sponsorizzazione',
    sustainingWork: 'Sostenere il lavoro',
    sponsorshipBody: 'La sponsorizzazione aiuta a sostenere sviluppo, test, infrastruttura, hardware, documentazione e manutenzione a lungo termine.',
    sponsorshipOptional: 'È facoltativa e disponibile tramite GitHub Sponsors.',
    githubSponsors: 'GitHub Sponsors',
  },
  fr: {
    home: 'Accueil d’Amonite',
    navigation: 'Navigation principale',
    verificationGuideIntro: 'Les versions peuvent être vérifiées indépendamment. Pour toutes les étapes, consultez le',
    signed: 'Signée par GPG',
    bytes: 'octets',
    via: 'via',
    releaseHistory: 'Historique des versions',
    installationGuide: 'Lire le guide d’installation',
    releaseImage: 'Image de la version',
    externalLink: 'Lien externe',
    opensNewTab: '(s’ouvre dans un nouvel onglet)',
    copyright: 'Code du site sous licence MIT.',
    authorship: 'Auteur',
    independentProject: 'Un projet indépendant',
    independentBody: 'Amonite est une distribution GNU/Linux indépendante conçue, construite, testée, signée cryptographiquement et maintenue par Manuel Gil.',
    sponsorship: 'Soutien',
    sustainingWork: 'Soutenir le travail',
    sponsorshipBody: 'Le soutien contribue au développement, aux tests, à l’infrastructure, au matériel, à la documentation et à la maintenance à long terme.',
    sponsorshipOptional: 'Il est facultatif et disponible via GitHub Sponsors.',
    githubSponsors: 'GitHub Sponsors',
  },
  de: {
    home: 'Amonite-Startseite',
    navigation: 'Hauptnavigation',
    verificationGuideIntro: 'Versionen können unabhängig geprüft werden. Die vollständigen Schritte stehen in der offiziellen',
    signed: 'GPG-signiert',
    bytes: 'Bytes',
    via: 'über',
    releaseHistory: 'Versionsverlauf',
    installationGuide: 'Installationsanleitung lesen',
    releaseImage: 'Versionsabbild',
    externalLink: 'Externer Link',
    opensNewTab: '(öffnet in einem neuen Tab)',
    copyright: 'Website-Code unter der MIT-Lizenz.',
    authorship: 'Urheberschaft',
    independentProject: 'Ein unabhängiges Projekt',
    independentBody: 'Amonite ist eine unabhängige GNU/Linux-Distribution, die von Manuel Gil entworfen, gebaut, getestet, kryptografisch signiert und gepflegt wird.',
    sponsorship: 'Unterstützung',
    sustainingWork: 'Die Arbeit erhalten',
    sponsorshipBody: 'Unterstützung trägt zu Entwicklung, Tests, Infrastruktur, Hardware, Dokumentation und langfristiger Pflege bei.',
    sponsorshipOptional: 'Sie ist freiwillig und über GitHub Sponsors möglich.',
    githubSponsors: 'GitHub Sponsors',
  },
  nl: {
    home: 'Amonite-home',
    navigation: 'Primaire navigatie',
    verificationGuideIntro: 'Releases kunnen onafhankelijk worden gecontroleerd. De volledige stappen staan in de officiële',
    signed: 'GPG-ondertekend',
    bytes: 'bytes',
    via: 'via',
    releaseHistory: 'Releasegeschiedenis',
    installationGuide: 'Installatiehandleiding lezen',
    releaseImage: 'Release-image',
    externalLink: 'Externe link',
    opensNewTab: '(opent in een nieuw tabblad)',
    copyright: 'Websitebron onder de MIT-licentie.',
    authorship: 'Auteurschap',
    independentProject: 'Een onafhankelijk project',
    independentBody: 'Amonite is een onafhankelijke GNU/Linux-distributie, ontworpen, gebouwd, getest, cryptografisch ondertekend en onderhouden door Manuel Gil.',
    sponsorship: 'Sponsoring',
    sustainingWork: 'Het werk ondersteunen',
    sponsorshipBody: 'Sponsoring helpt ontwikkeling, tests, infrastructuur, hardware, documentatie en langetermijnonderhoud te dragen.',
    sponsorshipOptional: 'Het is optioneel en beschikbaar via GitHub Sponsors.',
    githubSponsors: 'GitHub Sponsors',
  },
};

type MediaCopy = {
  fallbackImageAlt: string;
  homeTerminalAlt: string;
  homeTerminalCaption: string;
  homeFirstBootAlt: string;
  homeFirstBootCaption: string;
  engineeringWatchAlt: string;
  engineeringTerminalAlt: string;
  engineeringInstallerAlt: string;
  engineeringInstallerCaption: string;
};

export const MEDIA_COPY: Record<Locale, MediaCopy> = {
  en: {
    fallbackImageAlt: 'Amonite live session at first boot, with the Welcome handbook and the installer open on an otherwise empty desktop',
    homeTerminalAlt: 'Maximized terminal on Amonite showing fastfetch output with the Amonite ASCII mark and system details',
    homeTerminalCaption: 'The terminal after boot: fastfetch reporting {name} {release} as shipped. Unedited capture from the live ISO.',
    homeFirstBootAlt: 'Amonite live session at first boot with the Welcome handbook and installer open on an empty desktop',
    homeFirstBootCaption: 'First boot of the live session: the Welcome handbook and the installer, nothing else.',
    engineeringWatchAlt: 'Mechanical watch movement with gears and precision components',
    engineeringTerminalAlt: 'Maximized terminal on Amonite running fastfetch, showing the Amonite ASCII mark and system details',
    engineeringInstallerAlt: 'Amonite installer at the partitioning step with erase disk, manual partitioning, and encryption options',
    engineeringInstallerCaption: 'The installer at the partitioning step. Encrypted installation is a checkbox.',
  },
  es: {
    fallbackImageAlt: 'Sesión live de Amonite en el primer arranque, con el manual de bienvenida y el instalador abiertos sobre un escritorio vacío',
    homeTerminalAlt: 'Terminal maximizado de Amonite mostrando fastfetch, la marca ASCII de Amonite y los detalles del sistema',
    homeTerminalCaption: 'El terminal después de arrancar: fastfetch muestra {name} {release} tal como se entrega. Captura sin editar desde la ISO live.',
    homeFirstBootAlt: 'Sesión live de Amonite en el primer arranque con el manual de bienvenida y el instalador abiertos sobre un escritorio vacío',
    homeFirstBootCaption: 'Primer arranque de la sesión live: el manual de bienvenida y el instalador, nada más.',
    engineeringWatchAlt: 'Mecanismo de reloj mecánico con engranajes y componentes de precisión',
    engineeringTerminalAlt: 'Terminal maximizado de Amonite ejecutando fastfetch, con la marca ASCII de Amonite y los detalles del sistema',
    engineeringInstallerAlt: 'Instalador de Amonite en el paso de particionado, con opciones para borrar el disco, particionado manual y cifrado',
    engineeringInstallerCaption: 'El instalador en el paso de particionado. La instalación cifrada es una casilla.',
  },
  pt: {
    fallbackImageAlt: 'Sessão live do Amonite no primeiro arranque, com o manual de boas-vindas e o instalador abertos num ambiente de trabalho vazio',
    homeTerminalAlt: 'Terminal maximizado no Amonite a mostrar o fastfetch, a marca ASCII do Amonite e os detalhes do sistema',
    homeTerminalCaption: 'O terminal depois do arranque: fastfetch a indicar {name} {release} tal como é distribuído. Captura sem edição a partir da ISO live.',
    homeFirstBootAlt: 'Sessão live do Amonite no primeiro arranque com o manual de boas-vindas e o instalador abertos num ambiente de trabalho vazio',
    homeFirstBootCaption: 'Primeiro arranque da sessão live: o manual de boas-vindas e o instalador, nada mais.',
    engineeringWatchAlt: 'Mecanismo de relógio mecânico com engrenagens e componentes de precisão',
    engineeringTerminalAlt: 'Terminal maximizado no Amonite a executar o fastfetch, com a marca ASCII do Amonite e os detalhes do sistema',
    engineeringInstallerAlt: 'Instalador do Amonite no passo de particionamento, com opções para apagar o disco, particionamento manual e encriptação',
    engineeringInstallerCaption: 'O instalador no passo de particionamento. A instalação encriptada é uma caixa de seleção.',
  },
  it: {
    fallbackImageAlt: 'Sessione live di Amonite al primo avvio, con il manuale di benvenuto e l’installer aperti su un desktop vuoto',
    homeTerminalAlt: 'Terminale massimizzato su Amonite con fastfetch, il marchio ASCII di Amonite e i dettagli del sistema',
    homeTerminalCaption: 'Il terminale dopo l’avvio: fastfetch segnala {name} {release} così come viene distribuito. Cattura non modificata dalla ISO live.',
    homeFirstBootAlt: 'Sessione live di Amonite al primo avvio con il manuale di benvenuto e l’installer aperti su un desktop vuoto',
    homeFirstBootCaption: 'Primo avvio della sessione live: il manuale di benvenuto e l’installer, nient’altro.',
    engineeringWatchAlt: 'Movimento di un orologio meccanico con ingranaggi e componenti di precisione',
    engineeringTerminalAlt: 'Terminale massimizzato su Amonite con fastfetch, il marchio ASCII di Amonite e i dettagli del sistema',
    engineeringInstallerAlt: 'Installer di Amonite al passaggio del partizionamento, con opzioni per cancellare il disco, partizionare manualmente e cifrare',
    engineeringInstallerCaption: 'L’installer al passaggio del partizionamento. L’installazione cifrata è una casella di controllo.',
  },
  fr: {
    fallbackImageAlt: 'Session live d’Amonite au premier démarrage, avec le manuel d’accueil et l’installateur ouverts sur un bureau vide',
    homeTerminalAlt: 'Terminal maximisé sur Amonite affichant fastfetch, la marque ASCII d’Amonite et les détails du système',
    homeTerminalCaption: 'Le terminal après le démarrage : fastfetch affiche {name} {release} tel qu’il est livré. Capture non retouchée depuis l’ISO live.',
    homeFirstBootAlt: 'Session live d’Amonite au premier démarrage avec le manuel d’accueil et l’installateur ouverts sur un bureau vide',
    homeFirstBootCaption: 'Premier démarrage de la session live : le manuel d’accueil et l’installateur, rien d’autre.',
    engineeringWatchAlt: 'Mouvement de montre mécanique avec engrenages et composants de précision',
    engineeringTerminalAlt: 'Terminal maximisé sur Amonite exécutant fastfetch, avec la marque ASCII d’Amonite et les détails du système',
    engineeringInstallerAlt: 'Installateur d’Amonite à l’étape du partitionnement, avec options d’effacement du disque, de partitionnement manuel et de chiffrement',
    engineeringInstallerCaption: 'L’installateur à l’étape du partitionnement. L’installation chiffrée est une case à cocher.',
  },
  de: {
    fallbackImageAlt: 'Amonite-Live-Sitzung beim ersten Start mit geöffneter Willkommensdokumentation und Installer auf einem ansonsten leeren Desktop',
    homeTerminalAlt: 'Maximiertes Amonite-Terminal mit fastfetch, dem ASCII-Zeichen von Amonite und Systemdetails',
    homeTerminalCaption: 'Das Terminal nach dem Start: fastfetch meldet {name} {release} wie ausgeliefert. Unbearbeitete Aufnahme von der Live-ISO.',
    homeFirstBootAlt: 'Amonite-Live-Sitzung beim ersten Start mit geöffneter Willkommensdokumentation und Installer auf einem leeren Desktop',
    homeFirstBootCaption: 'Erster Start der Live-Sitzung: die Willkommensdokumentation und der Installer, sonst nichts.',
    engineeringWatchAlt: 'Mechanisches Uhrwerk mit Zahnrädern und Präzisionskomponenten',
    engineeringTerminalAlt: 'Maximiertes Amonite-Terminal mit fastfetch, dem ASCII-Zeichen von Amonite und Systemdetails',
    engineeringInstallerAlt: 'Amonite-Installer beim Partitionieren mit Optionen zum Löschen der Festplatte, manuellen Partitionieren und Verschlüsseln',
    engineeringInstallerCaption: 'Der Installer beim Partitionieren. Die verschlüsselte Installation ist eine Checkbox.',
  },
  nl: {
    fallbackImageAlt: 'Amonite-livesessie bij de eerste start, met de welkomsthandleiding en installer geopend op een verder lege desktop',
    homeTerminalAlt: 'Gemaximaliseerde terminal op Amonite met fastfetch, het ASCII-teken van Amonite en systeemdetails',
    homeTerminalCaption: 'De terminal na het opstarten: fastfetch meldt {name} {release} zoals geleverd. Onbewerkte opname vanaf de live-ISO.',
    homeFirstBootAlt: 'Amonite-livesessie bij de eerste start met de welkomsthandleiding en installer geopend op een lege desktop',
    homeFirstBootCaption: 'Eerste start van de livesessie: de welkomsthandleiding en installer, verder niets.',
    engineeringWatchAlt: 'Mechanisch uurwerk met tandwielen en precisiecomponenten',
    engineeringTerminalAlt: 'Gemaximaliseerde terminal op Amonite met fastfetch, het ASCII-teken van Amonite en systeemdetails',
    engineeringInstallerAlt: 'Amonite-installer bij het partitioneren met opties voor schijf wissen, handmatig partitioneren en versleuteling',
    engineeringInstallerCaption: 'De installer bij het partitioneren. Versleutelde installatie is een selectievakje.',
  },
};

type ProductOverride = Partial<Copy['product']>;
type ReleaseOverrides = Partial<Record<ReleaseKey, Partial<ReleaseCopy>>>;
type GalleryOverride = Partial<Copy['gallery']>;

const PRODUCT_OVERRIDES: Partial<Record<Locale, ProductOverride>> = {
  it: {
    tagline:
      'Un sistema operativo GNU/Linux progettato per ciò che fai dopo l’installazione: lavoro desktop, sviluppo, amministrazione e IA locale.',
    selectionPrinciple:
      'Ogni pacchetto è presente perché offre una capacità significativa, mai perché un altro pacchetto lo abbia consigliato.',
    editions: {
      standard: {
        statusDetail: 'Edizione ufficiale con una versione alfa pubblicata.',
        audience:
          'L’edizione predefinita per chi desidera un’esperienza desktop completa per lavoro, sviluppo, amministrazione e IA locale.',
        difference:
          'Un desktop Debian curato con integrazione completa di XFCE, leggero e facile da mantenere.',
      },
      lite: {
        statusDetail: 'Edizione ufficiale con una versione alfa pubblicata.',
        audience: 'Per chi desidera un desktop minimale composto da componenti indipendenti.',
        difference:
          'Un desktop minimale composto da componenti upstream indipendenti con i meccanismi standard di integrazione Debian, a basso accoppiamento e modulare.',
      },
      mobile: {
        statusDetail: 'Edizione sperimentale. Non esiste ancora una versione scaricabile.',
        audience: null,
        difference: null,
      },
    },
    capabilities: [
      {
        title: 'Informatica desktop',
        body: 'Lavoro quotidiano dal primo accesso: un ambiente grafico con rete, multimedia, gestione dello spazio e navigazione web pronti senza assemblaggio.',
        via: 'Desktop predefinito: XFCE. Audio e multimedia tramite PipeWire. Navigazione web con LibreWolf.',
      },
      {
        title: 'Sviluppo software',
        body: 'Scrivi, compila e correggi software dalla prima sessione con un ambiente a riga di comando moderno, preparato per ricerca, automazione e dati strutturati.',
        via: 'Terminale predefinito: Kitty. Strumenti di sviluppo disponibili senza costruire manualmente una toolchain.',
      },
      {
        title: 'Amministrazione del sistema',
        body: 'Ispeziona, configura e mantieni la macchina con strumenti di amministrazione pronti dal primo avvio.',
        via: 'Utilità CLI pratiche selezionate per operatori, non un elenco esaustivo di pacchetti.',
      },
      {
        title: 'Intelligenza artificiale locale',
        body: 'Esegui modelli GGUF compatibili sulla tua macchina, completamente offline. Mantieni modelli e prompt sotto il tuo controllo e offri un’API compatibile con OpenAI alle applicazioni locali.',
        via: 'Implementata con llama.cpp come capacità integrata della piattaforma, non come pacchetto aggiunto.',
      },
      {
        title: 'Rete',
        body: 'Connettiti e lavora in rete senza improvvisare driver, stack o configurazioni di base dopo l’installazione.',
        via: 'Rete pronta come parte della composizione predefinita.',
      },
      {
        title: 'Sicurezza',
        body: 'Isolamento delle applicazioni e criteri di sicurezza attivi per impostazione predefinita. Installazione cifrata opzionale quando serve.',
        via: 'AppArmor attivo. Installazioni cifrate supportate dall’installer grafico (Calamares).',
      },
      {
        title: 'Archiviazione',
        body: 'Installa e gestisci i dischi con un installer grafico chiaro, inclusi layout cifrati quando necessari.',
        via: 'Calamares gestisce installazione e configurazione dei dischi.',
      },
      {
        title: 'Documentazione',
        body: 'Documentazione integrata del progetto per capire il sistema senza cercare il contesto mancante.',
        via: 'Documentazione pubblica pubblicata con le versioni su GitHub.',
      },
    ],
    cliSummary:
      'Un ambiente moderno a riga di comando per ricerca, automazione e dati strutturati, pronto per sviluppo e amministrazione dal primo avvio.',
    validated: {
      title: 'Configurazione validata',
      architecture: 'Architettura',
      cpu: 'CPU',
      memory: 'Memoria',
      storage: 'Archiviazione',
      firmware: 'Firmware',
      virtualization: 'Piattaforma di virtualizzazione',
      installedSize: 'Dimensione del sistema installato',
      results: [
        'Avvio della ISO live',
        'Desktop grafico',
        'Applicazione di benvenuto',
        'Installazione con Calamares',
        'Primo avvio dopo l’installazione',
        'Accesso al sistema',
        'Terminale',
        'apt update',
        'apt upgrade',
        'Nessun servizio systemd fallito',
      ],
    },
  },
  fr: {
    tagline:
      'Un système d’exploitation GNU/Linux conçu pour ce que vous faites après l’installation : travail de bureau, développement, administration et IA locale.',
    selectionPrinciple:
      'Chaque paquet est présent parce qu’il apporte une capacité significative, jamais parce qu’un autre paquet l’a recommandé.',
    editions: {
      standard: {
        statusDetail: 'Édition officielle avec une version alpha publiée.',
        audience:
          'L’édition par défaut pour les personnes qui veulent une expérience de bureau complète pour le travail, le développement, l’administration et l’IA locale.',
        difference:
          'Un bureau Debian composé avec soin et entièrement intégré à XFCE, tout en restant léger et maintenable.',
      },
      lite: {
        statusDetail: 'Édition officielle avec une version alpha publiée.',
        audience:
          'Pour les personnes qui souhaitent un bureau minimal assemblé à partir de composants indépendants.',
        difference:
          'Un bureau minimal composé de composants upstream indépendants avec les mécanismes d’intégration Debian standard, à faible couplage et modulaire.',
      },
      mobile: {
        statusDetail: 'Édition expérimentale. Aucune version téléchargeable pour le moment.',
        audience: null,
        difference: null,
      },
    },
    capabilities: [
      {
        title: 'Informatique de bureau',
        body: 'Travail quotidien dès la première connexion : un environnement graphique avec réseau, multimédia, stockage et navigation web prêts sans assemblage.',
        via: 'Bureau par défaut : XFCE. Audio et multimédia via PipeWire. Navigation web avec LibreWolf.',
      },
      {
        title: 'Développement logiciel',
        body: 'Écrire, construire et déboguer dès la première session avec un environnement moderne en ligne de commande préparé pour la recherche, l’automatisation et les données structurées.',
        via: 'Terminal par défaut : Kitty. Outils de développement disponibles sans assembler une toolchain à la main.',
      },
      {
        title: 'Administration système',
        body: 'Inspecter, configurer et maintenir la machine avec des outils d’administration prêts dès le premier démarrage.',
        via: 'Utilitaires CLI pratiques choisis pour les opérateurs, pas un inventaire exhaustif de paquets.',
      },
      {
        title: 'Intelligence artificielle locale',
        body: 'Exécuter des modèles GGUF compatibles sur votre machine, entièrement hors ligne. Garder les modèles et les prompts sous votre contrôle et exposer une API compatible OpenAI aux applications locales.',
        via: 'Implémentée avec llama.cpp comme capacité intégrée de la plateforme, pas comme paquet ajouté.',
      },
      {
        title: 'Réseau',
        body: 'Se connecter et travailler sur le réseau sans improviser les pilotes, les piles ou la configuration de base après l’installation.',
        via: 'Réseau prêt dans la composition par défaut.',
      },
      {
        title: 'Sécurité',
        body: 'Isolation des applications et politiques de sécurité activées par défaut. Installation chiffrée facultative lorsque nécessaire.',
        via: 'AppArmor activé. Installations chiffrées prises en charge par l’installateur graphique (Calamares).',
      },
      {
        title: 'Stockage',
        body: 'Installer et gérer les disques avec un installateur graphique clair, y compris les schémas chiffrés lorsque nécessaire.',
        via: 'Calamares gère l’installation et la configuration des disques.',
      },
      {
        title: 'Documentation',
        body: 'Documentation intégrée du projet pour comprendre le système sans chercher le contexte manquant.',
        via: 'Documentation publique publiée avec les versions sur GitHub.',
      },
    ],
    cliSummary:
      'Un environnement moderne en ligne de commande pour la recherche, l’automatisation et les données structurées, prêt pour le développement et l’administration dès le premier démarrage.',
    validated: {
      title: 'Configuration validée',
      architecture: 'Architecture',
      cpu: 'CPU',
      memory: 'Mémoire',
      storage: 'Stockage',
      firmware: 'Micrologiciel',
      virtualization: 'Plateforme de virtualisation',
      installedSize: 'Taille du système installé',
      results: [
        'Démarrage de l’ISO live',
        'Bureau graphique',
        'Application d’accueil',
        'Installation avec Calamares',
        'Premier démarrage après installation',
        'Connexion au système',
        'Terminal',
        'apt update',
        'apt upgrade',
        'Aucun service systemd en échec',
      ],
    },
  },
  de: {
    tagline:
      'Ein GNU/Linux-Betriebssystem für das, was du nach der Installation tust: Desktop-Arbeit, Entwicklung, Administration und lokale KI.',
    selectionPrinciple:
      'Jedes Paket ist vorhanden, weil es eine sinnvolle Fähigkeit liefert, nie nur weil ein anderes Paket es empfohlen hat.',
    editions: {
      standard: {
        statusDetail: 'Offizielle Edition mit einer veröffentlichten Alpha-Version.',
        audience:
          'Die Standard-Edition für alle, die eine vollständige Desktop-Erfahrung für Arbeit, Entwicklung, Administration und lokale KI benötigen.',
        difference:
          'Ein sorgfältig zusammengestellter Debian-Desktop mit vollständiger XFCE-Integration, der leicht und wartbar bleibt.',
      },
      lite: {
        statusDetail: 'Offizielle Edition mit einer veröffentlichten Alpha-Version.',
        audience: 'Für alle, die einen minimalen Desktop aus unabhängigen Komponenten möchten.',
        difference:
          'Ein minimaler Desktop aus unabhängigen Upstream-Komponenten mit den üblichen Debian-Integrationsmechanismen, geringer Kopplung und Modularität.',
      },
      mobile: {
        statusDetail: 'Experimentelle Edition. Noch keine herunterladbare Version.',
        audience: null,
        difference: null,
      },
    },
    capabilities: [
      {
        title: 'Desktop-Arbeit',
        body: 'Alltägliche Arbeit ab der ersten Anmeldung: eine grafische Umgebung mit Netzwerk, Multimedia, Speicherverwaltung und Webbrowser ohne zusätzliche Montage.',
        via: 'Standard-Desktop: XFCE. Audio und Multimedia über PipeWire. Webbrowser über LibreWolf.',
      },
      {
        title: 'Softwareentwicklung',
        body: 'Ab der ersten Sitzung Software schreiben, bauen und debuggen – mit einer modernen Kommandozeile für Suche, Automatisierung und strukturierte Daten.',
        via: 'Standardterminal: Kitty. Entwicklungswerkzeuge ohne manuelles Zusammenstellen einer Toolchain.',
      },
      {
        title: 'Systemadministration',
        body: 'Die Maschine ab dem ersten Start mit bereiten Administrationswerkzeugen prüfen, konfigurieren und warten.',
        via: 'Praktische CLI-Werkzeuge für Betreiber, keine vollständige Paketliste.',
      },
      {
        title: 'Lokale künstliche Intelligenz',
        body: 'Kompatible GGUF-Modelle vollständig offline auf deiner Maschine ausführen. Modelle und Prompts unter deiner Kontrolle behalten und lokalen Anwendungen eine OpenAI-kompatible API anbieten.',
        via: 'Mit llama.cpp als integrierte Plattformfähigkeit umgesetzt, nicht als nachträglich hinzugefügtes Paket.',
      },
      {
        title: 'Netzwerk',
        body: 'Nach der Installation im Netzwerk arbeiten, ohne Treiber, Stacks oder grundlegende Konfiguration improvisieren zu müssen.',
        via: 'Netzwerk als Teil der Standardzusammensetzung bereit.',
      },
      {
        title: 'Sicherheit',
        body: 'Anwendungsisolierung und Sicherheitsrichtlinien standardmäßig aktiviert. Verschlüsselte Installation nach Bedarf möglich.',
        via: 'AppArmor aktiviert. Verschlüsselte Installationen über den grafischen Installer (Calamares).',
      },
      {
        title: 'Speicher',
        body: 'Datenträger mit einem klaren grafischen Installer einrichten und verwalten, einschließlich verschlüsselter Layouts.',
        via: 'Calamares übernimmt Installation und Festplatteneinrichtung.',
      },
      {
        title: 'Dokumentation',
        body: 'Integrierte Projektdokumentation, damit das System ohne fehlenden Kontext verständlich bleibt.',
        via: 'Öffentliche Dokumentation wird mit den Versionen auf GitHub veröffentlicht.',
      },
    ],
    cliSummary:
      'Eine moderne Kommandozeile für Suche, Automatisierung und strukturierte Daten, ab dem ersten Start für Entwicklung und Administration bereit.',
    validated: {
      title: 'Validierte Konfiguration',
      architecture: 'Architektur',
      cpu: 'CPU',
      memory: 'Arbeitsspeicher',
      storage: 'Speicher',
      firmware: 'Firmware',
      virtualization: 'Virtualisierungsplattform',
      installedSize: 'Größe des installierten Systems',
      results: [
        'Live-ISO-Start',
        'Grafischer Desktop',
        'Willkommensanwendung',
        'Installation mit Calamares',
        'Erster Start nach der Installation',
        'Systemanmeldung',
        'Terminal',
        'apt update',
        'apt upgrade',
        'Keine fehlgeschlagenen systemd-Dienste',
      ],
    },
  },
  nl: {
    tagline:
      'Een GNU/Linux-besturingssysteem voor wat je na installatie doet: desktopwerk, ontwikkeling, beheer en lokale AI.',
    selectionPrinciple:
      'Elk pakket is aanwezig omdat het een betekenisvolle mogelijkheid biedt, nooit alleen omdat een ander pakket het aanbeval.',
    editions: {
      standard: {
        statusDetail: 'Officiële editie met een gepubliceerde alpha-release.',
        audience:
          'De standaardeditie voor wie een complete desktopervaring nodig heeft voor desktopwerk, ontwikkeling, beheer en lokale AI.',
        difference:
          'Een zorgvuldig samengestelde Debian-desktop met volledige XFCE-integratie, terwijl hij licht en onderhoudbaar blijft.',
      },
      lite: {
        statusDetail: 'Officiële editie met een gepubliceerde alpha-release.',
        audience: 'Voor wie een minimale desktop uit onafhankelijke componenten wil.',
        difference:
          'Een minimale desktop uit onafhankelijke upstream-componenten met standaard Debian-integratie, lage koppeling en modulariteit.',
      },
      mobile: {
        statusDetail: 'Experimentele editie. Er is nog geen downloadbare release.',
        audience: null,
        difference: null,
      },
    },
    capabilities: [
      {
        title: 'Desktopwerk',
        body: 'Dagelijks werk vanaf de eerste aanmelding: een grafische omgeving met netwerk, multimedia, opslagbeheer en webbrowsing zonder extra samenstelling.',
        via: 'Standaarddesktop: XFCE. Audio en multimedia via PipeWire. Webbrowsing via LibreWolf.',
      },
      {
        title: 'Softwareontwikkeling',
        body: 'Vanaf de eerste sessie software schrijven, bouwen en debuggen met een moderne commandoregel voor zoeken, automatisering en gestructureerde data.',
        via: 'Standaardterminal: Kitty. Ontwikkeltools beschikbaar zonder handmatig een toolchain samen te stellen.',
      },
      {
        title: 'Systeembeheer',
        body: 'De machine vanaf de eerste start inspecteren, configureren en onderhouden met beschikbare beheertools.',
        via: 'Praktische CLI-hulpmiddelen voor beheerders, geen volledige pakketlijst.',
      },
      {
        title: 'Lokale kunstmatige intelligentie',
        body: 'Compatibele GGUF-modellen volledig offline op je machine uitvoeren. Modellen en prompts onder je controle houden en lokale toepassingen een OpenAI-compatibele API bieden.',
        via: 'Met llama.cpp als geïntegreerde platformmogelijkheid uitgevoerd, niet als los toegevoegd pakket.',
      },
      {
        title: 'Netwerken',
        body: 'Na installatie op het netwerk werken zonder stuurprogramma’s, stacks of basisconfiguratie te improviseren.',
        via: 'Netwerk klaar als onderdeel van de standaardcompositie.',
      },
      {
        title: 'Beveiliging',
        body: 'Applicatie-isolatie en beveiligingsbeleid standaard ingeschakeld. Optionele versleutelde installatie wanneer nodig.',
        via: 'AppArmor ingeschakeld. Versleutelde installaties via de grafische installer (Calamares).',
      },
      {
        title: 'Opslag',
        body: 'Schijven installeren en beheren met een duidelijke grafische installer, inclusief versleutelde indelingen wanneer nodig.',
        via: 'Calamares verzorgt installatie en schijfinrichting.',
      },
      {
        title: 'Documentatie',
        body: 'Geïntegreerde projectdocumentatie zodat het systeem zonder ontbrekende context te begrijpen is.',
        via: 'Openbare documentatie wordt met releases op GitHub gepubliceerd.',
      },
    ],
    cliSummary:
      'Een moderne commandoregel voor zoeken, automatisering en gestructureerde data, vanaf de eerste start klaar voor ontwikkeling en beheer.',
    validated: {
      title: 'Gevalideerde configuratie',
      architecture: 'Architectuur',
      cpu: 'CPU',
      memory: 'Geheugen',
      storage: 'Opslag',
      firmware: 'Firmware',
      virtualization: 'Virtualisatieplatform',
      installedSize: 'Grootte van geïnstalleerd systeem',
      results: [
        'Live-ISO-boot',
        'Grafische desktop',
        'Welkomsttoepassing',
        'Installatie met Calamares',
        'Eerste start na installatie',
        'Systeemaanmelding',
        'Terminal',
        'apt update',
        'apt upgrade',
        'Geen mislukte systemd-services',
      ],
    },
  },
};

const RELEASE_OVERRIDES: Partial<Record<Locale, ReleaseOverrides>> = {
  pt: {
    'standard:1.0.0-alpha.2': {
      title: 'Amonite 1.0.0 Alfa 2',
      label: 'Nautilus · Alfa 2',
      summary: 'A segunda versão alfa pública do Amonite Standard.',
      evaluationNotice:
        'Esta versão destina-se a avaliação e testes. Pode conter erros, funcionalidades incompletas ou problemas de compatibilidade e não se destina a produção.',
      highlights: ['Debian 13 (Trixie)', 'Integração completa do desktop XFCE', 'Aplicação de boas-vindas', 'Terminal Kitty', 'Ambiente de linha de comandos selecionado', 'Inferência de IA local com llama.cpp', 'Instalador Calamares'],
      whatsNew: {
        intro: 'Esta versão aperfeiçoa a experiência de desktop padrão, preservando uma composição leve e fácil de manter.',
        improvements: ['um desktop padrão completo e coerente', 'a integração de desktop prevista para esta fase do desenvolvimento'],
        closing: 'Estas alterações melhoram o desktop sem mudar a composição leve do produto.',
      },
    },
    'standard:1.0.0-alpha': {
      title: 'Amonite 1.0.0 Alfa',
      label: 'Nautilus · Alfa',
      summary: 'A primeira versão alfa pública do Amonite Standard.',
      evaluationNotice: 'Esta versão destina-se a avaliação e testes. Pode conter erros, funcionalidades incompletas ou problemas de compatibilidade e não se destina a produção.',
    },
    'lite:1.0.0-alpha': {
      title: 'Amonite Lite 1.0.0 Alfa',
      label: 'Nautilus · Alfa',
      summary: 'A primeira versão alfa pública do Amonite Lite.',
      evaluationNotice: 'Esta versão destina-se a avaliação e testes e ainda não deve ser considerada pronta para produção.',
      highlights: ['Debian 13 (Trixie)', 'Desktop Wayland com Labwc', 'Gestão de sessão UWSM', 'Gestor de início de sessão LightDM', 'Terminal Kitty', 'Ambiente de linha de comandos selecionado', 'Inferência de IA local com llama.cpp', 'Aplicação de boas-vindas', 'Instalador Calamares', 'Componentes independentes com baixo acoplamento'],
      direction: 'Esta versão é um desktop mínimo composto por componentes upstream independentes usando os mecanismos padrão de integração do Debian. Dá prioridade à simplicidade, eficiência, segurança, privacidade, manutenção, baixo acoplamento e modularidade.',
    },
  },
  it: {
    'standard:1.0.0-alpha.2': {
      title: 'Amonite 1.0.0 Alfa 2',
      label: 'Nautilus · Alfa 2',
      summary: 'La seconda versione alfa pubblica di Amonite Standard.',
      evaluationNotice:
        'Questa versione è destinata a valutazione e test. Può contenere bug, funzionalità incomplete o problemi di compatibilità e non è destinata all’uso in produzione.',
      highlights: ['Debian 13 (Trixie)', 'Integrazione completa del desktop XFCE', 'Applicazione di benvenuto', 'Terminale Kitty', 'Ambiente a riga di comando curato', 'Inferenza IA locale con llama.cpp', 'Installer Calamares'],
      whatsNew: {
        intro: 'Questa versione perfeziona l’esperienza desktop predefinita preservando una composizione leggera e manutenibile.',
        improvements: ['un aspetto desktop completo e coerente', 'l’integrazione desktop prevista per questa fase dello sviluppo'],
        closing: 'Questi cambiamenti migliorano il desktop senza modificare la composizione leggera del prodotto.',
      },
    },
    'standard:1.0.0-alpha': {
      title: 'Amonite 1.0.0 Alfa',
      label: 'Nautilus · Alfa',
      summary: 'La prima versione alfa pubblica di Amonite Standard.',
      evaluationNotice: 'Questa versione è destinata a valutazione e test. Può contenere bug, funzionalità incomplete o problemi di compatibilità e non è destinata all’uso in produzione.',
    },
    'lite:1.0.0-alpha': {
      title: 'Amonite Lite 1.0.0 Alfa',
      label: 'Nautilus · Alfa',
      summary: 'La prima versione alfa pubblica di Amonite Lite.',
      evaluationNotice: 'Questa versione è destinata a valutazione e test e non dovrebbe ancora essere considerata pronta per la produzione.',
      highlights: ['Debian 13 (Trixie)', 'Desktop Wayland con Labwc', 'Gestione sessione UWSM', 'Gestore di accesso LightDM', 'Terminale Kitty', 'Ambiente a riga di comando curato', 'Inferenza IA locale con llama.cpp', 'Applicazione di benvenuto', 'Installer Calamares', 'Componenti indipendenti a basso accoppiamento'],
      direction: 'Questa versione è un desktop minimale composto da componenti upstream indipendenti con i meccanismi standard di integrazione Debian. Sottolinea semplicità, efficienza, sicurezza, privacy, manutenibilità, basso accoppiamento e modularità.',
    },
  },
  fr: {
    'standard:1.0.0-alpha.2': {
      title: 'Amonite 1.0.0 Alpha 2',
      label: 'Nautilus · Alpha 2',
      summary: 'La deuxième version alpha publique d’Amonite Standard.',
      evaluationNotice:
        'Cette version est destinée à l’évaluation et aux tests. Elle peut contenir des bugs, des fonctions incomplètes ou des problèmes de compatibilité et n’est pas destinée à la production.',
      highlights: ['Debian 13 (Trixie)', 'Intégration complète du bureau XFCE', 'Application d’accueil', 'Terminal Kitty', 'Environnement de ligne de commande choisi', 'Inférence IA locale avec llama.cpp', 'Installateur Calamares'],
      whatsNew: {
        intro: 'Cette version affine l’expérience de bureau par défaut tout en préservant une composition légère et maintenable.',
        improvements: ['une apparence de bureau complète et cohérente', 'l’intégration de bureau prévue à ce stade du développement'],
        closing: 'Ces changements améliorent le bureau sans modifier la composition légère du produit.',
      },
    },
    'standard:1.0.0-alpha': {
      title: 'Amonite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'La première version alpha publique d’Amonite Standard.',
      evaluationNotice: 'Cette version est destinée à l’évaluation et aux tests. Elle peut contenir des bugs, des fonctions incomplètes ou des problèmes de compatibilité et n’est pas destinée à la production.',
    },
    'lite:1.0.0-alpha': {
      title: 'Amonite Lite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'La première version alpha publique d’Amonite Lite.',
      evaluationNotice: 'Cette version est destinée à l’évaluation et aux tests et ne doit pas encore être considérée comme prête pour la production.',
      highlights: ['Debian 13 (Trixie)', 'Bureau Wayland avec Labwc', 'Gestion de session UWSM', 'Gestionnaire de connexion LightDM', 'Terminal Kitty', 'Environnement de ligne de commande choisi', 'Inférence IA locale avec llama.cpp', 'Application d’accueil', 'Installateur Calamares', 'Composants indépendants à faible couplage'],
      direction: 'Cette version est un bureau minimal assemblé à partir de composants upstream indépendants avec les mécanismes d’intégration Debian standard. Elle privilégie la simplicité, l’efficacité, la sécurité, la confidentialité, la maintenabilité, le faible couplage et la modularité.',
    },
  },
  de: {
    'standard:1.0.0-alpha.2': {
      title: 'Amonite 1.0.0 Alpha 2',
      label: 'Nautilus · Alpha 2',
      summary: 'Die zweite öffentliche Alpha-Version von Amonite Standard.',
      evaluationNotice:
        'Diese Version ist für Bewertung und Tests gedacht. Sie kann Fehler, unvollständige Funktionen oder Kompatibilitätsprobleme enthalten und ist nicht für den produktiven Einsatz bestimmt.',
      highlights: ['Debian 13 (Trixie)', 'Vollständige XFCE-Desktopintegration', 'Willkommensanwendung', 'Kitty-Terminal', 'Ausgewählte Kommandozeilenumgebung', 'Lokale KI-Inferenz mit llama.cpp', 'Calamares-Installer'],
      whatsNew: {
        intro: 'Diese Version verfeinert die Standard-Desktop-Erfahrung und bewahrt dabei eine leichte, wartbare Zusammensetzung.',
        improvements: ['ein vollständiges und konsistentes Standard-Desktopbild', 'die für diese Entwicklungsphase vorgesehene Desktopintegration'],
        closing: 'Diese Änderungen verbessern den Desktop, ohne die leichte Zusammensetzung des Produkts zu verändern.',
      },
    },
    'standard:1.0.0-alpha': {
      title: 'Amonite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'Die erste öffentliche Alpha-Version von Amonite Standard.',
      evaluationNotice: 'Diese Version ist für Bewertung und Tests gedacht. Sie kann Fehler, unvollständige Funktionen oder Kompatibilitätsprobleme enthalten und ist nicht für den produktiven Einsatz bestimmt.',
    },
    'lite:1.0.0-alpha': {
      title: 'Amonite Lite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'Die erste öffentliche Alpha-Version von Amonite Lite.',
      evaluationNotice: 'Diese Version ist für Bewertung und Tests gedacht und sollte noch nicht als produktionsbereit gelten.',
      highlights: ['Debian 13 (Trixie)', 'Wayland-Desktop mit Labwc', 'UWSM-Sitzungsverwaltung', 'LightDM-Anmeldemanager', 'Kitty-Terminal', 'Ausgewählte Kommandozeilenumgebung', 'Lokale KI-Inferenz mit llama.cpp', 'Willkommensanwendung', 'Calamares-Installer', 'Unabhängige Komponenten mit geringer Kopplung'],
      direction: 'Diese Version ist ein minimaler Desktop aus unabhängigen Upstream-Komponenten mit den üblichen Debian-Integrationsmechanismen. Im Mittelpunkt stehen Einfachheit, Effizienz, Sicherheit, Datenschutz, Wartbarkeit, geringe Kopplung und Modularität.',
    },
  },
  nl: {
    'standard:1.0.0-alpha.2': {
      title: 'Amonite 1.0.0 Alpha 2',
      label: 'Nautilus · Alpha 2',
      summary: 'De tweede publieke alpha-release van Amonite Standard.',
      evaluationNotice:
        'Deze release is bedoeld voor evaluatie en tests. Er kunnen bugs, onvolledige functies of compatibiliteitsproblemen in zitten en hij is niet bedoeld voor productiegebruik.',
      highlights: ['Debian 13 (Trixie)', 'Volledige XFCE-desktopintegratie', 'Welkomsttoepassing', 'Kitty-terminal', 'Samengestelde commandoregelomgeving', 'Lokale AI-inferentie met llama.cpp', 'Calamares-installer'],
      whatsNew: {
        intro: 'Deze release verfijnt de standaarddesktop en behoudt tegelijk een lichte en onderhoudbare samenstelling.',
        improvements: ['een complete en consistente standaarddesktop', 'de beoogde desktopintegratie voor deze ontwikkelingsfase'],
        closing: 'Deze wijzigingen verbeteren de desktop zonder de lichte productsamenstelling te veranderen.',
      },
    },
    'standard:1.0.0-alpha': {
      title: 'Amonite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'De eerste publieke alpha-release van Amonite Standard.',
      evaluationNotice: 'Deze release is bedoeld voor evaluatie en tests. Er kunnen bugs, onvolledige functies of compatibiliteitsproblemen in zitten en hij is niet bedoeld voor productiegebruik.',
    },
    'lite:1.0.0-alpha': {
      title: 'Amonite Lite 1.0.0 Alpha',
      label: 'Nautilus · Alpha',
      summary: 'De eerste publieke alpha-release van Amonite Lite.',
      evaluationNotice: 'Deze release is bedoeld voor evaluatie en tests en mag nog niet als productieklaar worden beschouwd.',
      highlights: ['Debian 13 (Trixie)', 'Wayland-desktop met Labwc', 'UWSM-sessiebeheer', 'LightDM-aanmeldbeheerder', 'Kitty-terminal', 'Samengestelde commandoregelomgeving', 'Lokale AI-inferentie met llama.cpp', 'Welkomsttoepassing', 'Calamares-installer', 'Onafhankelijke componenten met lage koppeling'],
      direction: 'Deze release is een minimale desktop uit onafhankelijke upstream-componenten met standaard Debian-integratie. Hij benadrukt eenvoud, efficiëntie, beveiliging, privacy, onderhoudbaarheid, lage koppeling en modulariteit.',
    },
  },
};

const GALLERY_OVERRIDES: Partial<Record<Locale, GalleryOverride>> = {
  pt: {
    captions: [
      'Primeiro arranque da sessão live. O manual de boas-vindas e o instalador abrem-se sobre um desktop vazio. Tudo o resto dá espaço.',
      'fastfetch no terminal maximizado, a indicar a edição Standard como é distribuída: {name} {release} ({series}) no Debian com XFCE e 817 pacotes.',
      'O manual de boas-vindas. Uma introdução breve, não um painel de controlo: o que é o Amonite, para quem é e por que permanece minimalista.',
      'O Your System apresenta a instalação em termos simples: distribuição, versão do Debian, desktop, sessão, kernel e hardware.',
      'O instalador (Calamares) no passo de particionamento. Apagar o disco ou particionar manualmente; a instalação cifrada é uma caixa de seleção, não um projeto.',
      'O Thunar, gestor de ficheiros do XFCE, a mostrar a pasta pessoal do utilizador live à espera dos seus primeiros ficheiros.',
      'O gestor de definições do XFCE: controlos familiares e próximos, sem outra camada entre si e o desktop.',
      'O menu de aplicações como é distribuído: terminal, gestor de ficheiros, correio, navegador e categorias padrão. O desktop permanece deliberadamente vazio.',
    ],
    alts: [
      'Sessão live do Amonite no primeiro arranque, com o manual de boas-vindas e o instalador abertos sobre um desktop vazio',
      'Terminal maximizado a mostrar a saída do fastfetch com a marca ASCII do Amonite e os detalhes do sistema',
      'Aplicação de boas-vindas do Amonite na página inicial, a explicar o que é o Amonite e por que permanece minimalista',
      'Página Your System da aplicação de boas-vindas com a distribuição, versão do Debian, desktop, kernel e hardware',
      'Instalador do Amonite (Calamares) no passo de particionamento, com opções para apagar o disco, particionar manualmente e cifrar o sistema',
      'Gestor de ficheiros Thunar a mostrar a pasta pessoal do utilizador live',
      'Gestor de definições do XFCE com secções pessoais, de hardware e do sistema',
      'Menu de aplicações aberto sobre um desktop vazio, com terminal, gestor de ficheiros, leitor de correio, navegador e submenus de categorias',
    ],
  },
  it: {
    captions: [
      'Primo avvio della sessione live. Il manuale di benvenuto e l’installer si aprono su un desktop vuoto. Tutto il resto lascia spazio.',
      'fastfetch nel terminale massimizzato, che mostra l’edizione Standard così come viene distribuita: {name} {release} ({series}) su Debian con XFCE e 817 pacchetti.',
      'Il manuale di benvenuto. Una breve introduzione, non un pannello di controllo: cos’è Amonite, per chi è e perché resta minimale.',
      'Your System descrive l’installazione in termini semplici: distribuzione, versione di Debian, desktop, sessione, kernel e hardware.',
      'L’installer (Calamares) al passaggio del partizionamento. Cancellare il disco o partizionare manualmente; l’installazione cifrata è una casella, non un progetto.',
      'Thunar, il gestore file di XFCE, mostra la cartella home dell’utente live in attesa dei primi file.',
      'Il gestore delle impostazioni di XFCE: controlli familiari e vicini, senza un altro livello tra te e il desktop.',
      'Il menu applicazioni così come viene distribuito: terminale, file manager, posta, browser e categorie standard. Il desktop dietro resta deliberatamente vuoto.',
    ],
    alts: [
      'Sessione live di Amonite al primo avvio, con il manuale di benvenuto e l’installer aperti su un desktop vuoto',
      'Terminale massimizzato con l’output di fastfetch, il marchio ASCII di Amonite e i dettagli del sistema',
      'Applicazione di benvenuto di Amonite nella pagina iniziale, che spiega cos’è Amonite e perché resta minimale',
      'Pagina Your System dell’applicazione di benvenuto con distribuzione, versione di Debian, desktop, kernel e hardware',
      'Installer di Amonite (Calamares) al passaggio del partizionamento, con opzioni per cancellare il disco, partizionare manualmente e cifrare il sistema',
      'Gestore file Thunar che mostra la cartella home dell’utente live',
      'Gestore delle impostazioni di XFCE con sezioni personali, hardware e sistema',
      'Menu applicazioni aperto su un desktop vuoto, con terminale, file manager, lettore di posta, browser e categorie',
    ],
  },
  fr: {
    captions: [
      'Premier démarrage de la session live. Le manuel d’accueil et l’installateur s’ouvrent sur un bureau vide. Tout le reste laisse de la place.',
      'fastfetch dans le terminal maximisé, indiquant l’édition Standard telle qu’elle est livrée : {name} {release} ({series}) sur Debian avec XFCE et 817 paquets.',
      'Le manuel d’accueil. Une brève introduction, pas un panneau de contrôle : ce qu’est Amonite, à qui il s’adresse et pourquoi il reste minimaliste.',
      'Your System décrit l’installation en termes simples : distribution, version de Debian, bureau, session, noyau et matériel.',
      'L’installateur (Calamares) à l’étape du partitionnement. Effacer le disque ou partitionner manuellement ; l’installation chiffrée est une case, pas un projet.',
      'Thunar, le gestionnaire de fichiers XFCE, affiche le dossier personnel de l’utilisateur live en attente de ses premiers fichiers.',
      'Le gestionnaire de réglages XFCE : des contrôles familiers et proches, sans couche supplémentaire entre vous et le bureau.',
      'Le menu des applications tel qu’il est livré : terminal, gestionnaire de fichiers, courrier, navigateur et catégories standard. Le bureau reste volontairement vide.',
    ],
    alts: [
      'Session live d’Amonite au premier démarrage, avec le manuel d’accueil et l’installateur ouverts sur un bureau vide',
      'Terminal maximisé affichant la sortie de fastfetch avec la marque ASCII d’Amonite et les détails du système',
      'Application d’accueil d’Amonite sur sa page principale, expliquant ce qu’est Amonite et pourquoi il reste minimaliste',
      'Page Your System de l’application d’accueil avec la distribution, la version de Debian, le bureau, le noyau et le matériel',
      'Installateur d’Amonite (Calamares) à l’étape du partitionnement, avec options d’effacement du disque, de partitionnement manuel et de chiffrement',
      'Gestionnaire de fichiers Thunar affichant le dossier personnel de l’utilisateur live',
      'Gestionnaire de réglages XFCE avec sections personnelles, matérielles et système',
      'Menu des applications ouvert sur un bureau vide, avec terminal, gestionnaire de fichiers, lecteur de courrier, navigateur et catégories',
    ],
  },
  de: {
    captions: [
      'Erster Start der Live-Sitzung. Willkommenshandbuch und Installer öffnen sich auf einem leeren Desktop. Alles andere lässt Raum.',
      'fastfetch im maximierten Terminal meldet die Standard-Edition wie ausgeliefert: {name} {release} ({series}) auf Debian mit XFCE und 817 Paketen.',
      'Das Willkommenshandbuch. Eine kurze Einführung, kein Kontrollzentrum: Was Amonite ist, für wen es gedacht ist und warum es minimal bleibt.',
      'Your System beschreibt die Installation verständlich: Distribution, Debian-Version, Desktop, Sitzung, Kernel und Hardware.',
      'Der Installer (Calamares) beim Partitionieren. Festplatte löschen oder manuell partitionieren; die verschlüsselte Installation ist eine Checkbox, kein Projekt.',
      'Thunar, der XFCE-Dateimanager, zeigt das persönliche Verzeichnis des Live-Benutzers und wartet auf die ersten Dateien.',
      'Der XFCE-Einstellungsmanager: vertraute, nahe Bedienelemente ohne zusätzliche Schicht zwischen dir und dem Desktop.',
      'Das Anwendungsmenü wie ausgeliefert: Terminal, Dateimanager, E-Mail, Browser und Standardkategorien. Der Desktop dahinter bleibt bewusst leer.',
    ],
    alts: [
      'Amonite-Live-Sitzung beim ersten Start mit geöffnetem Willkommenshandbuch und Installer auf einem leeren Desktop',
      'Maximiertes Terminal mit fastfetch-Ausgabe, dem ASCII-Zeichen von Amonite und Systemdetails',
      'Amonite-Willkommensanwendung auf der Startseite mit Erklärung, was Amonite ist und warum es minimal bleibt',
      'Your-System-Seite der Willkommensanwendung mit Distribution, Debian-Version, Desktop, Kernel und Hardware',
      'Amonite-Installer (Calamares) beim Partitionieren mit Optionen zum Löschen der Festplatte, manuellen Partitionieren und Verschlüsseln',
      'Thunar-Dateimanager mit dem persönlichen Verzeichnis des Live-Benutzers',
      'XFCE-Einstellungsmanager mit persönlichen, Hardware- und Systembereichen',
      'Geöffnetes Anwendungsmenü auf einem leeren Desktop mit Terminal, Dateimanager, E-Mail-Programm, Browser und Kategorien',
    ],
  },
  nl: {
    captions: [
      'Eerste start van de livesessie. De welkomsthandleiding en installer openen op een lege desktop. Al het andere laat ruimte.',
      'fastfetch in de gemaximaliseerde terminal meldt de Standard-editie zoals geleverd: {name} {release} ({series}) op Debian met XFCE en 817 pakketten.',
      'De welkomsthandleiding. Een korte introductie, geen controlepaneel: wat Amonite is, voor wie het is en waarom het minimaal blijft.',
      'Your System beschrijft de installatie in eenvoudige termen: distributie, Debian-versie, desktop, sessie, kernel en hardware.',
      'De installer (Calamares) bij het partitioneren. Wis de schijf of partitioneer handmatig; versleutelde installatie is een selectievakje, geen project.',
      'Thunar, de XFCE-bestandsbeheerder, toont de persoonlijke map van de livegebruiker en wacht op de eerste bestanden.',
      'De XFCE-instellingenbeheerder: vertrouwde bediening zonder extra laag tussen jou en de desktop.',
      'Het applicatiemenu zoals geleverd: terminal, bestandsbeheerder, mail, browser en standaardcategorieën. De desktop erachter blijft bewust leeg.',
    ],
    alts: [
      'Amonite-livesessie bij de eerste start met de welkomsthandleiding en installer geopend op een lege desktop',
      'Gemaximaliseerde terminal met fastfetch-uitvoer, het ASCII-teken van Amonite en systeemdetails',
      'Amonite-welkomsttoepassing op de startpagina, met uitleg wat Amonite is en waarom het minimaal blijft',
      'Your System-pagina van de welkomsttoepassing met distributie, Debian-versie, desktop, kernel en hardware',
      'Amonite-installer (Calamares) bij het partitioneren met opties voor schijf wissen, handmatig partitioneren en versleutelen',
      'Thunar-bestandsbeheerder met de persoonlijke map van de livegebruiker',
      'XFCE-instellingenbeheerder met persoonlijke, hardware- en systeemonderdelen',
      'Geopend applicatiemenu op een lege desktop met terminal, bestandsbeheerder, mailprogramma, browser en categorieën',
    ],
  },
};

export function getLocale(value?: string | null): Locale {
  return LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;
}

export function getCopy(locale: Locale): Copy {
  const base = COPY[locale];
  const productOverride = PRODUCT_OVERRIDES[locale];
  const localizedReleases = { ...base.releases };
  for (const [key, override] of Object.entries(RELEASE_OVERRIDES[locale] ?? {})) {
    const releaseKey = key as ReleaseKey;
    const release = localizedReleases[releaseKey];
    if (!release || !override) continue;
    localizedReleases[releaseKey] = {
      ...release,
      ...override,
      whatsNew: {
        ...release.whatsNew,
        ...override.whatsNew,
      },
    };
  }

  return {
    ...base,
    product: {
      ...base.product,
      ...productOverride,
      editions: {
        ...base.product.editions,
        ...productOverride?.editions,
      },
      validated: {
        ...base.product.validated,
        ...productOverride?.validated,
      },
    },
    releases: localizedReleases,
    gallery: {
      ...base.gallery,
      ...GALLERY_OVERRIDES[locale],
    },
  } as Copy;
}

export function localizedPath(locale: Locale, path = ''): string {
  return getRelativeLocaleUrl(locale, path.replace(/^\/+|\/+$/g, ''));
}

export function getReleaseCopy(locale: Locale, editionId: string, version: string): ReleaseCopy {
  return getCopy(locale).releases[releaseKey(editionId, version)];
}

export function getEditionCopy(
  locale: Locale,
  editionId: string,
): EditionCopy | null {
  return (
    getCopy(locale).product.editions[
      editionId as keyof Copy['product']['editions']
    ] ?? null
  );
}

export function formatCopy(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : `{${key}}`,
  );
}

export function releaseKey(editionId: string, version: string): ReleaseKey {
  return `${editionId}:${version}` as ReleaseKey;
}
