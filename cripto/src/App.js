import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import History from './components/History.jsx';
import News from './components/News.jsx';
import Price from './components/Price.jsx';
import Exchange from './components/Exchange.jsx';
import CoinsComponent from './components/coins/Coins.jsx';
import ForOFor from './components/404.jsx'
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import {CRYPTO_COMPARE_URL_ALL} from './constants';
import {COINS_NUM} from './constants';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        const strList = list.map(item => `${item.Name}:${item.value}`).join('&');
        const curlist = localStorage.getItem('curlist')?JSON.parse(localStorage.getItem('curlist')):[];
        const strCurList = curlist.map(item => `${item.Name}`).join('&');
        const url = strList || strCurList ? `/coins/${strList}|${strCurList}` : '/coins/888:3|USD';
        this.state = {
            coins: [],
            url
        }
    }
    handleSetState = (url) => {
        if(url !== this.state.url)
            this.setState({url});
    };
    componentDidMount() {
        this._isMounted = true;
        if(!this.state.coins.length){
            fetch(CRYPTO_COMPARE_URL_ALL)
                .then(responce => responce.json())
                .then(responce => this._isMounted&&this.setState({coins: Object.keys(responce.Data).slice(0, COINS_NUM).map(key => responce.Data[key])}))
                .catch(err => this._isMounted&&alert(err));
        }
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    render() {
        return (
            <Provider store = {store}>
            <BrowserRouter>
                <Route
                    render={({location}) => (
                        <>
                        <TopMenu url={this.state.url} />
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                                <Switch location={location}>
                                    <Route exact path="/" component={Price}/>
                                    <Route path="/history" component={History}/>
                                    <Route path="/exchange" component={Exchange}/>
                                    <Route path="/news" component={News}/>
                                    <Route path="/coins/:list" component={(props) => <CoinsComponent {...props} coins={this.state.coins} handleSetState={this.handleSetState}/>}/>
                                    <Route component={ForOFor}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                        </>
                    )}
                />
            </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
