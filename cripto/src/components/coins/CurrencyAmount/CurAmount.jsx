import React, {Component} from 'react';
import { connect } from 'react-redux';
import WrappedComponent from '../HOC/listTransformation';
import './curAmount.css';
import {requestCurrencyListAction} from '../../../AC/sagaCurrency';

class CurAmountComponent extends Component {
    _isMounted = false;


    static defaultProps = {
        currensy: []
    };
    componentDidMount() {
        this._isMounted = true;
        const currensyNames = this.props.currencyAll.map(item => item.Name.toUpperCase()).join(',');
        const nameToUpper = this.props.item.Name.toUpperCase();
        if(this._isMounted)
            this.props.requestCurrencyListAction(currensyNames, nameToUpper);
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    render() {
        const {item, value, curlist, currencyRate} = this.props;
        return <div className="coinAmount">
            <div className="coinAmount_text"><span>{item.Name}:</span>
                <ul>
                    {curlist.map(item => <li
                        key={item.Name}>{(value * currencyRate[item.Name]).toFixed(2)} {item.Name}</li>)}
                </ul>
            </div>
        </div>;
    }
}
const mapStateToProps = state => ({
    currencyRate: state.currencyRate.currencyRate,
});

const mapDispatchToProps = {
    requestCurrencyListAction,
};


const CurAmount = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WrappedComponent(CurAmountComponent));

export default CurAmount;

