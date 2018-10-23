import React from 'react';
import {CRYPTO_COMPARE_URL} from '../../../constants';
import './coin.css';
import WrappedComponent from '../decorators/listTransformation';

const Coin = ({item, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleDelete(item.Name, true);
    }
    return <div className="coin">
        <img src={`${CRYPTO_COMPARE_URL}${item.ImageUrl}`} alt={item.CoinName}/>
        <a href="/" onClick={handleClick}>&times;</a>
    </div>;
};

export default WrappedComponent(Coin);

