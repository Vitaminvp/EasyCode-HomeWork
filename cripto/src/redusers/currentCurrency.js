import { CURRENT } from '../constants';

const initialCurrentCurrency = '';


export default (currentCurrency = initialCurrentCurrency, action) => {
    const {type, payload} = action;
    switch (type) {
        case CURRENT: return payload;
        default: return currentCurrency;
    }
}
