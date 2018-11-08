import React, {Component} from 'react';
import WrappedComponent from '../HOC/listTransformation';
import './curAmount.css';
import {CRYPTO_COMPARE_URL_CUR} from '../../../constants';

class CurAmount extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            currencyRate: {}
        };
    }
    static defaultProps = {
        currensy: []
    };
    componentDidMount() {
        this._isMounted = true;
        const currensyNames = this.props.currencyAll.map(item => item.Name.toUpperCase()).join(',');
        fetch(`${CRYPTO_COMPARE_URL_CUR}${this.props.item.Name.toUpperCase()}&tsyms=${currensyNames}`)
            .then(responce => responce.json())
            .then(responce => this._isMounted&&this.setState({currencyRate: responce}))
            .catch(err => this._isMounted&&alert(err));
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    render() {
        const {item, value, curlist} = this.props;
        return <div className="coinAmount">
            <div className="coinAmount_text"><span>{item.Name}:</span>
                <ul>
                    {curlist.map(item => <li
                        key={item.Name}>{(value * this.state.currencyRate[item.Name]).toFixed(2)} {item.Name}</li>)}
                </ul>
            </div>
        </div>;
    }
}
export default WrappedComponent(CurAmount);

