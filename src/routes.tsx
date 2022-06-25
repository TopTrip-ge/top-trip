import { FC } from "react";
import { Route, Routes as ReactRoutes } from "react-router";
import { PATHS } from "enums";
import { Home } from "pages/home";
import { NotFound } from "pages/not-found";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path={PATHS.HOME} element={<Home />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
  </ReactRoutes>
);
