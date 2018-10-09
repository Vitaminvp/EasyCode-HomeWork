import React from 'react';

const forthComponent = props => {
    return React.createElement(
        props.tag || 'div',
        {
            style: {
                fontSize: props.fontSize,
                color: props.color,
                fontStyle: props.fontStyle
            },
            key: Math.random()
        },
        [props.name || 'forth', ' \n']
    );
};

export default forthComponent;