import { FC, ReactNode } from "react";
import { Box as MUIBox } from "@mui/material";

interface Props {
  children: ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
}

export const Box: FC<Props> = ({ children, elementType }) => (
  <MUIBox
    component={elementType}
    sx={{ maxWidth: "1200px", boxSizing: "border-box", margin: "0 auto", padding: "0 12px" }}
  >
    {children}
  </MUIBox>
);
