import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.states = {
      stateToDevMtn: [
        "Alabama",
        "Tennessee",
        "Arkansas",
        "Texas"
      ]
    }
  }

  render() {
    let statesTodevMtn = this.state.statesToDevMtn.map((element, index) => {
      return (
        <h1 key={index}>{element}</h1>
      )
    })
    
    return (
      <div className = "App">
        {statesToDevMtn}
      </div>
    );
  }
}

export default App;