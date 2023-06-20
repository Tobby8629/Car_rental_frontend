import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Redux/store';
import MyReservation from '../MyReservation';

test('MyReservation component matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <MyReservation />
      </BrowserRouter>
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
