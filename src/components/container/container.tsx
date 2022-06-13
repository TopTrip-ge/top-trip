import Box from "@mui/material/Box";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
}

export const Container: FC<Props> = ({ children, elementType }) => (
  <Box
    component={elementType}
    sx={{ maxWidth: "1200px", boxSizing: "border-box", margin: "0 auto", padding: "0 12px" }}
  >
    {children}
  </Box>
);
