import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurrencyAmount from "./CurrencyAmount/CurrencyAmount";
import Currency from "./Currency/Currency";
import Span from "./CoinAmount/ErrorSpan";
import AddItemForm from "./Form/AddItemForm";
import ErrorBoundary from "../ErrorBoundary";
import './price.css';
import {setCurrencyNameAll, setCurrentCurrency, setCurrentCoin, addToCoinsList, setCoinsList, setCurrencyList, addToCurrencyList} from "../../AC";

<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
class Price extends Component {
=======
class PriceComponent extends Component {
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
    constructor(props) {
        super(props);
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
        // ------------ localStorage ------------- //
        // const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        // const currencyList = localStorage.getItem('currencyList')?JSON.parse(localStorage.getItem('currencyList')):[];
        // ------------ localStorage ------------- //
        const split = this.props.match.params.list.split('|');
        const list = split[0] ? split[0].split('&').map(item => ({
                                                            Name: item.split(':')[0],
                                                            value: parseInt(item.split(':')[1])
                                                        })) : [];
        const currencyList = split[1] ? split[1].split('&').map(item => ({Name: item})) : [];
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
        this.props.setListAC(list);
        this.props.setCListAC(currencyList);
=======
        this.props.setCoinsList(list);
        this.props.setCurrencyList(currencyList);
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
        this.state={ toggleBtn: '' };
    }
    static propTypes = {
        setCurrencyNameAll: PropTypes.func.isRequired,
        currencyAll: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,
        currencyList: PropTypes.array.isRequired,
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
        current: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
=======
        setCurrentCoin: PropTypes.func.isRequired,
        currentCoin: PropTypes.string.isRequired
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
    };
    static defaultProps = {
        test: "select your coin."
    };
    // ------------ localStorage ------------- //
    setLocalState = () => {
        const localList = [...this.props.list];
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
        const localCurList = [...this.props.curlist];
        localStorage.setItem('list', JSON.stringify(localList));
        localStorage.setItem('currencyList', JSON.stringify(localCurList));
    };
    getLocalState = () => {
        const list = this.props.list.map(item => `${item.Name}:${item.value}`).join('&');
        const currencyList = this.props.curlist.map(item => `${item.Name}`).join('&');
        let allList;
        if(list || currencyList){
            allList = `/price/${list}|${currencyList}`
=======
        const localCurList = [...this.props.currencyList];
        localStorage.setItem('coinsList', JSON.stringify(localList));
        localStorage.setItem('currencyList', JSON.stringify(localCurList));
    };
    getLocalState = () => {
        const coinsList = this.props.list.map(item => `${item.Name}:${item.value}`).join('&');
        const currencyList = this.props.currencyList.map(item => `${item.Name}`).join('&');
        let allList;
        if(coinsList || currencyList){
            allList = `/coins/${coinsList}|${currencyList}`
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
        }else{
            allList='';
        }
        return allList;
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // ------------ localStorage ------------- //
        this.setLocalState();
        // ------------ localStorage ------------- //

        if (this.props.location.pathname !== this.getLocalState()) {
            const url = this.getLocalState();
            window.history.pushState({id: 'localhost'}, 'Cripto', url);
        }
        return null;
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        const url = this.getLocalState();
        this.props.handleSetState(url);
    }
    handleToggleBtn = (itemName) => {
        this.setState({
            toggleBtn: this.state.toggleBtn !== itemName ? itemName : ''
        })
    };
    handleChange = (value, isCoin) => {
        if (isCoin) {
            this.isActBtnCoin = !value;
            this.props.setCurrentCoin(value);
        } else {
            this.isActBtnCur = !value;
            this.props.setCurrentCurrency(value);
        }
    };
    handleSubmit = (event, isCoin) => {
        if (isCoin) {
            this.setState({toggleBtn: ''});
            const coin = {
                Name: this.props.currentCoin,
                value: 0
            };
            if (this.props.currentCoin) {
                this.props.setCurrentCoin('');
                this.props.addToCoinsList(coin);
            }
            this.isActBtnCoin = true;
        } else {
            const current = {Name: this.props.currentCurrency};
            if (current.Name) {
                this.props.setCurrentCurrency('');
                this.props.addToCurrencyList(current);
            }
            this.isActBtnCur = true;
        }
        event.preventDefault();
    };

    filterForDelete = (item, isCoin) => (!isCoin ? this.props.currencyList : this.props.list).filter(element => element.Name !== item);

    handleDelete = (item, isCoin) => {
        if (isCoin) {
            const list = this.filterForDelete(item, isCoin);
            this.props.setCoinsList(list);
        } else {
            const currencyList = this.filterForDelete(item);
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
            this.props.setCListAC(currencyList);
=======
            this.props.setCurrencyList(currencyList);
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
        }
    };

    handlePriceChangeAmount = (name, value) => {
        let list = [...this.props.list];
        list = list.map(item => {
            if (item.Name === name) item.value = value;
            return item;
        });
        this.props.setCoinsList(list);
    };

    render() {
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
        console.log("this.props", this.props);
        const {coins, currency, value, current, list, currencyList} = this.props;
=======
        const {coins, currencyAll, currentCoin, currentCurrency, list, currencyList} = this.props;
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
        return (
            <div className="coinsWrapper">
                <div className="coinContainer">
                    <h2>Price: {this.props.test}</h2>
                    <ErrorBoundary>

                        <AddItemForm onSubmit={this.handleSubmit}
                              value={currentCoin}
                              onChange={this.handleChange}
                              coins={coins}
                              list={list}
                              isCoin={true}
                              disabled={this.isActBtnCoin}>Pick your coins</AddItemForm>

                        <Coin handleDelete={this.handleDelete}
                              list={list}
                              items={coins}
                              classN="coins" />

                        <CoinAmount list={list}
                                    items={coins}
                                    classN="coinsAmounts"
                                    handlePriceChangeAmount={this.handlePriceChangeAmount}
                                    amount={true}
                                    Spn={<Span>Only numbers allowed!</Span>}/>

                    </ErrorBoundary>

                </div>
                <div className="coinContainer">
                    <h2>Currency: </h2>
                    <ErrorBoundary>
                        <AddItemForm onSubmit={this.handleSubmit}
                              value={currentCurrency}
                              onChange={this.handleChange}
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
                              coins={currency}
                              list={currencyList}
                              disabled={this.isActBtnCur}>Pick your currency</Form>
=======
                              coins={currencyAll}
                              list={currencyList}
                              disabled={this.isActBtnCur}>Pick your currency</AddItemForm>
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Currency handleDelete={this.handleDelete}
                             classN="coins"
                             list={currencyList}
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
                             items={currency}/>
=======
                             items={currencyAll}/>
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CurrencyAmount
                                   list={list}
                                   items={coins}
                                   classN="coinsAmounts"
<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
                                   curlist={currencyList}
                                   currencyAll={currency}
=======
                                   currencyList={currencyList}
                                   currencyAll={currencyAll}
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx
                                   handleToggleBtn = {this.handleToggleBtn}
                                   toggleBtn = {this.state.toggleBtn}
                                   amount={true}/>
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currencyAll: state.currencyAll,
    currentCurrency: state.currentCurrency,
    currentCoin: state.currentCoin,
    list: state.list,
    currencyList: state.currencyList
});

const mapDispatchToProps = {
    setCurrencyNameAll,
    setCurrentCurrency,
    setCurrentCoin,
    setCoinsList,
    addToCoinsList,
    setCurrencyList,
    addToCurrencyList
};

<<<<<<< HEAD:cripto/src/components/coins/Price.jsx
const PriceComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Price);

export default PriceComponent;
=======
const Price = connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceComponent);

export default Price;
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7:cripto/src/components/coins/Price.jsx

