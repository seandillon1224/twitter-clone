import React from 'react';
import { render } from "utils/test-utils";
import LoginForm from '.';

describe('LoginForm', () => {
  test('renders without error', () => {
    render(<LoginForm />);
  });
});
