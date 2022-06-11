import { FC } from "react";
import { Routes } from "routes";
import { MainThemeProvider } from "theme";
import { GlobalStyle } from "./app-style";

export const App: FC = () => (
  <MainThemeProvider>
    <GlobalStyle />
    <Routes />
  </MainThemeProvider>
);
