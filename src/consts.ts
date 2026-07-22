/**
 * Website metadata. Distribution facts: ./data/distribution.ts
 */
import { DISTRIBUTION } from './data/distribution';

export const SITE_TITLE = 'Amonite';
export const SITE_AUTHOR = 'Manuel Gil';
export const SITE_AUTHOR_URL = 'https://imgil.dev/';

export const SITE_DESCRIPTION = `${DISTRIBUTION.name} ${DISTRIBUTION.series} (${DISTRIBUTION.stage}): ${DISTRIBUTION.tagline}`;

export const SOURCE_URL = DISTRIBUTION.sourceUrl;
export const COMMUNITY_URL = DISTRIBUTION.communityUrl;
export const DOWNLOAD_URL = DISTRIBUTION.downloadUrl;
export const SPONSORS_URL = DISTRIBUTION.sponsorsUrl;

/** JSON-LD describing the distribution itself. Used on pages where the product is the main subject. */
export const SOFTWARE_APPLICATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: DISTRIBUTION.name,
  description: DISTRIBUTION.tagline,
  applicationCategory: 'OperatingSystem',
  operatingSystem: 'Linux',
  softwareVersion: DISTRIBUTION.release,
  datePublished: '2026-07-22',
  downloadUrl: DISTRIBUTION.isoUrl,
  releaseNotes: DISTRIBUTION.artifacts.releaseNotes.href,
  author: {
    '@type': 'Person',
    name: SITE_AUTHOR,
    url: SITE_AUTHOR_URL,
  },
  sameAs: [DISTRIBUTION.sourceUrl, DISTRIBUTION.communityUrl],
} as const;

export { DISTRIBUTION };
