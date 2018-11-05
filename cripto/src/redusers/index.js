import {combineReducers} from 'redux';
import counter from './counter';
import coins from './coins';

export default combineReducers({
    counter,
    coins
});