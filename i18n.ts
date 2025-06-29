import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'kr'; // default locale for static generation

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    return {
      locale,
      messages
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to empty messages
    return {
      locale: 'kr',
      messages: {}
    };
  }
});
