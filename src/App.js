import React, { Component } from 'react';
import TestArea from './containers/TestArea'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
           <h1>Test Your Typing Speed</h1>
        </header>
        <TestArea />
      </div>
    );
  }
}

export default App;
