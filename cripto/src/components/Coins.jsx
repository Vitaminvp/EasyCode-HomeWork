import React, { Component } from 'react';


class Coins extends Component {
    getDefaultProps() {
        return {
            test: 500
        };
    }
    render() {
        return (
            <div>
                <h1>Coins {this.props.test}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dignissimos sit. Aperiam autem cum debitis doloremque libero qui, quia repellat rerum? Error maxime modi nisi nobis possimus quas quod rerum saepe voluptate voluptates? Facilis inventore itaque officia quae soluta? Aliquid assumenda explicabo natus optio porro possimus quaerat quia sit vitae!</p>
            </div>
        );
    }
}
export default Coins;
