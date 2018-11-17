import React, {Component} from 'react';
import {connect} from 'react-redux';

import Pagination from './Pagination/Pagination';
import Card from './Pagination/Card';
import { setFilteredCoinsList } from '../../AC';
import SearchInput from './SearchInput';

import "bootstrap/dist/css/bootstrap.min.css";
import './Coins.css';

class CoinsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            currentCountries: [],
            currentPage: null,
            totalPages: null
        };
        this.props.setFilteredCoinsList(this.props.coins);
    }
    handleSearchChange = search => {
        this.props.setFilteredCoinsList(this.filterListBySearchTerm(this.props.coins, search));
        this.onPageChanged({
            currentPage: 1,
            totalPages: Math.floor(this.props.filteredCoinsList.length/18),
            pageLimit: 18,
            totalRecords: this.props.filteredCoinsList.length || 0
        });
        console.log("this.props.filteredCoinsList.length", this.props.filteredCoinsList.length);
        this.setState({ search });

    };

    filterListBySearchTerm = (list, searchTerm) => (
        list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    componentDidMount() {
    }
    onPageChanged = data => {
        const coins = this.props.filteredCoinsList;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentCountries = coins.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentCountries, totalPages });
    };

    render() {
        const {
            currentCountries,
            currentPage,
            totalPages
        } = this.state;
        const { search } = this.state;
        const coins  = this.props.filteredCoinsList || [];
        const totalCountries = coins.length;

        if (totalCountries === 0) return null;

        const headerClass = [
            "py-2 pr-4 m-0",
            currentPage ? "border-gray border-right" : ""
        ]
            .join(" ")
            .trim();

        return (
            <div className="container mb-5">
                <div>
                    <SearchInput value={ search } onChange={ this.handleSearchChange } />
                </div>
                <div className="row d-flex flex-row">
                    <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <h2 className={headerClass}>
                                <strong className="">{totalCountries}</strong>{" "}
                                Coins
                            </h2>
                            {currentPage && (
                                <span className="current-page d-inline-block h-100 pl-4 text-tomato">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                                    <span className="font-weight-bold">{totalPages}</span>
                </span>
                            )}
                        </div>
                        <div className="d-flex flex-row py-4 align-items-center">
                            <Pagination
                                totalRecords={totalCountries}
                                pageLimit={18}
                                pageNeighbours={1}
                                onPageChanged={this.onPageChanged}
                            />
                        </div>
                    </div>
                    {currentCountries.map(card => (
                        <Card key={card.Id} card={card} />
                    ))}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    coins: state.coins.coins,
    filteredCoinsList: state.filteredCoinsList
});

const mapDispatchToProps = {
    setFilteredCoinsList
};

const Coins = connect(
    mapStateToProps,
    mapDispatchToProps
)(CoinsComponent);

export default Coins;


