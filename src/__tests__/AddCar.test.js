import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddCar from '../components/AddCar';
import React from 'react';

test('AddCar component matches snapshot', () => {
  const user = { id: '123' }; // Set the desired user ID here
  const localStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify(user)),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  const { asFragment } = render(<AddCar />);
  expect(asFragment()).toMatchSnapshot();
});


  test('renders AddCar component text', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCar />
        </BrowserRouter>
      </Provider>,
    );
    const linkElement = tree.getByText('Add New Car');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders AddCar component text', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCar />
        </BrowserRouter>
      </Provider>,
    );
    const linkElement = tree.getByPlaceholderText('Enter Car Name');
    expect(linkElement).toBeInTheDocument();
  });

