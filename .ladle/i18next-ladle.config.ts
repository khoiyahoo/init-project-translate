import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

i18n
  .use(Backend) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .init({
    fallbackLng: "ja",
    debug: true,
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
