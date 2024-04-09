import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {locales} from 'utils/static';
import {getLocales} from 'react-native-localize';
import {en, id} from './languages';

i18n.use(initReactI18next).init({
  resources: {
    [locales.EN]: en,
    [locales.ID]: id,
  },
  lng: getLocales()[0].languageCode,
  fallbackLng: locales.EN,
  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
