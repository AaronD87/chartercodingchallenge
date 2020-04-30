import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Submit button text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
