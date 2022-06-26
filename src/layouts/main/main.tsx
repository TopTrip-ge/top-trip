import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { LOCALIZATION_NAMESPACES } from "enums/localization";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.GLOSSARY);

  return (
    <>
      <Helmet>
        <title>{t("tab-title")}</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};
