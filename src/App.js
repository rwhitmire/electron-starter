// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotifyButton from './NotifyButton';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <NotifyButton title="foo" body="bar" />
        </p>
      </div>
    );
  }
}

export default App;
