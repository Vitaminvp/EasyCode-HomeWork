import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import History from './components/History.jsx';
import News from './components/news/News.jsx';
import Coins from './components/Coins.jsx';
import Exchange from './components/Exchange.jsx';
import PriceComponent from './components/coins/Price.jsx';
import ForOFor from './components/404.jsx'
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import { connect } from 'react-redux';
import { getCoinsList } from './AC';


class AppComponent extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        const coinsList = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        const strCoinsList = coinsList.map(item => `${item.Name}:${item.value}`).join('&');
        const currencylist = localStorage.getItem('currencyList')?JSON.parse(localStorage.getItem('currencyList')):[];
        const strCurrencyList = currencylist.map(item => `${item.Name}`).join('&');
        const url = strCoinsList || strCurrencyList ? `/price/${coinsList}|${strCurrencyList}` : '/price/888:1|USD';
        this.state = {
            url
        }
    }
    handleSetState = (url) => {
        if(url !== this.state.url)
            this.setState({url});
    };
    componentDidMount() {
        this._isMounted = true;
        this.props.getCoinsList();
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    render() {
        console.log("this.props.App", this.props);
        return (
            <BrowserRouter>
                <Route
                    render={({location}) => (
                        <>
                        <TopMenu url={this.state.url} />
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                                <Switch location={location}>
                                    <Route exact path="/" component={Coins}/>
                                    <Route path="/price/:list" component={(props) => <PriceComponent {...props} coins={this.props.coins} handleSetState={this.handleSetState}/>}/>
                                    <Route path="/history" component={History}/>
                                    <Route path="/exchange" component={Exchange}/>
                                    <Route path="/news" component={News}/>

                                    <Route component={ForOFor}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                        </>
                    )}
                />
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => ({
    coins: state.coins.coins,
});

const mapDispatchToProps = {
    getCoinsList,
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
