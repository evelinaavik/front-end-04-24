import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ee: {
        translation: {
              "avaleht": "Avaleht",
              "uudised": "Uudised",
              "kontakt": "Kontakt",
              "info": "Info meist",

        }
    },

    en: {
        translation: {
              "avaleht": "Home Page",
              "uudised": "News",
              "kontakt": "Contact",
              "info": "About us",

        }
    },

    fi: {
        translation: {
              "avaleht": "Koisivu",
              "uudised": "Uutiset",
              "kontakt": "Ottaa yhteyttä",
              "info": "Meistä",

        }
    },

    lv: {
        translation: {
              "avaleht": "Mājas lapa",
              "uudised": "Zinas",
              "kontakt": "Kontakti",
              "info": "Par mums",

        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee",
    // fallbackLng: 'en',
    // debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;