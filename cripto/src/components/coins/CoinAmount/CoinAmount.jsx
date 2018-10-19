import React, {Component} from 'react';
import './coinAmount.css';

class CoinAmount extends Component {
    handleCange = (e) => {
        e.preventDefault();
        this.props.handleCoinsChangeAmount(this.props.coin.Name, e.target.value);

    }
    render() {
        const {coin, value} = this.props;
        return (
            <div className="coinAmount">
                <label className="coinAmount_label"><span>{coin.Name}:</span> <input onChange={this.handleCange} defaultValue={value} className="coinAmount_input" /></label>
            </div>
        );
    }
}

export default CoinAmount;

