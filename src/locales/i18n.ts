import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) 
  .use(initReactI18next) 
  .init({
    supportedLngs: ["en", "sq"], 
    fallbackLng: "en", 
    backend: {
      loadPath: "/locales/{{lng}}.json", 
    },
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      caches: [], 
    },
    react: {
      useSuspense: false, 
    },
  });


export default i18n;
