import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddCar from '../../AddCar';
import store from '../../../Redux/store';

test('AddCar component matches snapshot', () => {
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
        <AddCar />
      </BrowserRouter>
    </Provider>,

  );
  expect(asFragment()).toMatchSnapshot();
});
