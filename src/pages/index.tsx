import HomeContainer from "@src/container/HomeContainer";
import { DEFAULT_LOCALE } from "@src/i18n";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Home = () => <HomeContainer />;
export default Home;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = (ctx?.params?.locale || DEFAULT_LOCALE) as string;
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
};
