import React from 'react';
import {CRYPTO_COMPARE_URL} from '../../../constants';
import './coin.css';

const Coin = ({coin, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleDelete(coin.Name, true);
    }
    return <div className="coin">
        <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName}/>
        <a href="/" onClick={handleClick}>&times;</a>
    </div>;
};

export default Coin;

