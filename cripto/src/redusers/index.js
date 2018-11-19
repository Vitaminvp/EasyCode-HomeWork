import { combineReducers } from 'redux';
import counter from './counter';
import currencyAll from './currencyAll';
import currentCurrency from './currentCurrency';
import currentCoin from './currentCoin';
import list from './setCoinsList';
import filteredCoinsList from './setFilteredCoinsList';
import coins from './getCoins';
import currencyList from './setCurrencyList';
import currencyRate from './getCurrency';

export default combineReducers({
    counter,
    currencyAll,
    currentCurrency,
    currentCoin,
    list,
    filteredCoinsList,
    currencyList,
    coins,
    currencyRate
});