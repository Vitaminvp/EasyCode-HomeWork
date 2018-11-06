import { combineReducers } from 'redux';
import counter from './counter';
import currency from './currency';
import current from './currency';
import value from './currency';

export default combineReducers({
    counter,
    currency,
    current,
    value
});