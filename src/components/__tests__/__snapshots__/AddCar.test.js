import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../../Redux/store';
import AddCar from '../../AddCar';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><AddCar/></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});