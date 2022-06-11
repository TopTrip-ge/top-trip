import { FC, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const createMainTheme = (): DefaultTheme => ({
  colors: {
    black: "#000",
    primary: "#feaa58",
  },
  fontFamilies: {
    OpenSans: "'Open Sans', sans-serif",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
});

interface Props {
  children: ReactNode;
}

export const MainThemeProvider: FC<Props> = ({ children }) => (
  <ThemeProvider theme={createMainTheme()}>{children}</ThemeProvider>
);
