import React, {Component} from 'react';
import './coinAmount.css';

class CoinAmount extends Component {
    handleChange = (e) => {
        const re = /^[0-9.\b]+$/;

        if (e.target.value === '' || re.test(e.target.value)) {
            this.props.handleCoinsChangeAmount(this.props.coin.Name, e.target.value);
        }else e.target.value = '';
        e.preventDefault();
    }
    render() {
        const {coin, value} = this.props;
        return (
            <div className="coinAmount">
                <label className="coinAmount_label"><span>{coin.Name}:</span> <input onChange={this.handleChange} defaultValue={value} className="coinAmount_input" /></label>
            </div>
        );
    }
}

export default CoinAmount;

