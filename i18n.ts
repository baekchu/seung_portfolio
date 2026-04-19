import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const savedLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const locale = (savedLocale === 'en' || savedLocale === 'kr') ? savedLocale : 'kr';

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    return {
      locale,
      messages
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const messages = (await import('./messages/kr.json')).default;
    return {
      locale: 'kr',
      messages
    };
  }
});
