import { SETCLIST, ADDTOCLIST } from '../constants';

const initialSetCurrencyList = [];

export default (currencyList = initialSetCurrencyList, action) => {
    const {type, payload} = action;
    switch (type) {
        case SETCLIST: return (payload instanceof Array) ? [...payload] : [payload];
        case ADDTOCLIST: return [...currencyList, payload];
        default: return currencyList;
    }
}