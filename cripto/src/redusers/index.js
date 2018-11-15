import { combineReducers } from 'redux';
import counter from './counter';
import currencyAll from './currencyAll';
import currentCurrency from './currentCurrency';
import currentCoin from './currentCoin';
import list from './setCoinsList';
import coins from './getCoins';
import currencyList from './setCurrencyList';
import currencyRate from './getCurrency';

export default combineReducers({
    counter,
    currencyAll,
    currentCurrency,
    currentCoin,
    list,
    currencyList,
    coins,
    currencyRate
});