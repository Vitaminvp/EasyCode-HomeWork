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
        this.newlist = [];

        this.state = {
            currency: [{Name: 'USD', Id: '0'}, {Name: 'EUR', Id: '1'}, {Name: 'UAH', Id: '2'}, {Name: 'RUB', Id: '3'}],
            current: '',
            curlist: [],
            coins: [],
            value: '',
            list: []
        };
    }

    static defaultProps = {
        test: "select your coin."
    };
    // componentWillMount() {
    //     const list = localStorage.getItem('list');
    //     if(list){
    //         console.log("list", [...Array.from(JSON.parse(list))]);
    //         this.setState({ list: [...Array.from(JSON.parse(list))] });
    //         console.log("this.state", this.state.list);
    //     }
    // }
    componentDidMount() {
        fetch(CRYPTO_COMPARE_URL_ALL)
            .then(responce => responce.json())
            .then(responce => this.setState({coins: Object.keys(responce.Data).slice(0, COINS_NUM).map(key => responce.Data[key])}))
            .catch(err => alert(err));
        // const list = [];
        // for (let key in localStorage) {
        //     if(parseInt(key)) {
        //         list.push(JSON.parse(localStorage[key]));
        //     }
        // }
        // this.setState({
        //     list
        // });


        // const list = localStorage.getItem('list');
        // if(list){
        //     console.log("list", [...Array.from(JSON.parse(list))]);
        //     this.setState({ list: [...Array.from(JSON.parse(list))] });
        //     console.log("this.state", this.state.list);
        // }
    }

    handleChange = (value, isCoin) => {
        if (isCoin) {
            this.isActBtnCoin = !value;
            this.setState({value});
        } else {
            this.isActBtnCur = !value;
            this.setState({current: value});
        }

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
                const localName = value.Name;
                const serialItem = JSON.stringify(value);
                localStorage.setItem(localName, serialItem);
                const Item = JSON.parse(localStorage.getItem(localName));
                console.log("Item", Item);
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
        // console.log("this.state.list", this.state.list);
        event.preventDefault();
    };


    filterForDelete = (item, isCoin) => (!isCoin ? this.state.curlist : this.state.list).filter(element => element.Name !== item);

    handleDelete = (item, isCoin) => {
        if (isCoin) {
            const list = this.filterForDelete(item, isCoin);
            this.setState({list});
        } else {
            const curlist = this.filterForDelete(item);
            this.setState({curlist});
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

