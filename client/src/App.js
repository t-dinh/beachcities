import './App.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DataTable from './components/dataTable';
import Navbar from './components/navbar';
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
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-3" id="side">
      <div>this is the sidebar</div>
      </div>
      <div className="tablecontainer">
      <div>Welcome, ...</div>
        <div className="navi"><Navbar/></div>
        <Switch>
            <div className="dataBox">
            <Route exact path="/" render={() => <Login />} />
            <Route path="/dataTable" render={() => <DataTable />} />
            <Route path="/contacts" render={() => <Contacts />}/>
            <Route path="/employee" render={() => <Employees />} />
            <Route path="/update" render={() => <EmployeeUpdateForm /> } />
            </div>
            </Switch>        
      </div>
      </div>
    );
  }
}

export default App;
;
