import React, {Component} from 'react';
import './coins.css';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";

import Form from "./Form/Form";
import ErrorBoundary from "../ErrorBoundary";

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
        // ------------ localStorage ------------- //
        // const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        // const curlist = localStorage.getItem('curlist')?JSON.parse(localStorage.getItem('curlist')):[];
        // ------------ localStorage ------------- //

        const list = this.props.match.params.list.split('&') ? this.props.match.params.list.split('&').map(item => ({Name: item.split(':')[0], value: parseInt(item.split(':')[1])})) : [];
        const curlist = this.props.match.params.curlist.split('&') ? this.props.match.params.curlist.split('&').map(item => ({Name: item})) : [];

        this.state = {
            currency: [{Name: 'USD', Id: '0'}, {Name: 'EUR', Id: '1'}, {Name: 'UAH', Id: '2'}, {Name: 'RUB', Id: '3'}],
            current: '',
            curlist,
            value: '',
            list
        };
    }

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
    // ------------ localStorage ------------- //
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // ------------ localStorage ------------- //
        this.setLocalState();
        // ------------ localStorage ------------- //
        const list = this.state.list.map(item => `${item.Name}:${item.value}`).join('&');
        const curlist = this.state.curlist.map(item => `${item.Name}`).join('&');
        const allList = `/coins/${list}/${curlist}`;
        if (this.props.location.pathname !== allList) {
            window.history.pushState({ id: 'localhost' }, 'Cripto', allList);
        }
        return null;
    }

    componentDidUpdate(){
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
        const {list, currency, curlist, value} = this.state;
        const {coins} = this.props;
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

