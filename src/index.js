import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/About/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/About" exact component={About} />
  </Router>
);

reportWebVitals();
