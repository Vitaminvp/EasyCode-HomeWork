import React, {Component} from 'react';
import './curAmount.css';

class CurAmount extends Component {
    static defaultProps = {
        currensy: []
    };
    render() {
        const {coin, value, currensy} = this.props;
        console.log("currensy", currensy);

        return (
            <div className="coinAmount">
                <div className="coinAmount_text" >{coin.Name}:
                     {value}
                </div>
            </div>
        );
    }
}

export default CurAmount;

