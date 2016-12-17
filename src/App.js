import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Culculator from "./apps/Calculator/DifficultCalculator";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <Culculator />
      </div>
    );
  }
}


export default App;
