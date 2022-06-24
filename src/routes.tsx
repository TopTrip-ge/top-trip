import { FC } from "react";
import { Route, Routes as ReactRoutes } from "react-router";
import { PATHS } from "enums";
import { Home } from "pages/home";
import { NotFound } from "pages/not-found";
import { PopularDestinations } from "pages/popular-destinations";
import { AboutUs } from "pages/about-us/about-us";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path={PATHS.HOME} element={<Home />} />
    <Route path={PATHS.POPULAR_DESTINATIONS} element={<PopularDestinations />} />
    <Route path={PATHS.ABOUT_US} element={<AboutUs />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
  </ReactRoutes>
);
