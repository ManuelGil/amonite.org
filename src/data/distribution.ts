/**
 * Public facts about the Amonite GNU/Linux distribution.
 *
 * Model:
 *   Product → Series → Edition → Release → Publication → Artifacts
 *
 * Series owns major-version identity and codename for every edition in that
 * series. Editions do not define their own codename. Releases reference a
 * series; they do not store a duplicate codename.
 *
 * Visibility is independent of lifecycle:
 *   isPublic true  — rendered on the public website
 *   isPublic false — retained internally; not announced or discoverable
 *
 * Release / publication states:
 *   published — public release with an official tag (part of product history)
 *   prepared  — editorial content complete; not yet a public release
 *   planned   — edition or release recognized; not yet in preparation
 *
 * Artifact evidence (SHA-256, size) may remain null after publication until
 * the release pipeline provides it. Null evidence does not mean the release
 * is unpublished. Publication dates live under publication.publishedAt.
 *
 * Do not infer publication from the presence of a version number.
 * Never invent checksums, sizes, filenames, or download URLs.
 */

const DOWNLOAD_URL = 'https://github.com/ManuelGil/amonite' as const;
const RELEASES_URL = `${DOWNLOAD_URL}/releases` as const;
const ARCHITECTURE = 'amd64' as const;
const VERIFY_GUIDE_HREF = `${DOWNLOAD_URL}/blob/main/VERIFY.md` as const;

const PLATFORM = 'Debian Stable' as const;
const DESKTOP = 'XFCE' as const;
const TERMINAL = 'Kitty' as const;
const INSTALLER = 'Calamares' as const;

/** Edition lifecycle relative to public availability. */
export type EditionStatus = 'published' | 'prepared' | 'planned';

/** Release publication state. Independent of edition existence. */
export type ReleaseState = 'published' | 'prepared' | 'planned';

type ArtifactEvidence = {
  sha256: string | null;
  sizeBytes: number | null;
};

type IsoArtifact = {
  filename: string | null;
  href: string | null;
  evidence: ArtifactEvidence;
};

function releaseAssetUrl(tag: string, filename: string): string {
  return `${DOWNLOAD_URL}/releases/download/${encodeURIComponent(tag)}/${filename}`;
}

function releasePageUrl(tag: string): string {
  return `${DOWNLOAD_URL}/releases/tag/${encodeURIComponent(tag)}`;
}

/**
 * Deterministic ISO location for a published release.
 * Evidence fields stay null until the release pipeline provides them.
 */
function publishedIsoArtifact(options: {
  version: string;
  tag: string;
  /** Optional edition slug in the filename, e.g. "lite". */
  editionSlug?: string;
  sha256?: string | null;
}): IsoArtifact {
  const basename = options.editionSlug
    ? `amonite-${options.editionSlug}-${options.version}`
    : `amonite-${options.version}`;
  const filename = `${basename}-${ARCHITECTURE}.iso`;
  return {
    filename,
    href: releaseAssetUrl(options.tag, filename),
    evidence: {
      sha256: options.sha256 ?? null,
      sizeBytes: null,
    },
  };
}

function isPublishedRelease(release: {
  state: ReleaseState;
  artifacts: { iso: IsoArtifact };
}): boolean {
  return (
    release.state === 'published' &&
    release.artifacts.iso.filename !== null &&
    release.artifacts.iso.href !== null
  );
}

/** Product-level facts shared by every edition. */
export const PRODUCT = {
  name: 'Amonite',
  sourceUrl: DOWNLOAD_URL,
  communityUrl: 'https://www.reddit.com/r/amonite/',
  downloadUrl: RELEASES_URL,
  sponsorsUrl: 'https://github.com/sponsors/ManuelGil',
  tagline:
    'A GNU/Linux operating system engineered for what you do after install: desktop work, development, administration, and local AI.',
  selectionPrinciple:
    'Every package is present because it delivers a meaningful capability, never because another package happened to recommend it.',
  docs: {
    verifyGuide: {
      href: VERIFY_GUIDE_HREF,
    },
    installGuide: {
      href: `${DOWNLOAD_URL}/blob/main/INSTALL.md`,
    },
  },
} as const;

/**
 * Release series for the product.
 * Owns major-version identity and codename. Shared by every edition.
 */
export const SERIES = {
  nautilus: {
    id: 'nautilus',
    majorVersion: '1',
    codename: 'Nautilus',
  },
} as const;

export type SeriesId = keyof typeof SERIES;

/** Current product series. Every edition in this major line inherits it. */
export const CURRENT_SERIES = SERIES.nautilus;

const STAGE_ALPHA = 'Alpha' as const;

/** History / compact label that includes the series codename. */
function seriesStageLabel(stageQualifier: string, seriesId: SeriesId = CURRENT_SERIES.id) {
  return `${SERIES[seriesId].codename} · ${stageQualifier}`;
}

const standardAlpha2 = {
  state: 'published' as const satisfies ReleaseState,
  version: '1.0.0-alpha.2',
  tag: 'v1.0.0-alpha.2',
  seriesId: CURRENT_SERIES.id,
  title: 'Amonite 1.0.0 Alpha 2',
  label: seriesStageLabel('Alpha 2'),
  stage: STAGE_ALPHA,
  summary: 'The second public alpha release of Amonite Standard.',
  supportStatus: 'evaluation' as const,
  evaluationNotice:
    'This release is intended for evaluation and testing. It may contain bugs, incomplete features or compatibility issues and is not intended for production use.',
  notes: {
    highlights: [
      'Debian 13 (Trixie)',
      'Complete XFCE desktop integration',
      'Welcome application',
      'Kitty terminal',
      'Curated command-line environment',
      'Local AI inference with llama.cpp',
      'Calamares installer',
    ] as const,
    whatsNew: {
      intro:
        "This release focuses on refining the default desktop experience while preserving Amonite's lightweight and maintainable composition.",
      improvements: [
        'a complete and consistent default desktop appearance',
        'the intended desktop integration for this stage of development',
      ] as const,
      closing:
        'These changes refine the desktop experience without changing the product’s lightweight composition.',
    },
  },
  publication: {
    publishedAt: '2026-07-28',
  },
  artifacts: {
    iso: publishedIsoArtifact({
      version: '1.0.0-alpha.2',
      tag: 'v1.0.0-alpha.2',
      sha256: '9511d94b8f35735d2c94d74f8027a26ce9f61b1057637be1d34547575fda19a9',
    }),
  },
  releasePage: {
    href: releasePageUrl('v1.0.0-alpha.2'),
  },
  verifyGuide: {
    href: VERIFY_GUIDE_HREF,
  },
} as const;

const standardAlpha1 = {
  state: 'published' as const satisfies ReleaseState,
  version: '1.0.0-alpha',
  tag: 'v1.0.0-alpha',
  seriesId: CURRENT_SERIES.id,
  title: 'Amonite 1.0.0 Alpha',
  label: seriesStageLabel(STAGE_ALPHA),
  stage: STAGE_ALPHA,
  summary: 'The first public alpha release of Amonite Standard.',
  supportStatus: 'evaluation' as const,
  evaluationNotice:
    'This release is intended for evaluation and testing. It may contain bugs, incomplete features or compatibility issues and is not intended for production use.',
  notes: {
    highlights: [] as const,
    whatsNew: {
      intro: '',
      improvements: [] as const,
      closing: '',
    },
  },
  publication: {
    publishedAt: '2026-07-22',
  },
  artifacts: {
    iso: publishedIsoArtifact({
      version: '1.0.0-alpha',
      tag: 'v1.0.0-alpha',
      sha256: '9082c909314e37a4de261829fedcdedf970f777eefb47a78c749c22eca340acf',
    }),
  },
  releasePage: {
    href: releasePageUrl('v1.0.0-alpha'),
  },
  verifyGuide: {
    href: VERIFY_GUIDE_HREF,
  },
} as const;

const LITE_RELEASE_TAG = 'lite/v1.0.0-alpha' as const;

const liteAlpha1 = {
  state: 'published' as const satisfies ReleaseState,
  version: '1.0.0-alpha',
  tag: LITE_RELEASE_TAG,
  seriesId: CURRENT_SERIES.id,
  title: 'Amonite Lite 1.0.0 Alpha',
  label: seriesStageLabel(STAGE_ALPHA),
  stage: STAGE_ALPHA,
  summary: 'The first public alpha release of Amonite Lite.',
  supportStatus: 'evaluation' as const,
  evaluationNotice:
    'This release is intended for evaluation and testing. It may contain bugs, incomplete features or compatibility issues and should not yet be considered production-ready.',
  notes: {
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
    ] as const,
    direction:
      'This release is a minimal desktop assembled from independent upstream components using standard Debian integration mechanisms. It emphasizes simplicity, efficiency, security, privacy, maintainability, low coupling, and modularity.',
    whatsNew: {
      intro: '',
      improvements: [] as const,
      closing: '',
    },
  },
  publication: {
    publishedAt: '2026-07-28',
  },
  artifacts: {
    iso: publishedIsoArtifact({
      version: '1.0.0-alpha',
      tag: LITE_RELEASE_TAG,
      editionSlug: 'lite',
      sha256: 'a0b9f7334aae474ac53cc2fb255975cb67c8727c5f409762a3a9ab3702a95691',
    }),
  },
  releasePage: {
    href: releasePageUrl(LITE_RELEASE_TAG),
  },
  verifyGuide: {
    href: VERIFY_GUIDE_HREF,
  },
} as const;

/**
 * Official editions of the Amonite product.
 * Every edition belongs to a series. Publication is per release.
 *
 * Product presentation answers only:
 *   who it is for, what makes it different / its role, and current state.
 */
export const EDITIONS = {
  lite: {
    id: 'lite',
    name: 'Lite',
    productName: 'Amonite Lite',
    seriesId: CURRENT_SERIES.id,
    status: 'published' as const satisfies EditionStatus,
    statusLabel: 'Published',
    statusDetail: 'Official edition with a published alpha release.',
    audience: 'Users who want a minimal desktop assembled from independent components.',
    difference:
      'A minimal desktop assembled from independent upstream components using standard Debian integration mechanisms, with low coupling and modularity.',
    role: null,
    isDefault: false,
    isPublic: true,
    platform: PLATFORM,
    desktop: 'Labwc',
    terminal: TERMINAL,
    installer: INSTALLER,
    capabilities: [] as const,
    cliSummary:
      'A curated command-line environment with local AI inference support.',
    validatedConfiguration: null,
    releases: {
      '1.0.0-alpha': liteAlpha1,
    },
    currentReleaseId: '1.0.0-alpha' as const,
    releaseHistory: [
      {
        editionId: 'lite',
        version: liteAlpha1.version,
        label: liteAlpha1.label,
        state: liteAlpha1.state,
        publishedAt: liteAlpha1.publication.publishedAt,
        href: liteAlpha1.releasePage.href,
        isCurrent: true,
      },
    ] as const,
  },
  standard: {
    id: 'standard',
    name: 'Standard',
    productName: 'Amonite Standard',
    seriesId: CURRENT_SERIES.id,
    status: 'published' as const satisfies EditionStatus,
    statusLabel: 'Published',
    statusDetail: 'Official edition with a published alpha release.',
    audience:
      'The default edition for users who need a complete desktop experience for desktop work, development, administration, and local AI.',
    difference:
      'A curated Debian desktop with complete XFCE integration, while remaining lightweight and maintainable.',
    role: null,
    isDefault: true,
    isPublic: true,
    platform: PLATFORM,
    desktop: DESKTOP,
    terminal: TERMINAL,
    installer: INSTALLER,
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
    releases: {
      '1.0.0-alpha.2': standardAlpha2,
      '1.0.0-alpha': standardAlpha1,
    },
    currentReleaseId: '1.0.0-alpha.2' as const,
    releaseHistory: [
      {
        editionId: 'standard',
        version: standardAlpha2.version,
        label: standardAlpha2.label,
        state: standardAlpha2.state,
        publishedAt: standardAlpha2.publication.publishedAt,
        href: standardAlpha2.releasePage.href,
        isCurrent: true,
      },
      {
        editionId: 'standard',
        version: standardAlpha1.version,
        label: standardAlpha1.label,
        state: standardAlpha1.state,
        publishedAt: standardAlpha1.publication.publishedAt,
        href: standardAlpha1.releasePage.href,
        isCurrent: false,
      },
    ] as const,
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    productName: 'Amonite Pro',
    seriesId: CURRENT_SERIES.id,
    status: 'planned' as const satisfies EditionStatus,
    statusLabel: 'Planned',
    statusDetail: 'Internal edition. Not publicly announced.',
    audience: null,
    difference: null,
    role: null,
    isDefault: false,
    isPublic: false,
    platform: PLATFORM,
    desktop: null,
    terminal: null,
    installer: null,
    capabilities: [] as const,
    cliSummary: null,
    validatedConfiguration: null,
    releases: {} as const,
    currentReleaseId: null,
    releaseHistory: [] as const,
  },
} as const;

export type EditionId = keyof typeof EDITIONS;

/** Full product catalog order, including internal editions. */
export const PRODUCT_EDITION_ORDER = ['lite', 'standard', 'pro'] as const satisfies readonly EditionId[];

/** Release-oriented order for downloadable media (includes internal editions). */
export const RELEASE_EDITION_ORDER = ['standard', 'lite', 'pro'] as const satisfies readonly EditionId[];

export const DEFAULT_EDITION_ID: EditionId = 'standard';
export const DEFAULT_EDITION = EDITIONS[DEFAULT_EDITION_ID];
export const CURRENT_RELEASE =
  DEFAULT_EDITION.releases[DEFAULT_EDITION.currentReleaseId];

export const isoEvidenceReady = isPublishedRelease(CURRENT_RELEASE);

function projectEdition(id: EditionId) {
  const edition = EDITIONS[id];
  const series = SERIES[edition.seriesId];
  const currentRelease =
    edition.currentReleaseId === null
      ? null
      : edition.releases[edition.currentReleaseId as keyof typeof edition.releases];

  return {
    id: edition.id,
    name: edition.name,
    productName: edition.productName,
    seriesId: edition.seriesId,
    series: series.codename,
    majorVersion: series.majorVersion,
    status: edition.status,
    statusLabel: edition.statusLabel,
    statusDetail: edition.statusDetail,
    audience: edition.audience,
    difference: edition.difference,
    role: edition.role,
    isDefault: edition.isDefault,
    isPublic: edition.isPublic,
    currentRelease: currentRelease
      ? {
          state: currentRelease.state,
          version: currentRelease.version,
          tag: currentRelease.tag,
          seriesId: currentRelease.seriesId,
          series: SERIES[currentRelease.seriesId].codename,
          title: currentRelease.title,
          label: currentRelease.label,
          summary: currentRelease.summary,
          highlights: currentRelease.notes.highlights,
          direction:
            'direction' in currentRelease.notes
              ? currentRelease.notes.direction
              : null,
          evaluationNotice: currentRelease.evaluationNotice,
          publishedAt: currentRelease.publication.publishedAt,
          isoFileName: currentRelease.artifacts.iso.filename,
          isoUrl: currentRelease.artifacts.iso.href,
          sha256: currentRelease.artifacts.iso.evidence.sha256,
          verifyGuideHref: currentRelease.verifyGuide.href,
          releasePageHref: currentRelease.releasePage.href,
        }
      : null,
  };
}

function isPublicEdition(id: EditionId): boolean {
  return EDITIONS[id].isPublic;
}

/** Public editions for product-first presentation. */
export const PUBLIC_EDITIONS = PRODUCT_EDITION_ORDER.filter(isPublicEdition).map(
  projectEdition,
);

/** Public editions for release-oriented pages such as Downloads. */
export const RELEASE_EDITIONS = RELEASE_EDITION_ORDER.filter(isPublicEdition).map(
  projectEdition,
);

/**
 * Compatibility projection used by existing pages.
 * Reflects the default public edition (Standard) and its current published release.
 */
export const DISTRIBUTION = {
  name: PRODUCT.name,
  editionId: DEFAULT_EDITION.id,
  editionName: DEFAULT_EDITION.name,
  seriesId: CURRENT_SERIES.id,
  series: CURRENT_SERIES.codename,
  majorVersion: CURRENT_SERIES.majorVersion,
  stage: CURRENT_RELEASE.stage,
  release: CURRENT_RELEASE.version,
  releaseTag: CURRENT_RELEASE.tag,
  releaseTitle: CURRENT_RELEASE.title,
  releaseLabel: CURRENT_RELEASE.label,
  releaseSummary: CURRENT_RELEASE.summary,
  releaseState: CURRENT_RELEASE.state,
  supportStatus: CURRENT_RELEASE.supportStatus,
  releaseNotes: {
    highlights: CURRENT_RELEASE.notes.highlights,
    whatsNew: CURRENT_RELEASE.notes.whatsNew,
    notes: CURRENT_RELEASE.evaluationNotice,
  },
  releaseDate: CURRENT_RELEASE.publication.publishedAt,
  isoFileName: CURRENT_RELEASE.artifacts.iso.filename,
  isoUrl: CURRENT_RELEASE.artifacts.iso.href,
  releaseArtifact: {
    sizeBytes: CURRENT_RELEASE.artifacts.iso.evidence.sizeBytes,
    sha256: CURRENT_RELEASE.artifacts.iso.evidence.sha256,
  },
  platform: DEFAULT_EDITION.platform,
  desktop: DEFAULT_EDITION.desktop,
  terminal: DEFAULT_EDITION.terminal,
  installer: DEFAULT_EDITION.installer,
  sourceUrl: PRODUCT.sourceUrl,
  communityUrl: PRODUCT.communityUrl,
  downloadUrl: PRODUCT.downloadUrl,
  sponsorsUrl: PRODUCT.sponsorsUrl,
  tagline: PRODUCT.tagline,
  selectionPrinciple: PRODUCT.selectionPrinciple,
  capabilities: DEFAULT_EDITION.capabilities,
  cliSummary: DEFAULT_EDITION.cliSummary,
  validatedConfiguration: DEFAULT_EDITION.validatedConfiguration,
  /** Edition-specific history for Standard. */
  releaseHistory: DEFAULT_EDITION.releaseHistory,
  artifacts: {
    verifyGuide: CURRENT_RELEASE.verifyGuide,
    releaseNotes: CURRENT_RELEASE.releasePage,
    installGuide: PRODUCT.docs.installGuide,
    iso: CURRENT_RELEASE.artifacts.iso,
  },
} as const;

/** @deprecated Prefer isoEvidenceReady. Kept for existing imports. */
export const artifactsReady = isoEvidenceReady;
