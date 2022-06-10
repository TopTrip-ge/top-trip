import { FC } from "react";
import { Route, Routes } from "react-router";
import { PATHS } from "enums/paths";
import { Home } from "pages/home";
import { PopularDestinations } from "pages/popular-destinations";
import "./app.css";

export const App: FC = () => (
  <div className="App">
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route
        path={PATHS.POPULAR_DESTINATIONS}
        element={<PopularDestinations />}
      />
    </Routes>
  </div>
);
