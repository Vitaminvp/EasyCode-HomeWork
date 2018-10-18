import React, {Component} from 'react';
import coinsData from '../../data/coinsList.json';
import SelectOpt from "./selectOption/select";
import './coins.css';
import Coin from "./Coin/Coin";

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtn = true;
        this.state = {
            coins: Object.keys(coinsData.Data).slice(0, 12).map(key => coinsData.Data[key]),
            value: '',
            list: []
        };
    }
    static defaultProps = {
        test: "select your coin."
    };
    handleChange = (event) => {
        const value = event.target.value;
        this.isActBtn = !value;
        this.setState({
            value
        });
        console.log("this.state", this.state);
    };

    handleSubmit = (event) => {
        const {value} = this.state;
        if (value) {
            this.setState({
                list: [...this.state.list, value]
            });
        }
        console.log("this.state", this.state);
        event.preventDefault();
    };
    handleDelete = (item) =>{
        const list = this.state.list.filter(element => element !== item );
        this.setState({
            list
        });
    }
    render() {
        const {coins, list} = this.state;
        return (
            <div>
                <h1>Coins {this.props.test}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <i>Pick your coin:&nbsp;</i>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value=""></option>
                            {coins.map(coin => <SelectOpt Name={coin.Name} key={coin.Id} />)}
                        </select>
                    </label>
                    <input type="submit" value="Submit" disabled={this.isActBtn}/>
                </form>
                <div className="coins">
                    { list.map(item =>  coins.filter(element => item === element.Name ))
                        .map(itm => <Coin coin = {itm[0]} key = {itm[0].Id} handleDelete={ this.handleDelete }/>) }
                </div>
            </div>
        );
    }
}

export default Coins;

