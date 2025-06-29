import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from './services/locale';

export default getRequestConfig(async () => {
  let locale = 'kr'; // default fallback
  
  try {
    locale = await getUserLocale();
  } catch (error) {
    console.warn('Failed to get user locale, using default:', error);
  }

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    return {
      locale,
      messages
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to default locale
    try {
      const fallbackMessages = (await import(`./messages/kr.json`)).default;
      return {
        locale: 'kr',
        messages: fallbackMessages
      };
    } catch (fallbackError) {
      console.error('Failed to load fallback messages:', fallbackError);
      return {
        locale: 'kr',
        messages: {}
      };
    }
  }
});
