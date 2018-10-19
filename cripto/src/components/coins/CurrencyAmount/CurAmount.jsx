import React, {Component} from 'react';
import './curAmount.css';

class CurAmount extends Component {
    static defaultProps = {
        currensy: []
    };
    render() {
        const {coin, value, currency} = this.props;
        console.log("currency", currency);

        return (
            <div className="coinAmount">
                <div className="coinAmount_text" >{coin.Name}:
                    <ul>
                        {currency.map(item => <li>{value* 528}  {item.Name}</li>)}
                    </ul>

                </div>
            </div>
        );
    }
}

export default CurAmount;

