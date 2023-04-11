import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: [
        'htmlTag',
        'querystring',
        'cookie',
        'localStorage',
        'path',
        'subdomain',
      ],
    },
  });

export default i18n;
