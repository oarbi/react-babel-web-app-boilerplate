import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    fallbackLng: 'en',
    load: 'languageOnly',
    supportedLngs: ['en', 'fr'],
    detection: {
      order: ['cookie', 'navigator'],
      lookupCookie: 'language',
      caches: ['cookie'],
    },
    backend: {},
  });
