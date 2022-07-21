import { FC } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { PATHS } from "enums";
import { NotFound } from "pages/not-found";
import { Home } from "pages/home";
import { SelectDriver } from "pages/select-driver";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path={PATHS.HOME} element={<Home />} />
    <Route path={PATHS.SELECT_DRIVER} element={<SelectDriver />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
  </ReactRoutes>
);
