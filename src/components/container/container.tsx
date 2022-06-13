import { FC, ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";

interface Props {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const Container: FC<Props> = ({ children, sx }) => (
  <Box sx={{ ...sx, maxWidth: "1200px", boxSizing: "border-box", margin: "0 auto", padding: "0 12px" }}>{children}</Box>
);
