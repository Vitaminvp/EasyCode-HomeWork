import { CURRENT } from '../constants';

const initialCurrent = '';


export default (current = initialCurrent, action) => {
    const {type} = action;
    switch (type) {
        case CURRENT: return action.payload;
        default: return currency;
    }
}
