import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment }  from '../AC';

class News extends Component {
    static propTypes = {
      counter:  PropTypes.number
    };
    handleClick = () => {
        this.props.increment();
        console.log("inc", this.props.counter );
    };
    render() {
        return (
            <div>
                <h1>News {this.props.counter}</h1>
                <button onClick={this.handleClick}>+Add</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dignissimos sit. Aperiam autem cum debitis doloremque libero qui, quia repellat rerum? Error maxime modi nisi nobis possimus quas quod rerum saepe voluptate voluptates? Facilis inventore itaque officia quae soluta? Aliquid assumenda explicabo natus optio porro possimus quaerat quia sit vitae!</p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        counter: state.counter
    }
}
const mapToDispatch = {increment};
const decorator = connect(mapStateToProps, mapToDispatch);
export default decorator(News);
