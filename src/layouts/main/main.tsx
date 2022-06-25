import { FC, ReactNode } from "react";
import { Header } from "components/header";
import { Footer } from "components/footer";

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
