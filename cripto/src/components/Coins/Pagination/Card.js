import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {CRYPTO_COMPARE_URL} from '../../../constants';

class Card extends Component {
    render() {
        const {card} = this.props || {};

        return (
            <Fragment>
                <div className="col-sm-6 col-md-4 country-card">
                    <div
                        className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
                        <div className="w-100 position-relative border-gray border-right px-2 bg-white rounded-left">
                            <span className="country-name text-dark d-block font-weight-bold">
                                  <h2><a href={`/coins/${card.Name}:1|USD&EUR&UAH&RUB`}
                                         rel="noopener noreferrer">{card.CoinName}</a></h2>
                            </span>
                            <img
                                src={`${CRYPTO_COMPARE_URL}${card.ImageUrl}`}
                                className="d-block w-100"
                                alt={card.CoinName} />
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

Card.propTypes = {
    card: PropTypes.shape({
        CoinName: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        ImageUr: PropTypes.string.isRequired,
        Id: PropTypes.string.isRequired

    }).isRequired
};
export default Card;
