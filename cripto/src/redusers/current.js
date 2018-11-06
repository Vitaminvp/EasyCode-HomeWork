import { CURRENT } from '../constants';

const initialCurrent = '';


export default (current = initialCurrent, action) => {
    const {type, payload} = action;
    switch (type) {
        case CURRENT: return payload;
        default: return current;
    }
}
