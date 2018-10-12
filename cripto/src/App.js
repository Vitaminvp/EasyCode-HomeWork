import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import History from './components/History.jsx';
import News from './components/News.jsx';
import Price from './components/Price.jsx';
import Exchange from './components/Exchange.jsx';
import Coins from './components/Coins.jsx';
import ForOFor from './components/404.jsx'
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';

class App extends Component {
    render() {
        return (
            <Router>
                <Route
                    render={({location}) => (
                        <>
                        <TopMenu/>
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                                <Switch location={location}>
                                    <Route exact path="/" component={Price}/>
                                    <Route path="/history" component={History}/>
                                    <Route path="/exchange" component={Exchange}/>
                                    <Route path="/news" component={News}/>
                                    <Route path="/coins" component={Coins}/>
                                    <Route component={ForOFor}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                        </>
                    )}
                />
            </Router>
        );
    }
}

export default App;
