import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor({ addCat }){
    super();
    this.state = {
      name: '',
      alignment: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    const { addCat } = this.props;
    e.preventDefault();
    addCat(this.state);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({ name: '', alignment: ''});
  }

  render() {
    return(
      <form>
        <input 
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          />
        <input 
          name='alignment'
          value={this.state.alignment}
          onChange={this.handleChange}
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