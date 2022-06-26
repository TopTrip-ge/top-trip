import { FC } from "react";
import { MainLayout } from "layouts/main";
import { PopularDestinations, Search, SearchAnchor, WhyUs, AboutUs, Faq } from "./components";

export const Home: FC = () => (
  <MainLayout>
    <Search />
    <PopularDestinations />
    <AboutUs />
    <WhyUs />
    <Faq />
    <SearchAnchor />
  </MainLayout>
);
