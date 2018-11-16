import { SETCLIST, ADDTOCLIST } from '../constants';

const initialSetCurrencyList = [];

<<<<<<< HEAD:cripto/src/redusers/setCurrencyList.js
export default (currencyList = initialSetCurrencyList, action) => {
=======
export default (currencyList = initialSetCList, action) => {
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/redusers/setCurrencyList.js
    const {type, payload} = action;
    switch (type) {
        case SETCLIST: return (payload instanceof Array) ? [...payload] : [payload];
        case ADDTOCLIST: return [...currencyList, payload];
        default: return currencyList;
    }
}