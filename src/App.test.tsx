import React from 'react';
import { fireEvent, render ,screen} from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render (
    <App />
  )
});

test('renders button', () => {
  
  const textLogin = screen.getByText("Login");
  expect(textLogin).toBeInTheDocument();
});