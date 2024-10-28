// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Add your English translations here
          blogTitle: "Blog Title",
          readMore: "Read More",
          // Add more keys as needed
        },
      },
      es: {
        translation: {
          // Add your Spanish translations here
          blogTitle: "Título del Blog",
          readMore: "Leer más",
          // Add more keys as needed
        },
      },
      // Add more languages as needed
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
