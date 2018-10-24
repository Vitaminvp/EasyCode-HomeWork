import React, {Component} from 'react';
import './coins.css';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";
import {CRYPTO_COMPARE_URL_ALL} from '../../constants';
import {COINS_NUM} from '../../constants';
import Form from "./Form/Form";

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
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

    componentDidMount() {
        fetch(CRYPTO_COMPARE_URL_ALL)
            .then(responce => responce.json())
            .then(responce => this.setState({coins: Object.keys(responce.Data).slice(0, COINS_NUM).map(key => responce.Data[key])}))
            .catch(err => alert(err));
    }

    handleChangeCoin = e => {
        const value = e.target.value;
        this.isActBtnCoin = !value;
        this.setState({value});
    };
    handleChangeCur = e => {
        const current = e.target.value;
        this.isActBtnCur = !current;
        this.setState({current});
    };
    handleSubmit = event => {
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
        event.preventDefault();
    };
    handleSubmitCur = event => {
        const current = { Name: this.state.current };
        if (current) {
            this.setState({
                current: '',
                curlist: [...this.state.curlist, current]
            });
        }
        this.isActBtnCur = true;
        event.preventDefault();
    };
    handleDelete = (item, isCoin) => {
        if(isCoin){
            const list = this.state.list.filter(element => element.Name !== item);
            this.setState({list});
        }else{
            const curlist = this.state.curlist.filter(element => element.Name !== item);
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
        const {coins, list, currency, curlist} = this.state;
        const listToMap = list.map(item => coins.filter(element => item.Name === element.Name));
        return (
            <div className="coinsWrapper">
                <div className="coinContainer">
                    <h2>Coins: {this.props.test}</h2>
                    <Form  onSubmit={this.handleSubmit}
                           value={this.state.value}
                           onChange={this.handleChangeCoin}
                           coins={coins}
                           list={list}
                           disabled={this.isActBtnCoin}
                    />
                    <Coin handleDelete={this.handleDelete}
                          list={list}
                          items={coins}
                     />
                    <div className="coinsAmount">
                        {listToMap.map(itm => {
                            const [item] = itm;
                            const [coinFromList] = this.state.list.filter(elem => elem.Name === item.Name);
                            return <CoinAmount coin={item} key={item.Id} value={coinFromList.value}
                                               handleCoinsChangeAmount={this.handleCoinsChangeAmount}/>
                        })}
                    </div>
                </div>
                <div className="coinContainer">
                    <h2>Curensy: </h2>
                    <Form  onSubmit={this.handleSubmitCur}
                           value={this.state.current}
                           onChange={this.handleChangeCur}
                           coins={currency}
                           list={curlist}
                           disabled={this.isActBtnCur}
                    />
                    <Cur handleDelete={this.handleDelete}
                         list={curlist}
                         items={currency} />

                    <div className="coinsAmounts">
                        {listToMap.map(itm => {
                            const [item] = itm;
                            const [coinFromList] = this.state.list.filter(elem => elem.Name === item.Name);
                            return <CurAmount coin={item} key={item.Id} value={coinFromList.value}
                                              currency={this.state.curlist} currencyAll={this.state.currency}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Coins;

