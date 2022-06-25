import { FC, ReactNode } from "react";
import { Header, Footer } from "components";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
