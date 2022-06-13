import { FC } from "react";
import { Box } from "components/container";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <Box elementType="header">
    <Navbar />
  </Box>
);
