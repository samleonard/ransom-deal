import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders learn react link', () => {
  render(<About />);
  const textElement = screen.getByText(/Hi, this is a website./i);
  expect(textElement).toBeInTheDocument();
});
