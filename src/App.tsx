import { GlobalStyle } from "app-style";
import { FC } from "react";
import { Routes } from "routes";
import { MainThemeProvider } from "theme";

export const App: FC = () => (
  <MainThemeProvider>
    <GlobalStyle />
    <Routes />
  </MainThemeProvider>
);
