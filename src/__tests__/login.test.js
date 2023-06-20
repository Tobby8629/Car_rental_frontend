import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../components/login';
import store from '../Redux/store';

describe('Login Component Testing', () => {
  test('Login Screenshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders Login component text', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
    const linkElement = tree.getByText('Login');
    expect(linkElement).toBeInTheDocument();
  });
});
