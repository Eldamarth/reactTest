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

  //we will define a function in the parent component app to add a new cat to our list, it will take in the newCat object and reassign state with a built in method on React class components called setState, which is asynchronous. Handy tip: it can accept a second argument of a callback function, which is a very convenient place to put a console log checking the component's state, a console log place directly after it will fire before it has updated 

  addCat = newCat => {
    this.setState({ cats : [...this.state.cats, newCat]});
  }

  //we've modified the render here to include the newly imported Form component, and have given it the method addCat as a 'prop,' which is how any information passed down from parent to child is referred to (everything listed as an attribute in the jsx element will be combined into a props object). We use this pattern of defining a method on the parent and passing it to a child in order to maintain the correct this binding 

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
        <header className="App-header">
          <h1>CatFactory</h1>
          <p>Make some cats!</p>
        </header>
        <main className='main-display'>
          <Form 
            addCat={this.addCat} 
          />
          <div className='cat-display'>
          {catList}
          </div>
        </main>
      </div>
    )
  }
 
}

export default App;
