import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es';

import { languages } from '../constants';

const resources = {
  es: {
    translation: es
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: languages.ES,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
