import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App";
import "./index.css";

import { FirebaseProvider, firebaseInstances } from "./firebase";

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
