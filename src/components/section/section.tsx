import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

interface Props extends BoxProps {
  children: ReactNode;
}

export const Section = styled(({ children, ...rest }: Props) => (
  <Box component="section" sx={{ py: 5 }} {...rest}>
    {children}
  </Box>
))`` as StyledComponent<"section", DefaultTheme, Props, never>;
