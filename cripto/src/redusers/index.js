import { combineReducers } from 'redux';
import counter from './counter';
import currency from './currency';
import current from './current';
import value from './value';

export default combineReducers({
    counter,
    currency,
    current,
    value
});