import { FC, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const createMainTheme = (): DefaultTheme => ({
  colors: {
    black: "#000",
    red: "#ff0000",
  },
});

interface Props {
  children: ReactNode;
}

export const MainThemeProvider: FC<Props> = ({ children }) => (
  <ThemeProvider theme={createMainTheme()}>{children}</ThemeProvider>
);
