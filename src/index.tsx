import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/app";
import "./app-style.ts";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={"/"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
