// @flow

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Login from '../views/Login';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Fragment>
  </Router>
);

export default App;
