import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// Removed strictMode to avoir errors from DOM parsing.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();
//reportWebVitals();
