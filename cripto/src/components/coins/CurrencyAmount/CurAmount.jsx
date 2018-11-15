import React, {Component} from 'react';
import {connect} from 'react-redux';
import WrappedComponent from '../HOC/listTransformation';
import './curAmount.css';
import {requestCurrencyListAction} from '../../../AC/sagaCurrency';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CurAmountComponent extends Component {
    _isMounted = false;

    static defaultProps = {
        currensy: []
    };

    componentDidMount() {
        this._isMounted = true;
        const currensyNames = this.props.currencyAll.map(item => item.Name.toUpperCase()).join(',');
        const nameToUpper = this.props.item.Name.toUpperCase();
        if (this._isMounted)
            this.props.requestCurrencyListAction(currensyNames, nameToUpper);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleToggleBtn = (e) => {
        e.preventDefault();
        this.props.handleToggleBtn(this.props.item.Name);
    };

    render() {
        const {item, value, curlist, currencyRate} = this.props;
        return <div className="coinAmount">
            <div className="coinAmount_text"><span>{item.Name}:</span>
                <ul>
                    {curlist.map(el => {
                            return (<div key={el.Name}>
                                    <li >{(value * (currencyRate[el.Name] ? currencyRate[el.Name]['PRICE'] : 0)).toFixed(2)} {el.Name}</li>
                                    {this.props.toggleBtn === this.props.item.Name ?
                                        <ReactCSSTransitionGroup
                                            transitionName="coinInfo"
                                            transitionAppear={true}
                                            transitionAppearTimeout={500}
                                            transitionEnter={false}
                                            transitionLeave={false}>
                                            <div className="coinAmount_info">
                                                <ul>
                                                    <li><span>Market:</span> {!!currencyRate[el.Name].MARKET?currencyRate[el.Name].MARKET : null}</li>
                                                    <li><span>LastMarket:</span> {currencyRate[el.Name].LASTMARKET}</li>
                                                    <li><span>High 24 hour:</span> {currencyRate[el.Name].HIGH24HOUR.toFixed(6)}</li>
                                                    <li><span>Open 24 hour:</span> {currencyRate[el.Name].OPEN24HOUR.toFixed(6)}</li>
                                                    <li><span>Price:</span> {currencyRate[el.Name].PRICE.toFixed(6)} {((currencyRate[el.Name].OPEN24HOUR - currencyRate[el.Name].PRICE) < 0) ? <span style={{color: 'green'}}>&#8657;</span> : <span style={{color: 'red'}}>&#8659;</span>}</li>

                                                </ul>
                                            </div>
                                        </ReactCSSTransitionGroup>
                                        :
                                        null}
                                </div>
                            )
                        }
                    )}
                </ul>
                <a href="./" onClick={this.handleToggleBtn} className="toggleArrow">
                    {this.props.toggleBtn === this.props.item.Name ? <span>&and;</span> : <span>&or;</span>}
                </a>
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

