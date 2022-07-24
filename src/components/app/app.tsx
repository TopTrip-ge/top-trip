import { FC } from "react";
import { Routes } from "routes";
import { SearchDriversProvider } from "components/search-drivers";
import { GlobalStyle } from "./app-style";

export const App: FC = () => (
  <>
    <GlobalStyle />
    <SearchDriversProvider>
      <Routes />
    </SearchDriversProvider>
  </>
);
