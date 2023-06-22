import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import Navbar from '../Navbar';

describe('Navbar Component Testing', () => {
  test('Navebar Screenshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders Navbar component text', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    const linkElement = tree.getByText('CAR RENT');
    expect(linkElement).toBeInTheDocument();
  });
});
