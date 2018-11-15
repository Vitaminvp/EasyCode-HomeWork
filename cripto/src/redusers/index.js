import { combineReducers } from 'redux';
import counter from './counter';
import currencyAll from './currency';
import current from './current';
import value from './value';
import list from './setList';
import coins from './getCoins';
import currencyList from './setCurrencyList';
import currencyRate from './getCurrency';

export default combineReducers({
    counter,
    currencyAll,
    current,
    value,
    list,
    currencyList,
    coins,
    currencyRate
});