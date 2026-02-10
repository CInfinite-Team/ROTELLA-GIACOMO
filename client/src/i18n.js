import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en', // default language
        supportedLngs: ['en', 'it', 'de', 'fr', 'es'],
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: ['translation', 'maas'],
        defaultNS: 'translation',
        react: {
            useSuspense: true,
        }
    });

export default i18n;
