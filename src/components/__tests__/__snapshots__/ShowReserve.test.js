import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ShowReserve from '../../ShowReserve';
import store from '../../../Redux/store';

test('ShowReserve component matches snapshot', () => {
  const user = { id: '123' };
  const car = { id: '123' }; // Set the desired user ID here
  const localStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify(user, car)),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ShowReserve />
      </BrowserRouter>
    </Provider>,

  );
  expect(asFragment()).toMatchSnapshot();
});
