import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Reserve from '../../Reserve';
import store from '../../../Redux/store';

test('home component match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Reserve /></Provider>).toJSON;
  expect(tree).toMatchSnapshot();
});