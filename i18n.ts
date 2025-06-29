import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from './services/locale';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to default locale
    return {
      locale: 'kr',
      messages: (await import(`./messages/kr.json`)).default
    };
  }
});
