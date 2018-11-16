import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

class TopMenu extends Component {
    render() {
        return (
            <nav className="top-menu">
                <ul className="menu-main">
                    <li>
<<<<<<< HEAD
                        <NavLink to={this.props.url} activeClassName="active">Price</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" activeClassName="active" exact>Coins</NavLink>
=======
                        <NavLink to="/" activeClassName="active" exact>Coins</NavLink>
                    </li>
                    <li>
                        <NavLink to={this.props.url} activeClassName="active">Price</NavLink>
>>>>>>> 10fa16b7be609762bb5da1d5116be336449a4fa7
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
            </nav>
        );
    }
}
export default TopMenu;
