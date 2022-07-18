import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "components/error-boundary";
import { App } from "components/app";
import { FirebaseProvider, firebaseInstances } from "firebase-common";
import { FullPageSpinner } from "components/full-page-spinner";
import { PATHS } from "enums";
import { MainThemeProvider } from "theme";
import { Modules } from "modules";
import reportWebVitals from "./reportWebVitals";
import "localization/i18n";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={PATHS.HOME}>
      <FirebaseProvider firebaseInstances={firebaseInstances}>
        <MainThemeProvider>
          <ErrorBoundary>
            <Modules>
              <Suspense fallback={<FullPageSpinner />}>
                <RecoilRoot>
                  <App />
                </RecoilRoot>
              </Suspense>
            </Modules>
          </ErrorBoundary>
        </MainThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
