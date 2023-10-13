// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter

import App from './App';

ReactDOM.render(
  <Router> {/* Wrap your entire app with the Router */}
    <App />
  </Router>,
  document.getElementById('root')
);



