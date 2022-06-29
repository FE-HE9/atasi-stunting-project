import React from 'react';
import { render ,screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';

beforeEach(() => {
  render (
    <Provider store={store}>
      <ChakraProvider theme = {theme}>
        <App />
      </ChakraProvider>
    </Provider>
  )
});

test('renders button', () => {
  
  const textLogin = screen.getByText("Login");
  expect(textLogin).toBeInTheDocument();
});
