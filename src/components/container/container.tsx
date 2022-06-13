import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => (
  <Box sx={{ maxWidth: "1200px", boxSizing: "border-box", margin: "0 auto", padding: "0 12px" }}>{children}</Box>
);
