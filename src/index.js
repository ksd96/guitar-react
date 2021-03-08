import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import './index.scss';

const data = require('./data/data.json');

ReactDOM.render(
  <React.StrictMode>
    <App store={data.guitars} />
  </React.StrictMode>,
  document.getElementById('root')
);
