import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchInput extends Component {
    static propTypes = {
        // value: PropTypes.string.isRequired,
        // onChange: PropTypes.func.isRequired,
    };

    handleSearchChange = (event) => {
        const is_array = obj => {
            if(obj.constructor.toString().indexOf('Array') === -1) {
                return false;
            }
            return true;
        };


        const strip_tags = input => {
            let newInput;
            if (input) {
                const tags = /(<([^>]+)>)/ig;
                if (!is_array(input)) {
                    newInput = input.replace(tags,'');
                }
                else {
                    newInput = input.map(item => item.replace(tags,''));
                }
                return newInput;
            }
            return false;
        };

        const searchTerm = strip_tags(event.target.value);
        const { onChange } = this.props;

        if(searchTerm) {
            onChange(searchTerm);
        }
    };

    render() {
        const { value } = this.props;

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
            </React.Fragment>
        );
    }
}

export default SearchInput;