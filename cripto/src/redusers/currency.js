import { CURRENCY } from '../constants';

const initialCurrency = [
    {Name: 'USD', Id: '0'},
    {Name: 'EUR', Id: '1'},
    {Name: 'UAH', Id: '2'},
    {Name: 'RUB', Id: '3'}
];


export default (currency = initialCurrency, action) => {
    const {type} = action;
    switch (type) {
        case CURRENCY: return [...action.payload];
        default: return currency;
    }
}
