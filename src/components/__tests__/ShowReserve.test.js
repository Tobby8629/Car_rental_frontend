import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Showreserve from '../Showreserve';
import store from '../../Redux/store';

test('Showreserve component matches snapshot', () => {
  const user = { id: '123' }; // Set the desired user ID here
  const car = { id: '456', photo: 'car-photo.jpg' }; // Set the desired car ID and photo here

  // Mock localStorage methods
  const localStorageMock = {
    getItem: jest.fn().mockImplementation((key) => {
      if (key === 'token') {
        return JSON.stringify(user);
      } if (key === 'car') {
        return JSON.stringify(car);
      }
      return null;
    }),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Showreserve />
      </BrowserRouter>
    </Provider>,
  );
});
