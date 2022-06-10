import { FC, ReactNode } from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Header } from "components/header";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
  </Layout>
);
