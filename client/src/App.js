
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DataTable from './components/dataTable';
// import Navbar from './components/navbar';
import Contacts from './components/pages/contacts';
import Bids from './components/bids';
import Projects from './components/projects';
import Login from './components/login';
import Employees from './components/pages/employees';
import EmployeeUpdateForm from './components/forms/EmployeeUpdateForm';
import NewEmployeeForm from './components/forms/newEmployeeForm';
import NewContactForm from './components/forms/newContactForm';
import NewBidForm from './components/forms/newBidForm';
import NewProjectForm from './components/forms/newProjectForm';
// import Calendar from 'react-calendar';
import './App.css';

  
class App extends Component {
    state = {
    username: 'jtorres',
    password: 'fj39g883',
    loggedin: false
    };

  render() {
    return (
      <div className="tablecontainer">
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/dataTable" render={() => <DataTable />} />
            <Route path="/contacts" render={() => <Contacts />}/>
            <Route path="/employee" render={() => <Employees />} />
            <Route path="/update" render={() => <EmployeeUpdateForm /> } />
            </Switch>    

            {/* <Calendar/>   */}
      </div>
    );
  }
}

export default App;
;
