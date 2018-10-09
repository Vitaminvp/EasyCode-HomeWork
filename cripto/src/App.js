import React from 'react';
// import logo from './logo.svg';
import './App.css';
import thirdComponent from './components/third';
import secondComponent from './components/second';




const first = require('./components/temp.js')[0].name;
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
