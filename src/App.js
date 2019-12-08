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
  handleChange(event) {
    console.log(event.target.value)
    // this.setState({value: event.target.value.toUpperCase()});
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
            onChange={this.handleChange}
            ></input>
            <button type='submit' value='submit'>+</button>

        </header>
      </div>
    );
  }
}

export default App;
