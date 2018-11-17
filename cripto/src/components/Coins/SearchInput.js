import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchInput extends Component {
    static propTypes = {
        // value: PropTypes.string.isRequired,
        // onChange: PropTypes.func.isRequired,
    };

    state = {
        isValid: true,
    };

    handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        const { onChange } = this.props;
        onChange(searchTerm);
        if (!searchTerm) {
            this.setState({ isValid: true });
        } else if (searchTerm.length < 3) {
            this.setState({ isValid: false });
        } else {
            this.setState({ isValid: true });
        }
    };

    render() {
        const { value } = this.props;
        const { isValid } = this.state;

        return (
            <React.Fragment>
                <label htmlFor="search">
                    Search
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Type to search"
                        value={value}
                        onChange={this.handleSearchChange}
                    />
                </label>
                {!isValid && <p>Search term should have at least 3 character</p>}
            </React.Fragment>
        );
    }
}

export default SearchInput;