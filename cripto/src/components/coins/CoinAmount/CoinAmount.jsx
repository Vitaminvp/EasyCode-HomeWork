import React from 'react';
import './coinAmount.css';

const CoinAmount = ({coin, value, handleCoinsChangeAmount}) => {
    const handleChange = (e) => {
        e.target.classList.remove('alarm');
        e.target.parentNode.lastChild.style.display = 'none';

        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            handleCoinsChangeAmount(coin.Name, e.target.value);
        } else {
            e.target.classList.add('alarm');
            handleCoinsChangeAmount(coin.Name, '0');
            e.target.parentNode.lastChild.style.display = 'block';
        }
        e.preventDefault();
    };

        return <div className="coinAmount">
                <label className="coinAmount_label"><span className="coinName">{coin.Name}:</span> <input onChange={handleChange}
                                                                                     defaultValue={value}
                                                                                     className="coinAmount_input"/>
                                                                              <span className="warning">Only numbers allowed!</span></label>
            </div>;
};

export default CoinAmount;
