import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import Reserve from '../Reserve';

test('Reserve component matches snapshot', () => {
  const user = { id: '123' }; // Set the desired user ID here
  const localStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify(user)),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    </Provider>,

  );
  expect(asFragment()).toMatchSnapshot();
});
