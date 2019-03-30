import React, { Component } from "react";
import '../styles/componentStyles/_option.scss'

class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // this.setState(() => {
    //   return { error }
    // })
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className = 'option__textError'>{this.state.error}</p>}
        <form className = 'add__Option' onSubmit={this.handleAddOption}>
          <input className = 'add__Option__input' type="text" placeholder="Type something here" name="option" />
          <button className = 'button' >Add Option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
