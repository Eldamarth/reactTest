import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      cats: ["Midi","Hanzo"]
    }
  }

  render() {
    const { cats } = this.state;
    const catList = cats.map(cat => {
      return <div id='cat-box'>
        {cat}
      </div>
    });
    return (
      <div className="App">
        {catList}
      </div>
    )
  }
 
}

export default App;
