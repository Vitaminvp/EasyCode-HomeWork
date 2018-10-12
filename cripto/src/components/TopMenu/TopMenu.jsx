import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

class TopMenu extends Component {
    render() {
        return (
            <nav className="top-menu">
                <ul className="menu-main">
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
                    <li>
                        <NavLink to="/coins" activeClassName="active">Coins</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default TopMenu;
