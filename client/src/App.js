import React, { Component } from 'react';
import Login from './components/login';
import DataTable from './components/dataTable';
import NewEmployeeForm from './components/forms/newEmployeeForm';
import NewContactForm from './components/forms/newContactForm';
import NewBidForm from './components/forms/newBidForm';
import NewProjectForm from './components/forms/newProjectForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <NewBidForm />
      </div>
    );
  }
}

export default App;
;
