import { combineReducers } from 'redux';
import counter from './counter';
<<<<<<< HEAD
import currencyAll from './currency';
import current from './current';
import value from './value';
import list from './setList';
=======
import currencyAll from './currencyAll';
import currentCurrency from './currentCurrency';
import currentCoin from './currentCoin';
import list from './setCoinsList';
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7
import coins from './getCoins';
import currencyList from './setCurrencyList';
import currencyRate from './getCurrency';

export default combineReducers({
    counter,
    currencyAll,
<<<<<<< HEAD
    current,
    value,
=======
    currentCurrency,
    currentCoin,
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7
    list,
    currencyList,
    coins,
    currencyRate
});