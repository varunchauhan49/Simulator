import React, { Component } from 'react';
import Simulator from './Simulator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Robot Simulator</h1>
        </header>
        <Simulator />
      </div>
    );
  }
}

export default App;
