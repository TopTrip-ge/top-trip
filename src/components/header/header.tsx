import { FC } from "react";
import Box from "@mui/material/Box";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <Box component="header" sx={{ padding: "12px" }}>
    <Navbar />
  </Box>
);
