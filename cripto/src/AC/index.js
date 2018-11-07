import { INCREMENT, CURRENCY, CURRENT, VALUE, SETLIST, ADDTOLIST, ADDTOCLIST, SETCLIST } from '../constants';

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
export function setList(data) {
    return {
        type: SETLIST,
        payload: data
    }
}
export function addToList(data) {
    return {
        type: ADDTOLIST,
        payload: data
    }
}

export function setCurList(data) {
    return {
        type: SETCLIST,
        payload: data
    }
}
export function addToCurList(data) {
    return {
        type: ADDTOCLIST,
        payload: data
    }
}

export const boundIncrement = data => dispatch => dispatch(increment(data));