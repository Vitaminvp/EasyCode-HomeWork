import React, {Component} from 'react';
import './coinAmount.css';

class CoinAmount extends Component {
    handleChange = (e) => {
        e.target.classList.remove('alarm');
        e.target.parentNode.lastChild.style.display = 'none';

        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.props.handleCoinsChangeAmount(this.props.coin.Name, e.target.value);
        } else {
            e.target.classList.add('alarm');
            this.props.handleCoinsChangeAmount(this.props.coin.Name, '0');
            e.target.parentNode.lastChild.style.display = 'block';
        }
        e.preventDefault();
    };

    render() {
        const {coin, value} = this.props;
        return (
            <div className="coinAmount">
                <label className="coinAmount_label"><span className="coinName">{coin.Name}:</span> <input onChange={this.handleChange}
                                                                                     defaultValue={value}
                                                                                     className="coinAmount_input"/>
                                                                              <span className="warning">Input numbers!</span></label>
            </div>
        );
    }
}

export default CoinAmount;

