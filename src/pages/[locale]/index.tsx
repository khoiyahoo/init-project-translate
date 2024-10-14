import HomeContainer from "@src/container/HomeContainer";
import { getI18nPaths } from "@src/i18n";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Homepage = () => <HomeContainer />;
export default Homepage;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx?.params?.locale as string;
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "home"])) },
  };
};
export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});
