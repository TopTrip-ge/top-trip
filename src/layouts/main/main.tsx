import { FC, ReactNode } from "react";
import { Header } from "components/header";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
