import { FC } from "react";
import { MainLayout } from "layouts/main";
import { useHome } from "./hooks";
import { PopularDestinations, Search, WhyUs } from "./components";

export const Home: FC = () => {
  const { searchProps } = useHome();

  return (
    <MainLayout>
      <Search {...searchProps} />
      <WhyUs />
      <PopularDestinations />
    </MainLayout>
  );
};
