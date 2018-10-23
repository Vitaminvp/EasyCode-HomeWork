import React from 'react';
import { shallow } from 'enzyme';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";
import SelectOpt from "./selectOption/select";
import { CRYPTO_COMPARE_URL_ALL } from '../../constants';

let coinsList;

coinsList = fetch(CRYPTO_COMPARE_URL_ALL)
    .then(responce => responce.json())
    .then(responce =>  Object.keys(responce.Data).slice(0, COINS_NUM).map(key => responce.Data[key]))
    .catch(err => alert(err));

console.log("coinsList", coinsList);

it('Coins render correctly', () => {
    const component = shallow(<SelectOpt />);
    expect(component).toMatchSnapshot();
});

it('Search should render correct amount of coins', () => {
    const component = shallow(<SelectOpt />);
    expect(component.find(SelectOpt).length).toEqual(coinsList.length);
});

xit('Search should render correct amount of coins based on seach term', () => {
    const component = shallow(<Coin />);
    const searchTerm = 'bitcoin';
    component.find('input').simulate('change', { target: { value: searchTerm } });
    const searchCount = component.instance().filterListBySearchTerm(coinsList, searchTerm).length;
    expect(component.find(Coin).length).toEqual(searchCount);
});