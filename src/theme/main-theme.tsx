import { FC, ReactNode } from "react";
import { createTheme as createMUITheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { orange } from "@mui/material/colors";

/**
 * For future updates:
 * 1) Add a new property to the theme
 * 2) Add this property to the MUI-theme to use it in MUI-components
 *  (https://mui.com/material-ui/customization/theming/)
 */

declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom: {
      white: string;
      grey: string;
      black: string;
      orange: string;
      lightGrey: string;
      red: string;
    };
  }
}

export const createMainTheme = () => ({
  colors: {
    white: "#fff",
    black: "#000",
    primary: orange[400],
    primaryLight: orange[300],
    grey: "#adadad",
    lightGrey: "#d0d0d0",
    red: "#d90e0b",
  },
  fontFamilies: {
    OpenSans: "'Open Sans', sans-serif",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  devices: {
    mobileL: "425px",
    mobileM: "375px",
  },
});

const theme = createMainTheme();
const muiTheme = createMUITheme({
  palette: {
    primary: {
      main: theme.colors.primary,
      light: theme.colors.primaryLight,
    },
    custom: {
      white: theme.colors.white,
      grey: theme.colors.grey,
      black: theme.colors.black,
      orange: theme.colors.primary,
      lightGrey: theme.colors.lightGrey,
      red: theme.colors.red,
    },
  },
  typography: {
    fontFamily: theme.fontFamilies.OpenSans,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.primary,
          color: theme.colors.white,
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
