import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders LeoniLabs Searcher header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LeoniLabs Searcher/i);
  expect(linkElement).toBeInTheDocument();
});
