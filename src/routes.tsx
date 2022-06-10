import { PATHS } from "enums/paths";
import { Home } from "pages/home";
import { PopularDestinations } from "pages/popular-destinations";
import { FC } from "react";
import { Route, Routes as ReactRoutes } from "react-router";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path={PATHS.HOME} element={<Home />} />
    <Route
      path={PATHS.POPULAR_DESTINATIONS}
      element={<PopularDestinations />}
    />
  </ReactRoutes>
);
