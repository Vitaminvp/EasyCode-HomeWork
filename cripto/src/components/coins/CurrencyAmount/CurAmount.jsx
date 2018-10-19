import React, {Component} from 'react';
import './curAmount.css';

class CurAmount extends Component {
    render() {
        const {coin} = this.props;
        return (
            <div className="coinAmount">
                <div className="coinAmount_input" >{coin.Name}:</div>
            </div>
        );
    }
}

export default CurAmount;

