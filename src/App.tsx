import { FC } from "react";
import { Routes } from "routes";
import { MainThemeProvider } from "theme";
import "./app.css";
console.log("foofdfdffd");
export const App: FC = () => (
  <div className="App">
    <MainThemeProvider>
      <Routes />
    </MainThemeProvider>
  </div>
);
