import React from 'react';

const Secondcomponent = props => (
    <div>
        <h2  style = { {fontSize: props.fontSize, color: props.color, fontStyle: props.fontStyle } } >
            { props.name }
        </h2>
    </div>
);

export default Secondcomponent;