import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import InputText from "./apps/Inputname/Inputname";
import ContactList from "./apps/Contactlist/ContactListES6";
import Counter from "./apps/Counter/Counter";
import Calcult from "./apps/Simple_Calculator/Own_calculator";
import DifCulc from "./apps/Calculator/DifficultCalculator";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <ContactList />
        <hr/>
        <InputText />
        <Counter />
        <hr/>
        <Calcult />
        <hr />
        <DifCulc />
      </div>
    );
  }
}


export default App;
