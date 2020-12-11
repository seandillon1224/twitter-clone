import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const ThemeProviderWrapper: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
