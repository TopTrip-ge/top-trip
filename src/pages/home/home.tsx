import { FC } from "react";
import { MainLayout } from "layouts/main";
import { useHome } from "./hooks";
import { Search } from "./components/search/search";
import { WhyUs } from "./components";

export const Home: FC = () => {
  const { searchProps } = useHome();

  return (
    <MainLayout>
      <Search {...searchProps} />
      <WhyUs />
    </MainLayout>
  );
};
