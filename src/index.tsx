import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/app";
import { PATHS } from "enums/paths";
import { FirebaseProvider, firebaseInstances } from "./firebase";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={PATHS.HOME}>
      <FirebaseProvider firebaseInstances={firebaseInstances}>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
