import React from 'react';

const ForthComponent = props => (
    <div style = { {
            fontSize: props.fontSize,
            color: props.color,
            fontStyle: props.fontStyle
            } } >
        { props.tag }<br />

        { props.name }
    </div>);

export default ForthComponent;