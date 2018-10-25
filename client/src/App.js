import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DataTable from './components/dataTable';
import Navbar from './components/navbar';
import Employee from './components/employee';
import Contacts from './components/contacts';
import Bids from './components/bids';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <DataTable />
        <Navbar/>
        <Switch>
          <Route path="/homepage" render={()=> <DataTable />} />
          <Route path="/employee" render={()=> <Employee />} />
          <Route path="/contacts" render={()=> <Contacts />} />
          <Route path="/bids" render={()=> <Bids />} />
          <Route path="/projects" render={()=> <Projects />} />
        </Switch>

      </div>
    );
  }
}

export default App;
