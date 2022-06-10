import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { FirebaseProvider, firebaseInstances } from "./firebase";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <FirebaseProvider firebaseInstances={firebaseInstances}>
      <App />
    </FirebaseProvider>
  </StrictMode>
);

reportWebVitals();
