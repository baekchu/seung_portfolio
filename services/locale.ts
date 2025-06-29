import { Locale, defaultLocale } from "@/config";

// Client-side locale functions using localStorage
const LOCALE_KEY = "NEXT_LOCALE";

export const getUserLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  
  const stored = localStorage.getItem(LOCALE_KEY);
  return (stored as Locale) || defaultLocale;
};

export const setUserLocale = (locale: Locale): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCALE_KEY, locale);
  }
};
