import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../Redux/store';
import DeleteCar from '../DeleteCar';

test('home component match snapshot', () => {
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
        <DeleteCar />
      </BrowserRouter>
    </Provider>,

  );
  expect(asFragment()).toMatchSnapshot();
});
