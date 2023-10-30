import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './languages/en.json';
import tr from './languages/tr.json';


const resources = {
  en,
  tr
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
