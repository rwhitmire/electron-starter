// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Login from '../views/Login';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
