import React from 'react';
import WrappedComponent from '../decorators/listTransformation';
import './coinAmount.css';

const CoinAmount = ({item, value, handleCoinsChangeAmount}) => {
    const handleChange = (e) => {
        e.target.classList.remove('alarm');
        e.target.parentNode.lastChild.style.display = 'none';

        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            handleCoinsChangeAmount(item.Name, e.target.value);
        } else {
            e.target.classList.add('alarm');
            handleCoinsChangeAmount(item.Name, '0');
            e.target.parentNode.lastChild.style.display = 'block';
        }
        e.preventDefault();
    };

        return <div className="coinAmount">
                <label className="coinAmount_label"><span className="coinName">{item.Name}:</span> <input onChange={handleChange}
                                                                                     defaultValue={value}
                                                                                     className="coinAmount_input"/>
                                                                              <span className="warning">Only numbers allowed!</span></label>
            </div>;
};

export default WrappedComponent(CoinAmount);

