import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import App from '../../App';

describe('App Component Testing', () => {
  test('App Screenshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    const link = tree.getByText(/CAR RENT/i);
    expect(link).toBeInTheDocument();

    const link2 = tree.getByText(/Reserve/i);
    expect(link2).toBeInTheDocument();

    const link3 = tree.getByRole('button', { name: /Login/i });
    expect(link3).toBeInTheDocument();
  });
});
