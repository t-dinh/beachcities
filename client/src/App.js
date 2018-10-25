import React, { Component } from 'react';
import Login from './components/login';
import DataTable from './components/dataTable';
import NewEmployeeForm from './components/forms/newEmployeeForm';
import NewContactForm from './components/forms/newContactForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <NewContactForm />
      </div>
    );
  }
}

export default App;
