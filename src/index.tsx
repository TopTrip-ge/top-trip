import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./app";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

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
