import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Redux/store';
import Cars from '../Cars';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Cars /></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});
