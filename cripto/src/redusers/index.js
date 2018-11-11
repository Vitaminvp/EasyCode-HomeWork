import { combineReducers } from 'redux';
import counter from './counter';
import currency from './currency';
import current from './current';
import value from './value';
import list from './setList';
import coins from './getCoins';
import curlist from './setCList';
import currencyRate from './getCurrency';

export default combineReducers({
    counter,
    currency,
    current,
    value,
    list,
    curlist,
    coins,
    currencyRate
});