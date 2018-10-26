import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import History from './components/History.jsx';
import News from './components/News.jsx';
import Price from './components/Price.jsx';
import Exchange from './components/Exchange.jsx';
import Coins from './components/coins/Coins.jsx';
import ForOFor from './components/404.jsx'
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import {CRYPTO_COMPARE_URL_ALL} from './constants';
import {COINS_NUM} from './constants';

class App extends Component {

    constructor(props) {
        super(props);
        const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        const strList = list.map(item => `${item.Name}:${item.value}`).join('&');
        const curlist = localStorage.getItem('curlist')?JSON.parse(localStorage.getItem('curlist')):[];
        const strCurList = curlist.map(item => `${item.Name}`).join('&');
        const url = `/coins/${strList}/${strCurList}`;
        this.state = {
            coins: [],
            url
        }
    }
    componentDidMount() {
        if(!this.state.coins.length){
            fetch(CRYPTO_COMPARE_URL_ALL)
                .then(responce => responce.json())
                .then(responce => this.setState({coins: Object.keys(responce.Data).slice(0, COINS_NUM).map(key => responce.Data[key])}))
                .catch(err => alert(err));
        }
    }
    render() {
        return (
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
                                    <Route path="/coins/:list/:curlist" component={(props) => <Coins {...props} coins={this.state.coins} />}/>
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

export default App;
