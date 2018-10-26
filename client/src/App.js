import './App.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DataTable from './components/dataTable';
import Navbar from './components/navbar';
import Contacts from './components/contacts';
import Bids from './components/bids';
import Projects from './components/projects';
import Login from './components/login';
import Employees from './components/pages/employees';
import NewEmployeeForm from './components/forms/newEmployeeForm';
import NewContactForm from './components/forms/newContactForm';
import NewBidForm from './components/forms/newBidForm';
import NewProjectForm from './components/forms/newProjectForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DataTable />
        <Navbar/>
        <Switch>
            <div className="container">
            <Route exact path="/" render={() => <Projects />} />
            <Route path="/contacts" render={() => <Contacts />}/>
            <Route path="/employee" render={() => <Employees />} />
            </div>
            </Switch>        
      </div>
    );
  }
}

export default App;
;
