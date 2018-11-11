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
import { connect } from 'react-redux';
import { getCoinsList } from './AC';


class AppComponent extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        const list = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
        const strList = list.map(item => `${item.Name}:${item.value}`).join('&');
        const curlist = localStorage.getItem('curlist')?JSON.parse(localStorage.getItem('curlist')):[];
        const strCurList = curlist.map(item => `${item.Name}`).join('&');
        const url = strList || strCurList ? `/coins/${strList}|${strCurList}` : '/coins/888:1|USD';
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
                                    <Route path="/coins/:list" component={(props) => <CoinsComponent {...props} coins={this.props.coins} handleSetState={this.handleSetState}/>}/>
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
