import React from 'react';
import './currency.css';

const Cur = ({cur, handleDeleteCur}) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleDeleteCur(cur.Name);
    };
    return <div className="coin">
        <h3>{cur.Name}</h3>
        <a href="/" onClick={handleClick}>&times;</a>
    </div>;
};

export default Cur;

