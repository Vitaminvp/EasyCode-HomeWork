import React, {Component} from 'react';
import { connect } from 'react-redux';
import WrappedComponent from '../HOC/listTransformation';
import './curAmount.css';
import {requestCurrencyListAction} from '../../../AC/sagaCurrency';
import {CRYPTO_COMPARE_URL} from '../../../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CurAmountComponent extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {toggleBtn: false};
    }
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
    handleToggleBtn = (e) => {
        e.preventDefault();
        this.props.handleToggleBtn(this.props.item.Name);
        console.log("itemName", this.props.item.Name);
        this.setState({toggleBtn: !this.state.toggleBtn})
    };
    render() {
        const {item, value, curlist, currencyRate} = this.props;
        return <div className="coinAmount">
                <div className="coinAmount_text"><span>{item.Name}:</span>
                    <ul>
                        {curlist.map(item => <li
                            key={item.Name}>{(value * currencyRate[item.Name]).toFixed(2)} {item.Name}</li>)}
                    </ul>
                    <a href="./" onClick={this.handleToggleBtn}>
                        {this.props.toggleBtn === this.props.item.Name?<span>&and;</span>:<span>&or;</span>}
                    </a>
                </div>
            {this.props.toggleBtn === this.props.item.Name?
                    <ReactCSSTransitionGroup
                        transitionName="coinInfo"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <div className="coinAmount_info">
                            <div className="img_block"><img src={`${CRYPTO_COMPARE_URL}${item.ImageUrl}`} alt={item.CoinName}/></div>
                            <ul>
                                <li><span>Algorithm:</span> {item.Algorithm}</li>
                                <li><span>FullName:</span> {item.FullName}</li>
                                <li><span>Symbol:</span> {item.Symbol}</li>
                                <li><span>ProofType:</span> {item.ProofType}</li>
                            </ul>
                        </div>
                    </ReactCSSTransitionGroup>
                :
                null}
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

