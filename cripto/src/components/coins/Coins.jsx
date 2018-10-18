import React, {Component} from 'react';
import coinsData from '../../data/coinsList.json';
import SelectOpt from "./selectOption/select";
import './coins.css';

class Coins extends Component {
    constructor(props) {
        super(props);
        this.isActBtn = true;
        this.state = {
            coins: Object.keys(coinsData.Data).slice(0, 12).map(key => coinsData.Data[key]),
            value: '',
            list: ['test']
        };
    }

    static defaultProps = {
        test: "select your coin."
    }

    handleChange = (event) => {
        const value = event.target.value;
        if(value){
            this.setState({
                value
            });
            this.isActBtn = false;
        }else {
            this.setState({
                value
            });
            this.isActBtn = true
        }
    };

    handleSubmit = (event) => {
        if (this.state.value) {
            // let list = [...this.state.list];
            // list.push(this.state.value);
            alert('Your choice is: ' + this.state.value);
            this.setState({
                list: [...this.state.list, this.state.value]
            });
        }
        console.log("this.state.list", this.state.list);
        event.preventDefault();
    };

    render() {
        const {coins} = this.state;
        return (
            <div>
                <h1>Coins {this.props.test}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <i>Pick your coin:&nbsp;</i>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value=""></option>
                            {coins.map(coin => <SelectOpt Name={coin.Name} key={coin.Id}/>)}
                        </select>
                    </label>
                    <input type="submit" value="Submit" disabled={this.isActBtn}/>
                </form>

            </div>
        );
    }
}

export default Coins;

