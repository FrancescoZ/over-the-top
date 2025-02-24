import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import itTranslations from './translations/it.json';

i18n.use(initReactI18next).init({
  resources: {
    it: {
      translation: itTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  lng: 'it',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
