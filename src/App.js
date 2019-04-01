import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputList from './components/inputList.js';

class App extends Component {

  render() {
    const inputs = [
      "name",
      "address"
    ]
    return (
      <div className="App">
        <InputList inputs={inputs} />
      </div>
    );
  }
}

export default App;
