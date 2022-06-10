import { FC } from "react";
import { Routes } from "routes";
import { MainThemeProvider } from "theme";
import "./app.css";
console.log("foofdfd");
export const App: FC = () => (
  <div className="App">
    <MainThemeProvider>
      <Routes />
    </MainThemeProvider>
  </div>
);
