import React from 'react';
import ForthComponent from './forth';

const ThirdComponent = props => (
    <h2 style = { { fontSize: props.fontSize, color: props.color, fontStyle: props.fontStyle } } >
        { props.name }
        <ForthComponent tag = {'span'}  name = {'forth1'} />
        <ForthComponent tag = {'div'} name = {'forth2' } />
        <ForthComponent />
    </h2>
);

export default ThirdComponent;