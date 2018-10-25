import React, {Component} from 'react';
import './coins.css';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";
import {CRYPTO_COMPARE_URL_ALL} from '../../constants';
import {COINS_NUM} from '../../constants';
import Form from "./Form/Form";
import ErrorBoundary from "../ErrorBoundary";

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
        const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        const curlist = localStorage.getItem('curlist')?JSON.parse(localStorage.getItem('curlist')):[];

        this.state = {
            currency: [{Name: 'USD', Id: '0'}, {Name: 'EUR', Id: '1'}, {Name: 'UAH', Id: '2'}, {Name: 'RUB', Id: '3'}],
            coins: [],
            current: '',
            curlist,
            value: '',
            list
        };
    }

    static defaultProps = {
        test: "select your coin."
    };
    componentDidMount() {
        fetch(CRYPTO_COMPARE_URL_ALL)
            .then(responce => responce.json())
            .then(responce => this.setState({coins: Object.keys(responce.Data).slice(0, COINS_NUM).map(key => responce.Data[key])}))
            .catch(err => alert(err));
    }

    setLocalState = () => {
        const localList = [...this.state.list];
        const localCurList = [...this.state.curlist];
        localStorage.setItem('list', JSON.stringify(localList));
        localStorage.setItem('curlist', JSON.stringify(localCurList));
    };

    componentWillUnmount(){
        this.setLocalState();
    }

    handleChange = (value, isCoin) => {
        if (isCoin) {
            this.isActBtnCoin = !value;
            this.setState({value});
        } else {
            this.isActBtnCur = !value;
            this.setState({current: value});
        }
        this.setLocalState();
    };
    handleSubmit = (event, isCoin) => {
        if (isCoin) {
            const value = {
                Name: this.state.value,
                value: 0
            };
            if (value) {
                this.setState({
                    value: '',
                    list: [...this.state.list, value]
                });
            }
            this.isActBtnCoin = true;
        } else {
            const current = {Name: this.state.current};
            if (current) {
                this.setState({
                    current: '',
                    curlist: [...this.state.curlist, current]
                });
            }
            this.isActBtnCur = true;
        }
        event.preventDefault();
        this.setLocalState();
        console.log("this.state.list", this.state.list);
        console.log("this.state.curlist", this.state.curlist);
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
        this.setLocalState();
        console.log("this.state.list", this.state.list);
        console.log("this.state.curlist", this.state.curlist);
    };

    handleCoinsChangeAmount = (name, value) => {
        let list = [...this.state.list];
        list = list.map(item => {
            if (item.Name === name) item.value = value;
            return item;
        });
        this.setState({list});
        this.setLocalState();
    };

    render() {
        const {coins, list, currency, curlist, value} = this.state;
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
                              classN="coins"/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CoinAmount list={list}
                                    items={coins}
                                    classN="coinsAmounts"
                                    handleCoinsChangeAmount={this.handleCoinsChangeAmount}
                                    amount={true}/>
                    </ErrorBoundary>

                </div>
                <div className="coinContainer">
                    <h2>Currency: </h2>
                    <ErrorBoundary>
                        <Form onSubmit={this.handleSubmit}
                              value={this.state.current}
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

export default Coins;

