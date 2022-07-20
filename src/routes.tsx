import { FC } from "react";
import { Route, Routes as ReactRoutes } from "react-router";
import { PATHS } from "enums";
import { Home } from "pages/home";
import { NotFound } from "pages/not-found";
import { SelectDriver } from "pages/select-driver";

export const Routes: FC = () => (
  <ReactRoutes>
    <Route path={PATHS.HOME} element={<Home />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
    <Route path={PATHS.SELECT_DRIVER} element={<SelectDriver />} />
  </ReactRoutes>
);
