require('./style.css');

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
const firstComponent = () => {
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

ReactDOM.render(
  React.createElement(firstComponent),
  document.getElementById('app')
);
