import React from "react";
import { render } from "utils/test-utils";
import Button from ".";

describe("Button", () => {
  test("renders without error", () => {
    render(<Button />);
  });
});
