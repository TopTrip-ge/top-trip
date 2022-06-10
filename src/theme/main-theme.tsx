import { FC, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const createMainTheme = (): DefaultTheme => ({
  colors: {
    black: "#000",
    orange: "#feaa58",
  },
});

interface Props {
  children: ReactNode;
}

export const MainThemeProvider: FC<Props> = ({ children }) => (
  <ThemeProvider theme={createMainTheme()}>{children}</ThemeProvider>
);
