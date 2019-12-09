import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      listItems: []
    }
  }
  handleChange(textInput) {
    this.setState({ textInput: this.textInput.value})
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h2>To Do Items</h2>
          <input
            type='text'
            value={this.state.value}
            placeholder='To do item here'
            onChange={textInput => this.handleChange(textInput)}
            ></input>
            <button type='submit' value='submit'>+</button>

        </header>
      </div>
    );
  }
}

export default App;
