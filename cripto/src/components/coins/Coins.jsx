import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";
import Span from "./CoinAmount/Span";
import Form from "./Form/Form";
import ErrorBoundary from "../ErrorBoundary";
import './coins.css';
import {currency} from "../../AC";
import {current} from "../../AC";
import {value} from "../../AC";

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
        // ------------ localStorage ------------- //
        // const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        // const curlist = localStorage.getItem('curlist')?JSON.parse(localStorage.getItem('curlist')):[];
        // ------------ localStorage ------------- //
        const split = this.props.match.params.list.split('|');
        const list = split[0] ? split[0].split('&').map(item => ({
                                                            Name: item.split(':')[0],
                                                            value: parseInt(item.split(':')[1])
                                                        })) : [];
        const curlist = split[1] ? split[1].split('&').map(item => ({Name: item})) : [];
        this.state = {
            curlist,
            list
        };
    }
    static propTypes = {
        currencyAC: PropTypes.func.isRequired,
        currency: PropTypes.array.isRequired,
        current: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    };
    static defaultProps = {
        test: "select your coin."
    };
    // ------------ localStorage ------------- //
    setLocalState = () => {
        const localList = [...this.state.list];
        const localCurList = [...this.state.curlist];
        localStorage.setItem('list', JSON.stringify(localList));
        localStorage.setItem('curlist', JSON.stringify(localCurList));
    };
    getLocalState = () => {
        const list = this.state.list.map(item => `${item.Name}:${item.value}`).join('&');
        const curlist = this.state.curlist.map(item => `${item.Name}`).join('&');
        let allList;
        if(list || curlist){
            allList = `/coins/${list}|${curlist}`
        }else{
            allList='';
        }
        return allList;
    };

    // ------------ localStorage ------------- //
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

    handleChange = (value, isCoin) => {
        if (isCoin) {
            this.isActBtnCoin = !value;
            this.props.valueAC(value);
        } else {
            this.isActBtnCur = !value;
            this.props.currentAC(value);
        }
    };
    handleSubmit = (event, isCoin) => {
        if (isCoin) {
            const value = {
                Name: this.props.value,
                value: 0
            };
            if (this.props.value) {
                this.props.valueAC('');
                this.setState({
                    list: [...this.state.list, value]
                });
            }
            this.isActBtnCoin = true;
        } else {
            const current = {Name: this.props.current};
            if (current.Name) {
                this.props.currentAC('');
                this.setState({
                    curlist: [...this.state.curlist, current]
                });
            }
            this.isActBtnCur = true;
        }
        event.preventDefault();
    };


    filterForDelete = (item, isCoin) => (!isCoin ? this.state.curlist : this.state.list).filter(element => element.Name !== item);

    handleDelete = (item, isCoin) => {
        if (isCoin) {
            const list = this.filterForDelete(item, isCoin);
            this.setState({list: [...list]});
        } else {
            const curlist = this.filterForDelete(item);
            this.setState({curlist: [...curlist]});
        }
    };

    handleCoinsChangeAmount = (name, value) => {
        let list = [...this.state.list];
        list = list.map(item => {
            if (item.Name === name) item.value = value;
            return item;
        });
        this.setState({list});
    };

    render() {
        const {list, curlist} = this.state;
        const {coins, currency, value, current} = this.props;
        return (
            <div className="coinsWrapper">
                <div className="coinContainer">
                    <h2>Coins: {this.props.test}</h2>
                    <ErrorBoundary>
                        <Form onSubmit={this.handleSubmit}
                              value={value}
                              onChange={this.handleChange}
                              coins={coins}
                              list={list}
                              isCoin={true}
                              disabled={this.isActBtnCoin}>Pick your coins</Form>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Coin handleDelete={this.handleDelete}
                              list={list}
                              items={coins}
                              classN="coins" />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CoinAmount list={list}
                                    items={coins}
                                    classN="coinsAmounts"
                                    handleCoinsChangeAmount={this.handleCoinsChangeAmount}
                                    amount={true}
                                    Spn={<Span>Only numbers allowed!</Span>}/>
                    </ErrorBoundary>

                </div>
                <div className="coinContainer">
                    <h2>Currency: </h2>
                    <ErrorBoundary>
                        <Form onSubmit={this.handleSubmit}
                              value={current}
                              onChange={this.handleChange}
                              coins={currency}
                              list={curlist}
                              disabled={this.isActBtnCur}>Pick your currency</Form>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Cur handleDelete={this.handleDelete}
                             classN="coins"
                             list={curlist}
                             items={currency}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CurAmount list={list}
                                   items={coins}
                                   classN="coinsAmounts"
                                   curlist={curlist}
                                   currencyAll={currency}
                                   amount={true}/>
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currency: state.currency,
    current: state.current,
    value: state.value
});

const mapDispatchToProps = {
    currencyAC: currency,
    currentAC: current,
    valueAC: value
};

const CoinsComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Coins);

export default CoinsComponent;

