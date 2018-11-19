import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddItemForm from '../Price/Form/AddItemForm';
import Coin from '../Price/Coin/Coin';
import './History.css';
import LineChart from '../Chart/LineChart';


class HistoryComponent extends Component {
    constructor() {
        super();
        this.isActBtnCoin = false;
        this.isActBtnCur = false;
        this.state = {
            data: [],
            toggleBtn: '',
            currentCurrency: '',
            currentCoin: '',
            currencyList: [],
            list: []

        };
    }

    fetchData() {
        const {currentCoin, currentCurrency} = this.state;
        fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${currentCoin}&tsym=${currentCurrency}&limit=10`)
            .then(res => res.json())
            .then(posts => {
                if (posts) {
                    const arrOfPosts = posts.Data;
                    this.setState({
                        data: {...this.state.data, [currentCoin +'-'+ currentCurrency]: arrOfPosts}
                    });
                }
            });
    }

    componentDidMount() {

    }

    handleToggleBtn = (itemName) => {
        this.setState({
            toggleBtn: this.state.toggleBtn !== itemName ? itemName : ''
        })
    };
    handleChange = (value, isCoin) => {
        if (isCoin) {
            this.setState((state, props) => {
                this.isActBtnCur = state.currentCurrency && value;
                return {currentCoin: value}
            });
            this.setState((state, props) => ({currentCoin: value}));
        } else {
            this.setState((state, props) => {
                this.isActBtnCur = state.currentCoin && value;
                return {currentCurrency: value}
            });
        }
        this.isActBtnCur = !!(this.state.currentCoin && this.state.currentCurrency) ? false : true;
    };
    handleSubmit = (event) => {
        const {currentCoin, currentCurrency} = this.state;
        if (currentCoin && currentCurrency) {
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
            this.isActBtnCur = false;
        }
        event.preventDefault();
        this.fetchData();
    };
    filterForDelete = (item, isCoin) => (!isCoin ? this.state.currencyList : this.state.list).filter(element => element.Name !== item);

    handleDelete = (item, isCoin) => {
        if (isCoin) {
            const list = this.filterForDelete(item, isCoin);
            this.setState({
                list,
                data: this.state.data.filter(el => !Object.keys(el)[0].toUpperCase().includes(item.toUpperCase()))
            });

        }
    };

    render() {
        const {data, currentCoin, currentCurrency, list} = this.state;
        const {coins, currencyAll} = this.props;
        const arrOfData = Object.keys(data);
        console.log("arrOfData", arrOfData);
        console.log("data", data);

        const backgroundColor =  [
            'rgba(155,100,210,0.6)',
            'rgba(90,178,255,0.6)',
            'rgba(240,134,67,0.6)',
            'rgba(255,105,145,0.6)',
            'rgba(120,120,120,0.6)',
            'rgba(5, 245, 42,0.6)',
            'rgba(200, 217, 197,0.6)',
            'rgba(250, 245, 137,0.6)',
            'rgba(210,55,117,0.6)',
            'rgba(0, 191, 255,0.6)'
        ];
        const borderColor = 'transparent';
        const chartData = {
            labels: [], //to push dynamically
            datasets: []
        };
        arrOfData.map((item, i) => {
            let dataSet = [];
            if (data[item]) {
                data[item].map((el, j) => {
                    dataSet.push(el.high);
                    chartData.labels[j] = data[item][j].time;
                    return el;
                })
            }
            chartData.datasets[i] = {label: item, backgroundColor: backgroundColor.splice(-1).concat(backgroundColor), borderColor, data: dataSet};
            return item;
        });

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 posts  text-center">
                            <h1>History</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-right hidden-button">
                            <AddItemForm onSubmit={this.handleSubmit}
                                         value={currentCoin}
                                         onChange={this.handleChange}
                                         coins={coins}
                                         list={list}
                                         isCoin={true}
                                         disabled={!this.isActBtnCoin}>Pick your coins.</AddItemForm>
                        </div>
                        <div className="col-md-6">
                            <AddItemForm onSubmit={this.handleSubmit}
                                         value={currentCurrency}
                                         onChange={this.handleChange}
                                         coins={currencyAll}
                                         list={[]}
                                         isCoin={false}
                                         disabled={!this.isActBtnCur}>Pick your coins.</AddItemForm>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Coin handleDelete={this.handleDelete}
                                  list={list}
                                  items={coins}
                                  classN="coins"/>
                        </div>
                    </div>


                                <LineChart dataSet={chartData} />


                        {/*}else{*/}
                            {/*return <div className="row border-bottom row-bottom" key={item}>*/}
                                {/*<div className="col-md-12 text-center text-tomato font-weight-bold text-uppercase">{item} no data</div>*/}
                            {/*</div>*/}
                        {/*}*/}

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

const History = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HistoryComponent);

export default History;
