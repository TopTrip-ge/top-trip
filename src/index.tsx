import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PATHS } from "enums";
import { ErrorBoundary } from "components/error-boundary";
import { FirebaseProvider, firebaseInstances } from "firebase-common";
import { MainThemeProvider } from "theme";
import { App } from "components/app";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={PATHS.HOME}>
      <FirebaseProvider firebaseInstances={firebaseInstances}>
        <MainThemeProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </MainThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
