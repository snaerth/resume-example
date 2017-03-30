import React, { Component } from 'react';
import Left from './components/left';
import Right from './components/right';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    );
  }
}

export default App;
