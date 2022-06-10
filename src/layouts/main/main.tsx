import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Header } from "components/header";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
  </Layout>
);
