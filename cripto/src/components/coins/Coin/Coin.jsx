import React, {Component} from 'react';
import { CRYPTO_COMPARE_URL } from '../../../constants';
import './coin.css';

class Coin extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.handleDelete(this.props.coin.Name);
    }
    render() {
        const {coin} = this.props;
        return (
            <div className="coin">
                <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName} />
                <a href="/" onClick={this.handleClick}>&times;</a>
            </div>
        );
    }
}

export default Coin;

