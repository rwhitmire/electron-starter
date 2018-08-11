import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  showNotification() {
    let notification = new Notification('it', { body: 'worked' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={() => this.showNotification()}>
            show notification
          </button>
        </p>
      </div>
    );
  }
}

export default App;
