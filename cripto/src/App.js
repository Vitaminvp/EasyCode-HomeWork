import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ThirdComponent from './components/third';
import Secondcomponent from './components/second';




const first = require('./components/temp.js')[0].name;
const  App = () => <React.Fragment>
                        <h1>{ first }</h1>
                        <Secondcomponent fontSize = {18} color = {'red'} tag = {'h2'} name = {'SomeName'} />
                        <Secondcomponent fontSize = {16} fontStyle = {'italic'} name = {'SomeName'} tag = {'h3'} />
                        <ThirdComponent fontSize = {14} tag = {'h3'} name = {'SomeName'} />,
                        <ThirdComponent fontSize = {14} tag = {'h3'} name = {''} />
                        <ThirdComponent fontSize = {14} tag = {'h3'} name = {''} />
                    </React.Fragment>;



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
