import React, { Component } from 'react';
import Login from './components/login';
import Employee from './components/employee'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Employee />
      </div>
    );
  }
}

export default App;
