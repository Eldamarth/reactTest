import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';

class App extends Component{
  constructor() {
    super();
    this.state = {
      cats: [{name:"Midi",alignment:"Chaotic Neutral"},{name:"Hanzo",alignment:"Chaotic Evil"}]
    }
  }

  addCat = newCat => {
    this.setState({ cats : [...this.state.cats, newCat]});
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
        <Form 
          addCat={this.addCat} 
          />
        {catList}
      </div>
    )
  }
 
}

export default App;
