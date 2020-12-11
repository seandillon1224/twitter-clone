import React from "react";
import { render } from "@testing-library/react";
import Test from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

describe("Test", () => {
  test("renders without error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Test />
      </ThemeProvider>
    );
  });
});
