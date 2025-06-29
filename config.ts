export type Locale = (typeof locales)[number];

export const locales = ['en', 'kr'] as const;
export const defaultLocale: Locale = 'kr';
