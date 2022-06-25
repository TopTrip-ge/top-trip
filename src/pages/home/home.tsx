import { FC } from "react";
import { MainLayout } from "layouts/main";
import { useHome } from "./hooks";
import { PopularDestinations, Search, SearchAnchor, WhyUs, AboutUs, Faq } from "./components";

export const Home: FC = () => {
  const { searchProps } = useHome();

  return (
    <MainLayout>
      <Search {...searchProps} />
      <PopularDestinations />
      <AboutUs />
      <WhyUs />
      <Faq />
      <SearchAnchor />
    </MainLayout>
  );
};
