import { VALUE } from '../constants';

const initialValue = '';


export default (value = initialValue, action) => {
    const {type} = action;
    switch (type) {
        case VALUE: return action.payload;
        default: return value;
    }
}