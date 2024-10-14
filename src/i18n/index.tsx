import i18nextConfig from "next-i18next.config";
export const DEFAULT_LOCALE = "ja";
export const getI18nPaths = () =>
  i18nextConfig.i18n.locales
    .filter((lng) => lng !== DEFAULT_LOCALE)
    .map((lng) => ({
      params: {
        locale: lng,
      },
    }));
