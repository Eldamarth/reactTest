import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  //here in the constructor we can destructure the props object into each individual named prop, or we can simply put props as if it were a variable name... since we're not inheriting anything in the state of the constructor from the parent component we don't need it in the super(), which is used to update the this binding for purposes of the state object and make 'this.props' available inside the constructor... we can still access it in this way outside of it, as you will see below

  constructor({ addCat }){
    super();
    this.state = {
      name: '',
      alignment: ''
    }
  }

  //this handleChange method is part of making the rendered inputs a 'controlled form' in React——every time you type into one of the inputs it's going to update the state and keep track of it... note that in the render we don't have to explicitly pass in the event as an argument, React knows that if you are using onClick or onChange it should make it available... otherwise, if you have to explicitly pass things into the invocation, you will need to write these methods as anonymous callback functions in the render, so they aren't automatically invoked every time the component updates (e.g. () => this.handleChange(blah blah) instead of just this.handleChange(blah blah))

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  //this is merely a wrapping function for the addCat function handed down as a prop, again, we don't have to explicitly pass in the event in the invocation, although we need it here to call preventDefault, which will stop the form from refreshing the page (its default behavior on button clicks). We destructure addCat out of the props object, invoke it with the entire state of the form (which only has the properties we are looking for in our new cat), and then invoke a simple cleaner function after that to tidy up the form and return it to blank inputs

  handleSubmit = e => {
    const { addCat } = this.props;
    e.preventDefault();
    addCat(this.state);
    this.clearForm();
  }
  //cleaner-upeer
  clearForm = () => {
    this.setState({ name: '', alignment: ''});
  }

  //again, here you will notice we did not explicitly pass in the event object (although we could have) because React knows that these two event listeners (inline event listeners!) require the event to be passed in, and since each of the inputs is the target of the event it has access to its name and value with e.target when we are invoking setState 

  render() {
    return(
      <form>
        <input 
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Enter a Name'
          />
        <input 
          name='alignment'
          value={this.state.alignment}
          onChange={this.handleChange}
          placeholder='Enter an Alignment'
          />
        <button
          onClick={this.handleSubmit}
        >
        Submit Cat!
        </button>
      </form>
    )
  }
}

export default Form;