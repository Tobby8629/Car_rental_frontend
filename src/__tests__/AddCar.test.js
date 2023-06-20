import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddCar from '../components/AddCar';
import store from '../Redux/store';

describe('AddCar Component Testing', () => {
  test('AddCar Screenshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddCar />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
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
});
