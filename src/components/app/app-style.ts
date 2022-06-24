import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme: { fontFamilies } }) => fontFamilies.OpenSans};

    #root {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
`;
