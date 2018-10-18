import React, {Component} from 'react';
import { CRYPTO_COMPARE_URL } from '../../../constants';
import './coin.css';

class Coin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="coin">
                <h4>{coin.CoinName}</h4>
                <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName} />
            </div>
        );
    }
}

export default Coin;

