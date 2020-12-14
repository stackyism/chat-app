import React from 'react';
import { render, screen } from '@testing-library/react';
import Chat from './../Chat';

test('renders learn react link', () => {
  render(<Chat />);
  const linkElement = screen.getByText(/chat/i);
  expect(linkElement).toBeInTheDocument();
});
