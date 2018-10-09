import React from 'react';

const secondComponent = props => {
    return React.createElement(
        props.tag || 'h2',
        {
            style: {
                fontSize: props.fontSize,
                color: props.color,
                fontStyle: props.fontStyle
            }
        },
        props.name || 'Second component'
    );
};

export default secondComponent;