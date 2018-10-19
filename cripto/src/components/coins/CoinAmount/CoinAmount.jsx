import React, {Component} from 'react';
import './coinAmount.css';

class CoinAmount extends Component {
    handleClick = (e) => {
        e.preventDefault();

    }
    render() {
        const {coin} = this.props;
        return (
            <div className="coinAmount">
                <label className="coinAmount_label"><span>{coin.Name}:</span> <input name={coin.Name} onClick={this.handleClick} className="coinAmount_input" /></label>
            </div>
        );
    }
}

export default CoinAmount;

