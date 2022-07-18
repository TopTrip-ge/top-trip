import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

interface Props {
  children: ReactNode;
}

export const YandexMapScript: FC<Props> = ({ children }) => (
  <>
    <Helmet>
      <script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_YANDEX_MAP_KEY}&lang=ru_RU`}
        type="text/javascript"
      />
    </Helmet>
    {children}
  </>
);
