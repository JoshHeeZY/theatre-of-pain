export const SITE_TITLE = 'Theatre of Pain';
export const SITE_TAGLINE = 'A Manchester United fan blog. Hope, despair, and everything in between.';
export const SITE_DESCRIPTION =
  'Unofficial Manchester United fan blog: match reports, transfer talk, opinion and history from the Stretford End of the internet.';

export const CATEGORIES = {
  'match-reports': { label: 'Match Reports', blurb: 'Ninety minutes (plus stoppage time, obviously) of reaction.' },
  transfers: { label: 'Transfer Talk', blurb: 'Rumours, ITKs and the annual summer of hope.' },
  opinion: { label: 'Opinion', blurb: 'Hot takes, cold takes and lukewarm despair.' },
  history: { label: 'History', blurb: 'For when the present is too much to bear.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];
