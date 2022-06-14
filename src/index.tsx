import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PATHS } from "enums/paths";
import { ErrorBoundary } from "components/error-boundary";
import { FirebaseProvider, firebaseInstances } from "firebase-common";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/app";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={PATHS.HOME}>
      <FirebaseProvider firebaseInstances={firebaseInstances}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
