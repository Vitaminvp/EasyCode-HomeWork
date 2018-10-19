import React, {Component} from 'react';
import SelectOpt from "./selectOption/select";
import './coins.css';
import Coin from "./Coin/Coin";
import CoinAmount from "./CoinAmount/CoinAmount";
import CurAmount from "./CurrencyAmount/CurAmount";
import Cur from "./Currency/Cur";
import { CRYPTO_COMPARE_URL_ALL } from '../../constants';

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
        this.state = {
            currency: [{Name: 'USD', Id: '0'}, {Name: 'EUR', Id: '1'}, {Name: 'UAH', Id: '2'}],
            current: '',
            curlist: [],
            coins: [],
            value: '',
            list: []
        };
    }
    componentDidMount() {
        fetch(CRYPTO_COMPARE_URL_ALL)
            .then(responce => responce.json())
            .then(responce => this.setState({ coins: Object.keys(responce.Data).slice(0, 12).map(key => responce.Data[key]) }))
            .catch(err => alert(err));
    }
    static defaultProps = {
        test: "select your coin."
    };
    handleChangeCoin = (event) => {
        const value = event.target.value;
        this.isActBtnCoin = !value;
        this.setState({
            value
        });
    };
    handleChangeCur = (event) => {
        const current = event.target.value;
        this.isActBtnCur = !current;
        this.setState({
            current
        });
    };
    handleSubmit = (event) => {
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
    handleSubmitCur = (event) => {
        const current = {
            Name: this.state.current
        };
        if (current) {
            this.setState({
                current: '',
                curlist: [...this.state.curlist, current]
            });
        }
        console.log("this.state.curlist", this.state.curlist);
        this.isActBtnCur = true;
        event.preventDefault();
    };
    handleDelete = (item) => {
        const list = this.state.list.filter(element => element.Name !== item);
        this.setState({
            list
        });
    };
    handleDeleteCur = (item) => {
        const curlist = this.state.curlist.filter(element => element.Name !== item);
        this.setState({
            curlist
        });
    };
    handleCoinsChangeAmount = (name, value) =>{
        let list = [...this.state.list];
        list = list.map(item => {
            if(item.Name === name ) item.value = value;
            return item;
        });
        this.setState({
            list
        });
    };
    render() {
        const {coins, list, currency, curlist} = this.state;
        const listToMap = list.map(item => coins.filter(element => item.Name === element.Name));
        const curlistToMap = curlist.map(item => currency.filter(element => item.Name === element.Name));
        return (
            <div className="coinsWrapper">
                <div className="coinContainer">
                    <h2>Coins: {this.props.test}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <i>Pick your coin:&nbsp;</i>
                            <select value={this.state.value} onChange={this.handleChangeCoin} className="coinSelect">
                                <option value=""></option>
                                {coins.filter(coin => list.every(lst => lst.Name !== coin.Name)).map(item => <SelectOpt
                                    Name={item.Name} key={item.Id}/>)}
                            </select>
                        </label>
                        <input type="submit" value="Add" disabled={this.isActBtnCoin} className="submitBtn"/>
                    </form>
                    <div className="coins">
                        {listToMap.map(itm => {
                                    const [item] = itm;
                                    return <Coin coin={item} key={item.Id} handleDelete={this.handleDelete}/>
                                })}
                    </div>
                    <div className="coinsAmount">
                        {listToMap.map(itm => {
                                    const [item] = itm;
                                    const [coinFromList] = this.state.list.filter(elem => elem.Name === item.Name);
                                    return <CoinAmount coin={item} key={item.Id} value={coinFromList.value} handleCoinsChangeAmount={this.handleCoinsChangeAmount}/>
                                })}
                    </div>
                </div>
                <div className="coinContainer">
                    <h2>Curensy: </h2>
                    <form onSubmit={this.handleSubmitCur}>
                        <label>
                            <i>Pick your currency:&nbsp;</i>
                            <select value={this.state.current} onChange={this.handleChangeCur} className="coinSelect">
                                <option value=""></option>
                                {currency.filter(cur => curlist.every(lst => lst.Name !== cur.Name))
                                    .map(item => <SelectOpt Name={item.Name} key={item.Id}/>)}
                            </select>
                        </label>
                        <input type="submit" value="Add" disabled={this.isActBtnCur} className="submitBtn"/>
                    </form>
                    <div className="coins">
                        {curlistToMap.map(itm => {
                            const [item] = itm;
                            return <Cur key ={item.Id} cur={item} handleDeleteCur={this.handleDeleteCur} />;
                        })}
                    </div>
                    <div className="coinsAmount">
                        {listToMap.map(itm => {
                            const [item] = itm;
                            const [coinFromList] = this.state.list.filter(elem => elem.Name === item.Name);
                            return <CurAmount coin={item} key={item.Id} value={coinFromList.value} currency={this.state.curlist} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Coins;

