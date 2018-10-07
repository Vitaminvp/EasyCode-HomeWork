import React from 'react';
import ReactDOM from 'react-dom';

const SecondComponent = ({ fontSize }) => (
  <div>
    <h2 style={{ fontSize }}>
      Second component
    </h2>
  </div>
);

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

ReactDOM.render(<FirstComponent />, document.getElementById('app'));
