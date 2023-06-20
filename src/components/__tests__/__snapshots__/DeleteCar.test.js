import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import DeletCar from '../../Cars';
import store from '../../../redux/store';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><DeletCar/></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});