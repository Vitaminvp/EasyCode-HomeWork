import {createStore} from 'redux';
import reducers from '../redusers';
const store = createStore(reducers);

window.store = store;

export default store;