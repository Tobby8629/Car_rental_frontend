import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Cars from '../../Cars';
import store from '../../../Redux/store';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Cars/></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});