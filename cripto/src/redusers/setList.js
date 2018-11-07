import { SETLIST, ADDTOLIST, DELFROMLIST } from '../constants';

const initialSetList = [];

export default (list = initialSetList, action) => {
    const {type, payload} = action;
    switch (type) {
        case SETLIST: return [...payload];
        case ADDTOLIST: return [...list, payload];
        case DELFROMLIST: return [...payload];
        default: return list;
    }
}