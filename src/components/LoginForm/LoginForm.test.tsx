import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from '.';

describe('LoginForm', () => {
  test('renders without error', () => {
    render(<LoginForm />);
  });
});
