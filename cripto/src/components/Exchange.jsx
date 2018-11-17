import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddItemForm from './Price/Form/AddItemForm';
import Coin from './Price/Coin/Coin';



class ExchangeComponent extends Component{
    constructor() {
        super();
        this.isActBtnCoin = true;
        this.isActBtnCur = true;
        this.state = {
            data: [],
            toggleBtn: '',
            currentCurrency: '',
            currentCoin: '',
            currencyList: [],
            list: []

        };
    }
    fetchData(){
        const { currentCoin, currentCurrency } = this.state;
        fetch(`https://min-api.cryptocompare.com/data/top/exchanges?fsym=${currentCoin}&tsym=${currentCurrency}`)
            .then(res => res.json())
            .then(posts => this.setState({data: Object.keys(posts.Data).map(key => posts.Data[key])}));
    }
    componentDidMount() {
        this.fetchData();
    }
    handleToggleBtn = (itemName) => {
        this.setState({
            toggleBtn: this.state.toggleBtn !== itemName ? itemName : ''
        })
    };
    handleChange = (value, isCoin) => {
        if (isCoin) {
            // this.isActBtnCoin = !value;
            this.setState({currentCoin: value});
        } else {
            this.setState({currentCurrency: value});
        }
        this.isActBtnCur = this.state.currentCoin && this.state.currentCurrency ? false : true;
    };
    handleSubmit = (event) => {
        if (this.state.currentCoin && this.state.currentCurrency) {
            this.setState({toggleBtn: ''});
            const coin = {
                Name: this.state.currentCoin
            };

            this.setState({currentCoin: ''});
            this.setState({list: [...this.state.list, coin]});

            const current = {Name: this.state.currentCurrency};
            if (current.Name) {
                this.setState({currentCurrency: ''});
                this.setState({currencyList: [...this.state.currencyList, current]});
            }
            this.isActBtnCur = true;
        }
        event.preventDefault();
        this.fetchData();
    };
    filterForDelete = (item, isCoin) => (!isCoin ? this.state.currencyList : this.state.list).filter(element => element.Name !== item);

    handleDelete = (item, isCoin) => {
        if (isCoin) {
            const list = this.filterForDelete(item, isCoin);
            this.setState({list});
        } else {
            const currencyList = this.filterForDelete(item);
            this.setState({currencyList});
        }
    };
    render() {
        const {data, currentCoin, currentCurrency, list, currencyList} = this.state;
        const {coins, currencyAll} = this.props;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 posts  text-center">
                            <h1>Exchange</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-right">
                            <AddItemForm onSubmit={this.handleSubmit}
                                         value={currentCoin}
                                         onChange={this.handleChange}
                                         coins={coins}
                                         list={list}
                                         isCoin={true}
                                         disabled={this.isActBtnCoin}>Pick your coins.</AddItemForm>
                        </div>
                        <div className="col-md-6">
                            <AddItemForm onSubmit={this.handleSubmit}
                                         value={currentCurrency}
                                         onChange={this.handleChange}
                                         coins={currencyAll}
                                         list={currencyList}
                                         isCoin={false}
                                         disabled={this.isActBtnCur}>Pick your coins.</AddItemForm>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Coin handleDelete={this.handleDelete}
                                  list={list}
                                  items={coins}
                                  classN="coins" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 text-center text-dark font-weight-bold">Excgange</div>
                        <div className="col-md-2 text-center text-dark font-weight-bold">From</div>
                        <div className="col-md-2 text-center text-dark font-weight-bold">To</div>
                        <div className="col-md-2 text-center text-dark font-weight-bold">Price</div>
                        <div className="col-md-2 text-center text-dark font-weight-bold">Volume 24 hour</div>
                        <div className="col-md-2 text-center text-dark font-weight-bold">Volume 24 hour To</div>
                    </div>
                    {data.map(item =>(
                        <div className="row" key={item.exchange}>
                            <div className="col-md-2">{item.exchange}</div>
                            <div className="col-md-2">{item.fromSymbol}</div>
                            <div className="col-md-2">{item.toSymbol}</div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">{item.volume24h}</div>
                            <div className="col-md-2">{item.volume24hTo}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    coins: state.coins.coins,
    currencyAll: state.currencyAll,
    currentCurrency: state.currentCurrency,
    currentCoin: state.currentCoin,
    currencyList: state.currencyList

});

const mapDispatchToProps = {};

const Exchange = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExchangeComponent);

export default Exchange;
