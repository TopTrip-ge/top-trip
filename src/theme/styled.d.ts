import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<string, string>;
    fontFamilies: Record<string, string>;
    fontWeights: Record<string, number>;
    devices: Record<string, string>;
  }
}
