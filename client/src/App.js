import React, { Component } from 'react';
import Login from './components/login';
import DataTable from './components/dataTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <DataTable />
      </div>
    );
  }
}

export default App;
