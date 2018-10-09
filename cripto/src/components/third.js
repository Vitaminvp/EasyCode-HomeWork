import React from 'react';
import forthComponent from './forth';

const thirdComponent = props => {
    return React.createElement(
        props.tag || 'h2',
        {
            style: {
                fontSize: props.fontSize,
                color: props.color,
                fontStyle: props.fontStyle
            }
        },
        props.name || [
            forthComponent({ tag: 'span', name: 'forth1' }),
            forthComponent({ tag: 'div', name: 'forth2' }),
            forthComponent({})
        ]
    );
};

export default thirdComponent;