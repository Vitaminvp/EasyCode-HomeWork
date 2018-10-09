import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


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
const first = require('./second.js')[0].name;
const  App = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, first),
        React.createElement(secondComponent, {
            fontSize: 18,
            color: 'red',
            tag: 'h2'
        }),
        React.createElement(secondComponent, {
            fontSize: 16,
            undefined,
            fontStyle: 'italic',
            name: 'SomeName',
            tag: 'h3'
        }),
        React.createElement(thirdComponent, { fontSize: 14, tag: 'h3' }),
        React.createElement(thirdComponent, {
            fontSize: 14,
            tag: 'h3',
            name: 'third'
        })
    );
};



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
