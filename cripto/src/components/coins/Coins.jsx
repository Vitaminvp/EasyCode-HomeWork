import React, {Component} from 'react';
import coinsData from '../../data/coinsList.json';
import SelectOpt from "./selectOption/select";

class Coins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: Object.keys(coinsData.Data).slice(0, 12).map(key => coinsData.Data[key]),
            value: '',
            isActBtn: true
        };
        console.table(this.state.coins);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = {
        test: "select your coin."
    }

    handleChange(event) {
        const value = event.target.value;
        if(value){
            this.setState({
                value,
                isActBtn: false
            });
        }else {
            this.setState({
                value,
                isActBtn: true
            });
        }
    }

    handleSubmit(event) {
        if (this.state.value) {
            alert('Your choice is: ' + this.state.value);
        }
        event.preventDefault();
    }

    render() {
        const {coins} = this.state;
        console.log(coins);
        return (
            <div>
                <h1>Coins {this.props.test}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your coin:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value=""></option>
                            {this.state.coins.map(coin => <SelectOpt Name={coin.Name} key={coin.Id}/>)}
                        </select>
                    </label>
                    <input type="submit" value="Submit" disabled={this.state.isActBtn}/>
                </form>
            </div>
        );
    }
}

export default Coins;

