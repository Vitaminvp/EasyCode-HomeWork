import { VALUE } from '../constants';

const initialValue = '';


export default (value = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case VALUE: return payload;
        default: return value;
    }
}