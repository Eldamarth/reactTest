import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      cats: [{name:"Midi",alignment:"Chaotic Neutral"},{name:"Hanzo",alignment:"Chaotic Evil"}]
    }
  }

  render() {
    const { cats } = this.state;
    const catList = cats.map(cat => {
      return <div id='cat-box'>
        <p id="name">
          {cat.name}
        </p>
        <p id="alignment">
          {cat.alignment}
        </p>
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
