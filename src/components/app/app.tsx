import { FC } from "react";
import { Routes } from "routes";
import { GlobalStyle } from "./app-style";

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);
