/**
 * Website metadata. Distribution facts: ./data/distribution.ts
 */
import {
  artifactsReady,
  DISTRIBUTION,
  EDITIONS,
  PRODUCT,
  PUBLIC_EDITIONS,
  SERIES,
  CURRENT_SERIES,
  isoEvidenceReady,
} from './data/distribution';

export const SITE_TITLE = DISTRIBUTION.name;
export const SITE_AUTHOR = 'Manuel Gil';
export const SITE_AUTHOR_URL = 'https://imgil.dev/';

export const SITE_DESCRIPTION = `${DISTRIBUTION.name} ${DISTRIBUTION.series} (${DISTRIBUTION.stage}): ${DISTRIBUTION.tagline}`;

export const SOURCE_URL = DISTRIBUTION.sourceUrl;
export const COMMUNITY_URL = DISTRIBUTION.communityUrl;
export const DOWNLOAD_URL = DISTRIBUTION.downloadUrl;
export const SPONSORS_URL = DISTRIBUTION.sponsorsUrl;

export const SITE_URL = 'https://amonite.org/';

/** The maintainer entity. Shared by every schema that needs an author or publisher. */
export const AUTHOR_JSONLD = {
  '@type': 'Person',
  name: SITE_AUTHOR,
  url: SITE_AUTHOR_URL,
  sameAs: [DISTRIBUTION.sourceUrl],
} as const;

/** JSON-LD describing the distribution itself. Used on pages where the product is the main subject. */
export const SOFTWARE_APPLICATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: DISTRIBUTION.name,
  description: DISTRIBUTION.tagline,
  url: SITE_URL,
  image: new URL('/logo.png', SITE_URL).toString(),
  applicationCategory: 'OperatingSystem',
  operatingSystem: 'Linux',
  softwareVersion: DISTRIBUTION.release,
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  ...(DISTRIBUTION.releaseDate ? { datePublished: DISTRIBUTION.releaseDate } : {}),
  ...(DISTRIBUTION.isoUrl ? { downloadUrl: DISTRIBUTION.isoUrl } : {}),
  ...(DISTRIBUTION.artifacts.releaseNotes.href
    ? { releaseNotes: DISTRIBUTION.artifacts.releaseNotes.href }
    : {}),
  author: AUTHOR_JSONLD,
  maintainer: AUTHOR_JSONLD,
  sameAs: [DISTRIBUTION.downloadUrl, DISTRIBUTION.communityUrl],
} as const;

export {
  PRODUCT,
  SERIES,
  CURRENT_SERIES,
  EDITIONS,
  PUBLIC_EDITIONS,
  DISTRIBUTION,
  artifactsReady,
  isoEvidenceReady,
};
