import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders LeoniLabs Searcher header', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});

