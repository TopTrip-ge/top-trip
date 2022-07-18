import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "components/error-boundary";
import { App } from "components/app";
import { FirebaseProvider, firebaseInstances } from "firebase-common";
import { FullPageSpinner } from "components/full-page-spinner";
import { YandexMapScript } from "components/yandex-map-script";
import { PATHS } from "enums";
import { MainThemeProvider } from "theme";
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
            <YandexMapScript>
              <Suspense fallback={<FullPageSpinner />}>
                <RecoilRoot>
                  <App />
                </RecoilRoot>
              </Suspense>
            </YandexMapScript>
          </ErrorBoundary>
        </MainThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
