import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      cars: [
        "Ford",
        "Chevy",
        "Toyota",
        "Honda",
        "BMW",
        "Honda",
        "Mercades",
        "Tesla"
      ]
    }
  }

  handleChange(filter) {
    this.setState({filterString:filter})
  }

  render() {
    let carsToDisplay = this.state.cars.filter((element, index) => {
      return element.includes(this.state.filterString);
    }).map ((element, index) => {
      return <h1 key = {index} > {element}</h1>
    })

    return (
      <div className="App">
        <input onChange = { (e) => this.handleChange(e.target.value)} type="text" />
        {carsToDisplay}
      </div>
    );
  }
}

export default App;
