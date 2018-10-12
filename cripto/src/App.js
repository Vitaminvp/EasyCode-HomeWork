import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import History from './components/History.jsx';
import News from './components/News.jsx';
import Price from './components/Price.jsx';
import Exchange from './components/Exchange.jsx';
import Coins from './components/Coins.jsx';
import ForOFor from './components/ForOFor.jsx'
import './App.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active" exact>Price</NavLink>
              </li>
              <li>
                <NavLink to="/history" activeClassName="active">History</NavLink>
              </li>
              <li>
                <NavLink to="/exchange" activeClassName="active">Exchange</NavLink>
              </li>
              <li>
                <NavLink to="/news" activeClassName="active">News</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Price} />
              <Route path="/history" component={History} />
              <Route path="/exchange" component={Exchange} />
              <Route path="/news" component={News} />
              <Route path="/coins" component={Coins} />
              <Route component={ForOFor} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
