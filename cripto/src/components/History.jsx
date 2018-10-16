import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
                <h1>History</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dignissimos sit. Aperiam autem cum debitis doloremque libero qui, quia repellat rerum? Error maxime modi nisi nobis possimus quas quod rerum saepe voluptate voluptates? Facilis inventore itaque officia quae soluta? Aliquid assumenda explicabo natus optio porro possimus quaerat quia sit vitae!</p>
                <Redirect exact to="/"/>
            </div>
        );
    }
}
export default History;
