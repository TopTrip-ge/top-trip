import { FC, ReactNode } from "react";
import { createTheme as createMUITheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { orange } from "@mui/material/colors";

// TODO(Pavel Sokolov): Add MUI theme here too
export const createMainTheme = () => ({
  colors: {
    white: "#fff",
    black: "#000",
    primary: orange[400],
    primaryLight: orange[300],
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

const theme = createMainTheme();
const muiTheme = createMUITheme({
  palette: {
    primary: {
      main: theme.colors.primary,
      light: theme.colors.primaryLight,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: theme.colors.primaryLight,
          },
        },
      },
    },
  },
});

interface Props {
  children: ReactNode;
}

export const MainThemeProvider: FC<Props> = ({ children }) => (
  <MUIThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MUIThemeProvider>
);
