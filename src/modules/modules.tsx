import { FC, ReactNode } from "react";
import { YandexMapScript } from "./yandex-map";

interface Props {
  children: ReactNode;
}

export const Modules: FC<Props> = ({ children }) => (
  <>
    <YandexMapScript />
    {children}
  </>
);
