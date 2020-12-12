import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

// eslint-disable-next-line react/prop-types
const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: ThemeWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
