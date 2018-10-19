import React, {Component} from 'react';
import './currency.css';

class Cur extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.handleDeleteCur(this.props.cur.Name);
    }
    render() {
        const {cur} = this.props;
        return (
            <div className="coin">
                <div>{cur.Name}</div>
                <a href="/" onClick={this.handleClick}>&times;</a>
            </div>
        );
    }
}

export default Cur;

