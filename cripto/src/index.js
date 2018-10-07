// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

const SecondComponent = ({ fontSize }) => {
    console.log("fontSize", fontSize);
    return <div>
    <h2 style={{ fontSize }}>
    Second component
    </h2>
    </div>
};

const FirstComponent = () => (
    <div>
    <h1>
    My first component!!!
</h1>
<SecondComponent fontSize={18} />
<SecondComponent fontSize={16} />
<SecondComponent fontSize={14} />
</div>
);

ReactDOM.render(<FirstComponent />, document.getElementById('root'));