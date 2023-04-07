import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Test: 'TestEN',
    },
  },
  pl: {
    translation: {
      Test: 'TestPL',
    },
  },
};

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
