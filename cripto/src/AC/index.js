import { INCREMENT } from '../constants';
import { CURRENCY } from '../constants';
import { CURRENT } from '../constants';
import { VALUE } from '../constants';

export function increment(data) {
    return {
        type: INCREMENT,
        payload: data
    }
}

export function currency(data) {
    return {
        type: CURRENCY,
        payload: data
    }
}
export function current(data) {
    return {
        type: CURRENT,
        payload: data
    }
}
export function value(data) {
    return {
        type: VALUE,
        payload: data
    }
}

// export const boundIncrement = data => dispatch => dispatch(increment(data));