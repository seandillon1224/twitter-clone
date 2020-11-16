import React from 'react';
import { render } from '@testing-library/react';
import Test from '.';

describe('Test', () => {
  test('renders without error', () => {
    render(<Test />);
  });
});
