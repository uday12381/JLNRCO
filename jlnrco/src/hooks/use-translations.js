import translations from "../config/translations";

export function useTranslations() {
  return function (key) {
    return translations[key];
  };
}

export default useTranslations;
